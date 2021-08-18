import React, { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import { getInitialDate } from "../functions/date";

const DashboardStateContext = createContext();
const DashboardActionContext = createContext();

export const useDashboardStateContext = () => {
  return useContext(DashboardStateContext);
};

export const useDashboardActionContext = () => {
  return useContext(DashboardActionContext);
};

const DashboardProvider = ({ children }) => {
  // state
  const [isLoggedInContext, setIsLoggedInContext] = useState(false);
  const [isLoadingContext, setIsLoadingContext] = useState(true);
  const [summaryDataContext, setSummaryDataContext] = useState({});

  // function
  const handleLoggedInContext = (status) => {
    // handle login
    setIsLoggedInContext(status);
  };

  const getSummaryDataContext = (startDate, endDate) => {
    setIsLoadingContext(true);
    const token = localStorage.getItem("token");
    const url_api = `https://www.foryoursweetheart.org/Api/getData?start_date=${startDate}&end_date=${endDate}`;
    axios
      .get(url_api, {
        headers: {
          Token: token,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        setTimeout(() => {
          setSummaryDataContext(response.data.data);
          setIsLoadingContext(false);
        }, 500);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  // useEffect
  useEffect(() => {
    if (isLoggedInContext) {
      // get initial data summary
      const date = getInitialDate();
      getSummaryDataContext(date.startDate, date.endDate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedInContext]);

  const dashboardStateStore = {
    isLoggedInContext,
    isLoadingContext,
    summaryDataContext,
  };

  const dashboardActionStore = {
    handleLoggedInContext,
    getSummaryDataContext,
  };

  return (
    <>
      <DashboardStateContext.Provider value={dashboardStateStore}>
        <DashboardActionContext.Provider value={dashboardActionStore}>
          {children}
        </DashboardActionContext.Provider>
      </DashboardStateContext.Provider>
    </>
  );
};

export default DashboardProvider;

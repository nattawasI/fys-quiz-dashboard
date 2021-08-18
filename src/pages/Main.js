import React, { useState, useEffect } from "react";
import { useDashboardStateContext } from "../contexts/DashboardContext";
import Header from "../components/Header";
import Bar from "../components/Bar";
import Dialog from "../components/Dialog";
import ConfirmLogout from "../components/ConfirmLogout";
import SummaryPage from "../components/SummaryPage";
import Loading from "../components/Loading";

const Main = () => {
  // context
  const { isLoadingContext } = useDashboardStateContext();

  // state
  const [showConfirmLogout, setShowConfirmLogout] = useState(false);

  // function
  const toggleConfirmLogout = () => {
    setShowConfirmLogout(!showConfirmLogout);
  };

  // useEffect
  useEffect(() => {
    document.title = "FYS Quiz Dashboard";
  }, []);

  return (
    <div className="app">
      <header className="app__header">
        <Header openConfirmLogout={toggleConfirmLogout} />
      </header>
      <div className="app__bar">
        <Bar />
      </div>
      <div className="app__content">
        {isLoadingContext ? <Loading /> : <SummaryPage />}
      </div>
      {showConfirmLogout && (
        <Dialog onClose={toggleConfirmLogout}>
          <ConfirmLogout closeConfirmLogout={toggleConfirmLogout} />
        </Dialog>
      )}
    </div>
  );
};

export default Main;

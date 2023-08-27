import React from "react";
import AllRoutes from "./AllRoutes";
import Sidebar from "./components/Sidebar";
import styles from "./style";

const App = () => {
  return (
    <>
      <div
        className={`body ${styles.flexCenter} w-full h-full overflow-hidden bg-gradient-to-br from-black to-[#f09800]   flex-col`}
      >
        <Sidebar />
        <AllRoutes />
      </div>
    </>
  );
};
export default App;

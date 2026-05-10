import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="grid-container">
      <div className="side-bar">
        <Sidebar />
      </div>
      <div className="page-area">
        <Outlet />
      </div>
    </div>
  );
}
export default Dashboard;

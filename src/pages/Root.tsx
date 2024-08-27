import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

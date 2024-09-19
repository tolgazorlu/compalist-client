import { Outlet } from "react-router-dom";

export default function ApplicationLayout() {
  return (
    <div className="">
      <Outlet />
    </div>
  );
}

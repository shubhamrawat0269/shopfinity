import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <div>AuthLayout</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;

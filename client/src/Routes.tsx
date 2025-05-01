import { About, Home } from "./pages";
import MainLayout from "./layouts/default";
import AuthLayout from "./layouts/auth-layout/layout";
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";
import AdminLayout from "./layouts/admin-layout/layout";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminOrders from "./pages/admin/Orders";
import ShoppingLayout from "./layouts/shopping-layout/layout";
import NotFound from "./pages/not-found";
import ShoppingHome from "./pages/shopping/home";
import ShoppingList from "./pages/shopping/listing";
import ShoppingCheckout from "./pages/shopping/checkout";
import ShoppingAccount from "./pages/shopping/account";
import CheckAuth from "./components/common/check-auth";
import { createBrowserRouter } from "react-router-dom";
import AdminFeatures from "./pages/admin/Features";
import AdminProducts from "./pages/admin/Products";
const isAuthenticated = false;
const user = null;

const Protected = ({ children }) => (
  <CheckAuth isAuthenticated={isAuthenticated} user={user}>
    {children}
  </CheckAuth>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <AuthLogin /> },
      { path: "register", element: <AuthRegister /> },
    ],
  },
  {
    path: "/admin",
    element: (
      <Protected>
        <AdminLayout />
      </Protected>
    ),
    children: [
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "products", element: <AdminProducts /> },
      { path: "orders", element: <AdminOrders /> },
      { path: "features", element: <AdminFeatures /> },
    ],
  },
  {
    path: "/shop",
    element: (
      <Protected>
        <ShoppingLayout />
      </Protected>
    ),
    children: [
      { path: "home", element: <ShoppingHome /> },
      { path: "listing", element: <ShoppingList /> },
      { path: "checkout", element: <ShoppingCheckout /> },
      { path: "account", element: <ShoppingAccount /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

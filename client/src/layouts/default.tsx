import { Outlet } from "react-router-dom";

export default function Default() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2">
        <div className="max-w-md space-y-6 text-center text-primary">
          <h1 className="text-4xl font-extrabold">Wlecome to Ecommerce Shopping</h1>
        </div>
      </div>
      {/* <Navbar /> */}
      <main className="flex flex-1 items-center justify-center w-1/2">
        <Outlet />
      </main>
    </div>
  );
}

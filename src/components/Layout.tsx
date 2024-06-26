import { Outlet } from "react-router-dom";
import Header from "./reports/Header";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-grow w-11/12 max-w-[70rem] mx-auto pt-2  pb-4 flex flex-col">
        <Outlet />
      </main>
      
      <footer className="bg-red-600 self-bottom">
        <p className="text-xs text-center text-white p-1">
          Derechos Reservados &copy; {new Date().getFullYear()} Kassya Dev
        </p>
      </footer>
    </div>
  );
};

export default Layout;

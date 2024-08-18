import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Layout from "./layout/Layout";
import Attendance from "./pages/Attendance";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Signin />} />

      <Route path="/dashboard" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="attendance" element={<Attendance/>} />
      </Route>
      
    </Route>
  )
);

const App = () => {
  return (
    <div className="w-full min-h-[100vh] font-poppins bg-[#F5F5F5]">
      <RouterProvider router={router} />
    </div>
  );
};

export default App
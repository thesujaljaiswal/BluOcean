import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import AboutusPage from "./pages/AboutusPage";
import ApplyPage from "./pages/ApplyPage";
import ComplaintPage from "./pages/ComplaintPage";
import RefundPage from "./pages/RefundPage";
const routerfg = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/applynow",
    element: <ApplyPage/>
  },
  {
    path: "/aboutus",
    element: <AboutusPage/>
  },
  {
    path: "/contactus",
    element: <ContactPage/>
  },
  {
    path: "/complaint",
    element: <ComplaintPage/>
  },
  {
    path: "/refund",
    element: <RefundPage/>
  },
]);
function App() {
  return (
    <>
     <RouterProvider router={routerfg} />
    </>
  );
}

export default App;

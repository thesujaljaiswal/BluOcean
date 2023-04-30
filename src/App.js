import "./App.css";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import ContactPage from "./pages/ContactPage";
// import HomePage from "./pages/HomePage";
// import AboutusPage from "./pages/AboutusPage";
// import ApplyPage from "./pages/ApplyPage";
// import ComplaintPage from "./pages/ComplaintPage";
// import RefundPage from "./pages/RefundPage";
// import HomePage2 from "./pages/HomePage2";
// import Homepage3 from "./pages/Homepage3";
// import HomePage4 from "./pages/HomePage4";
import Homesecond from "./Components/Homesecond";
// const routerfg = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage/>
//   },
//   {
//     path: "/applynow",
//     element: <ApplyPage/>
//   },
//   {
//     path: "/aboutus",
//     element: <AboutusPage/>
//   },
//   {
//     path: "/contactus",
//     element: <ContactPage/>
//   },
//   {
//     path: "/complaint",
//     element: <ComplaintPage/>
//   },
//   {
//     path: "/refund",
//     element: <RefundPage/>
//   },
//   {
//     path: "/home/hr-outsourcing",
//     element: <HomePage2/>
//   },
//   {
//     path: "/home/vision",
//     element: <Homepage3/>
//   },
//   {
//     path: "/home/executive-search",
//     element: <HomePage4/>
//   },
// ]);
function App() {
  return (
    <>
     {/* <RouterProvider router={routerfg} /> */}
     <Homesecond/>
    </>
  );
}

export default App;

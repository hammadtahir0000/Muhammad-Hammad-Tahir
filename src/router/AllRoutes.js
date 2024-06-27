// import React from "react";
// import Preview from "../views/Preview";
// import HomeDark from "../views/all-home-version/HomeDark";
// import HomeRtl from "../views/all-home-version/HomeRtl";
// import NotFound from "../views/NotFound";
// import { Routes, Route } from "react-router-dom";
// import ContextProvider from "../Context/ContextProvider";
// import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

// const AllRoutes = () => {
//   return (
//     <>
//       <ContextProvider>
//         <ScrollTopBehaviour />
//         <Routes>
//           <Route path="/" element={<HomeDark />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </ContextProvider>
//     </>
//   );
// };

// export default AllRoutes;
// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
// import HomeDark from "../views/all-home-version/HomeDark";
// import NotFound from "../views/NotFound";
// import ContextProvider from "../Context/ContextProvider";
// import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

// const RedirectToHome = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
  
//   useEffect(() => {
//     const specificURL = "https://hammadtahir0000.github.io/Muhammad-Hammad-Tahir/";
    
//     if (location.pathname === specificURL) {
//       navigate("/", { replace: true });
//     }
//   }, [location, navigate]);

//   return null;
// };

// const AllRoutes = () => {
//   return (
//     <Router>
//       <ContextProvider>
//         <ScrollTopBehaviour />
//         <RedirectToHome />
//         <Routes>
//           <Route path="/" element={<HomeDark />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </ContextProvider>
//     </Router>
//   );
// };

// export default AllRoutes;
import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import HomeDark from "../views/all-home-version/HomeDark";
import NotFound from "../views/NotFound";
import ContextProvider from "../Context/ContextProvider";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const RedirectToHome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const specificURLPath = "/Muhammad-Hammad-Tahir/";
    
    if (location.pathname === specificURLPath) {
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  return null;
};

const AllRoutes = () => {
  return (
    <Router>
      <ContextProvider>
        <ScrollTopBehaviour />
        <RedirectToHome />
        <Routes>
          <Route path="/" element={<HomeDark />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
};

export default AllRoutes;

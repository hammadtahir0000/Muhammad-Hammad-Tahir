// import React from "react";
// import { Link } from "react-router-dom";
// import image404 from "../assets/img/404.jpg";

// const NotFound = () => {
//   return (
//     <div className="error_page">
//       <div
//         className="hero bg-image"
//         style={{
//           backgroundImage: `url(${process.env.PUBLIC_URL + image404})`,
//         }}
//       >
//         <div className="content">
//           <h1 data-aos="fade-up" data-aos-duration="1200">
//             404!
//           </h1>
//           <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
//             The page you are looking for could not be found.
//           </p>

//           <div
//             className="button"
//             data-aos="fade-up"
//             data-aos-duration="1200"
//             data-aos-delay="100"
//           >
//             <Link to="/">BACK TO HOME</Link>
//           </div>
//           {/* End purchase_button */}
//         </div>
//       </div>
//       {/* End .hero */}
//     </div>
//   );
// };

// export default NotFound;
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFound;

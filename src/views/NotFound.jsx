
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeDark from "../views/all-home-version/HomeDark";
const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("hammad")
    navigate("/HomeDark"); // Redirect to the HomeDark route immediately
  }, [navigate]);

  return null; // No content is rendered
};

export default NotFound;

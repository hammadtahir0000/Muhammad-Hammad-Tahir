import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Muhammad Hammad" },
  { meta: "last name", metaInfo: "Tahir" },
  { meta: "Age", metaInfo: "23 Years" },
  { meta: "Nationality", metaInfo: "Pakistan" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Blue Area Islamabad Pakistan" },
  { meta: "phone", metaInfo: "+92 xxxxxxxx" },
   { meta: "Email", metaInfo: "hammadtahir003@gmail.com" },
  // { meta: "linkedIn", metaInfo: " steve.milner" },
  { meta: "langages", metaInfo: "English, Urdu, Hindi" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;

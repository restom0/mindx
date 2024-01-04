import { useState } from "react";

const Footer = ({ selectedLanguage, setSelectedLanguage }) => {
  const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode);
  };
  return (
    <div>
      <h3>
        {selectedLanguage === "us" ? "Made by MindX 🔥" : "Làm bởi MindX 🔥"}
      </h3>
      <div>
        <span>
          {selectedLanguage === "us" ? "Available on:" : "Khả dụng trên"}
        </span>
        <span
          className={`languague-picker ${
            selectedLanguage === "vn" ? "selected" : ""
          }`}
          onClick={() => handleLanguageChange("vn")}
        >
          🇻🇳
        </span>
        <span
          className={`languague-picker ${
            selectedLanguage === "us" ? "selected" : ""
          }`}
          onClick={() => handleLanguageChange("us")}
        >
          🇺🇸
        </span>
      </div>
    </div>
  );
};

export default Footer;

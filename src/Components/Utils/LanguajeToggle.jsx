import { useState } from "react";
import { useTranslation } from "react-i18next";
import English from "../../assets/icons/englishFlag.svg";
import Spanish from "../../assets/icons/spanishFlag.svg";

function LanguajeToggle() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language || "en"
  );

  const languages = [
    { code: "en", name: "English", flag: English },
    { code: "es", name: "Español", flag: Spanish },
  ];

  const changeLanguage = (language) => {
    setSelectedLanguage(language.code);
    i18n.changeLanguage(language.code);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-5 py-2 px-4 dropdown">
      {languages.map((language) => (
        <div
          className=""
          key={language.code}
          onClick={() => changeLanguage(language)}
        >
          <img
            className={`cursor-pointer ${selectedLanguage === language.code ? 'scale-110' : 'opacity-50 hover:scale-110'}`}
            src={language.flag}
            alt={language.name}
            width="38"
            height="38"
          />
        </div>
      ))}
    </div>
  );
}

export default LanguajeToggle;

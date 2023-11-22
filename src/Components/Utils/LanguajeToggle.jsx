import { useTranslation } from "react-i18next";

function LanguajeToggle() {
  const { i18n } = useTranslation();
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <select onChange={changeLanguage}>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
}

export default LanguajeToggle;

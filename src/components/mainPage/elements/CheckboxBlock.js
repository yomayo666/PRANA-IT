
import { useState } from "react";
function CheckboxBlock() {
  const [isCheckedLogo, setIsCheckedLogo] = useState(false);
  const [isCheckedBranding, setIsCheckedBranding] = useState(false);
  const [isCheckedDesign, setIsCheckedDesign] = useState(false);
  const handleDivClick = (setStateFunction) => {
    setStateFunction((prev) => !prev);
  };
  return (
    <div className="check-price-container">
              <div className="check-div-logo" onClick={() => handleDivClick(setIsCheckedLogo)}>
        <h5>Логотип</h5>
        <p className="check-price-p1">
          Фирменный символ, применяемый как визуальный идентификатор компании
        </p>
        <input
          type="checkbox"
          className="logo-check price-check"
          checked={isCheckedLogo}
          id="logo"
        />
        <label htmlFor="logo" onClick={() => handleDivClick(setIsCheckedLogo)}>{isCheckedLogo ? 'Выбрано' : 'Не выбрано'}</label>
      </div>
      <div className="check-div-branding" onClick={() => handleDivClick(setIsCheckedBranding)}>
  <h5>Брендинг</h5>
  <p className="check-price-p2">
    Полный набор уникального визуального имиджа компании
  </p>
  <input
    type="checkbox"
    className="branding-check price-check"
    checked={isCheckedBranding}
    id="dis-check"
  />
  <label htmlFor="dis-check" onClick={() => handleDivClick(setIsCheckedBranding)}>
    {isCheckedBranding ? 'Выбрано' : 'Не выбрано'}
  </label>
</div>

      <div className="check-div-design" onClick={() => handleDivClick(setIsCheckedDesign)}>
        <h5>Графический дизайн</h5>
        <p className="check-price-p3">
          Набор услуг по созданию дизайна материалов разной направленности
        </p>
        <input
          type="checkbox"
          className="design-check price-check"
          checked={isCheckedDesign}
          id="services"
        />
        <label htmlFor="services" onClick={() => handleDivClick(setIsCheckedDesign)}>{isCheckedDesign ? 'Выбрано' : 'Не выбрано'}</label>
      </div>
              </div>
  );
}

export default CheckboxBlock;

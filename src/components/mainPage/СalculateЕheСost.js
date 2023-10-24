import "../../css/mainPage/header/СalculateЕheСost.css";
import code from "../../assets/mainPage/BlueSvg/codeBlue.svg";
import box from "../../assets/mainPage/BlueSvg/rombBlue.svg";
import video from "../../assets/mainPage/BlueSvg/videoBlue.svg";
import CheckboxBlock from "./elements/CheckboxBlock";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect, useCallback } from "react";
function СalculateЕheСost() {
  const [isCheckboxBlockVisible1, setIsCheckboxBlockVisible1] = useState(false);
  const [isCheckboxBlockVisible2, setIsCheckboxBlockVisible2] = useState(false);
  const [isCheckboxBlockVisible3, setIsCheckboxBlockVisible3] = useState(false);
  const [isAnyCheckboxChecked, setIsAnyCheckboxChecked] = useState(false);

  const updateAnyCheckboxChecked = useCallback(() => {
    setIsAnyCheckboxChecked(
      isCheckboxBlockVisible1 || isCheckboxBlockVisible2 || isCheckboxBlockVisible3
    );
  }, [isCheckboxBlockVisible1, isCheckboxBlockVisible2, isCheckboxBlockVisible3]);

  useEffect(() => {
    updateAnyCheckboxChecked();
  }, [updateAnyCheckboxChecked]);
  const toggleButtonText = isAnyCheckboxChecked
    ? "РАССЧИТАТЬ СТОИМОСТЬ"
    : "НУЖНА КОНСУЛЬТАЦИЯ";
  return (
    <article className="price-container">
      <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col xl={8}>
            <div className="us-price">
              <Row>
                <div className="header-price-div">
                  <h3>Рассчитаем стоимость вашего будущего проекта</h3>
                  <p>
                    Выберите необходимые услуги и опции, мы сможем рассчитать
                    стоимость разработки вашего проекта
                  </p>
                </div>
              </Row>
              <hr className="price-container-line"></hr>
              <div className="development-price-div">
                <Row>
                  <Col xl={4}>
                    <img src={code} alt="Значек кода" />
                    <h4>Разработка</h4>
                  </Col>
                  <Col xl={4}>
                    <div className="order-md-2">
                      <p>
                        Сложившаяся структура организации однозначно определяет
                        каждого участника как способного принимать собственные
                        решения касаемо соответствующих условий активизации
                      </p>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div className="parent-checkbox-development parent-container-checkbox">
                      <label
                        htmlFor="development-switch"
                        className="custom-switch"
                      >
                        <input
                          type="checkbox"
                          id="development-switch"
                          onChange={() => {
                            setIsCheckboxBlockVisible1(
                              !isCheckboxBlockVisible1
                            );
                          }}
                        />
                        <div className="slider"></div>
                      </label>
                    </div>
                  </Col>
                </Row>
              </div>
              <div
                className={`checkbox-block-container ${
                  isCheckboxBlockVisible1 ? "visible" : ""
                }`}
              >
                {isCheckboxBlockVisible1 && <CheckboxBlock />}
              </div>
              <hr></hr>
              <div className="design-price-div">
                <Row>
                  <Col xl={4}>
                    <img src={box} alt="Значек коробки"></img>
                    <h4>Дизайн</h4>
                  </Col>
                  <Col xl={4}>
                    <div className="order-md-2">
                      <p>
                        Сложившаяся структура организации однозначно определяет
                        каждого участника как способного принимать собственные
                        решения касаемо соответствующих условий активизации
                      </p>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div className="design-checkbox-development parent-container-checkbox">
                      <label htmlFor="design-switch" className="custom-switch">
                        <input
                          type="checkbox"
                          id="design-switch"
                          onChange={() => {
                            setIsCheckboxBlockVisible2(
                              !isCheckboxBlockVisible2
                            );
                          }}
                        />
                        <div className="slider"></div>
                      </label>
                    </div>
                  </Col>
                </Row>
              </div>
              <div
                className={`checkbox-block-container ${
                  isCheckboxBlockVisible2 ? "visible" : ""
                }`}
              >
                {isCheckboxBlockVisible2 && <CheckboxBlock />}
              </div>
              <hr></hr>
              <div className="motion-price-div">
                <Row>
                  <Col xl={4}>
                    <img src={video} alt="Значек плеера"></img>
                    <h4>Motion</h4>
                  </Col>
                  <Col xl={4}>
                    <div className="order-md-2">
                      <p>
                        Сложившаяся структура организации однозначно определяет
                        каждого участника как способного принимать собственные
                        решения касаемо соответствующих условий активизации
                      </p>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div className="motion-checkbox-development parent-container-checkbox">
                      <label htmlFor="motion-switch" className="custom-switch">
                        <input
                          type="checkbox"
                          id="motion-switch"
                          onChange={() => {
                            setIsCheckboxBlockVisible3(
                              !isCheckboxBlockVisible3
                            );
                          }}
                        />
                        <div className="slider"></div>
                      </label>
                    </div>
                  </Col>
                </Row>
              </div>
              <div
                className={`checkbox-block-container ${
                  isCheckboxBlockVisible3 ? "visible" : ""
                }`}
              >
                {isCheckboxBlockVisible3 && <CheckboxBlock />}
              </div>
              <hr></hr>
              <div className="container-for-button">
                <button
                  className={`need-consultation ${
                    isAnyCheckboxChecked ? "active" : ""
                  }`}
                >
                  {toggleButtonText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    className="arr-svg-button"
                  >
                    <mask
                      id="mask0_17_1705"
                      masktype="alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="15"
                      height="15"
                    >
                      <rect width="15" height="15" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_17_1705)">
                      <path
                        fill="#FFFFFF"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.2637 2.18865H2.96245V0H15V12.5847H12.8114V3.73625L1.54761 15L0 13.4524L11.2637 2.18865Z"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </Col>
          <Col>1 of 3</Col>
        </Row>
      </Container>
    </article>
  );
}

export default СalculateЕheСost;

import "../../css/mainPage/header/Blog.css";
import mark from "../../assets/mainPage/BlueSvg/Mask group.svg";
import { Container, Row, Col } from "react-bootstrap";
/* "start": "webpack --mode development --watch",
"build": "webpack --mode production" */
function Blog() {
  return (
    <div className="blog-cont">
      <Container>
        <Row>
          <Col className="bobo">1 of 3</Col>
          <Col xl={8}>
            <div className="main-cont-blog">
              <h3>Блог</h3>
              <p>
                Делимся новостями из мира IT, инсайдами нашей студии и
                возрождаем жанр текстовых интервью
              </p>
              <div className="continer-for-events">
                <Col xl={6}>
                  <div className="blog-cont-event1">
                    <button key="event-button">СОБЫТИЕ</button>
                    <button className="read-event-but">
                      читать
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        className="arr-svg-empt event-button"
                      >
                        <mask
                          id="mask0_938_118"
                          maskеtype="alpha"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="11"
                          height="11"
                        >
                          <rect
                            x="0.333008"
                            y="0.666504"
                            width="10"
                            height="10"
                            fill="#D9D9D9"
                          />
                        </mask>
                        <g mask="url(#mask0_938_118)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.84217 2.1256H2.30797V0.666504H10.333V9.05631H8.87391V3.15734L1.36475 10.6665L0.333008 9.63477L7.84217 2.1256Z"
                            fill="#40B6B7"
                          />
                        </g>
                      </svg>
                    </button>
                    <p>
                      Команда разработчиков PRANA IT посетила крупнейшее
                      мероприятие по IT технологиям
                    </p>
                  </div>
                </Col>
                <Col xl={6}>
                  <div className="blog-cont-event2">
                    <button key="useful-button">ПОЛЕЗНОСТИ</button>
                    <button className="read-help-but">
                      читать
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        className="arr-svg-bl"
                      >
                        <mask
                          id="mask0_938_118"
                          maskеtype="alpha"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="11"
                          height="11"
                        >
                          <rect
                            x="0.333008"
                            y="0.666504"
                            width="10"
                            height="10"
                            fill="#D9D9D9"
                          />
                        </mask>
                        <g mask="url(#mask0_938_118)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.84217 2.1256H2.30797V0.666504H10.333V9.05631H8.87391V3.15734L1.36475 10.6665L0.333008 9.63477L7.84217 2.1256Z"
                            fill="#40B6B7"
                          />
                        </g>
                      </svg>
                    </button>
                    <p>
                      Разнообразие дизайна без ограничений: Правда о
                      конструкторе Tilda!
                    </p>
                  </div>
                </Col>
              </div>
            </div>
            <div className="contact-with-us">
              <div className="map-container">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A37001c33ed169d39b5f4aab0fbb10146bc553d2e75aa30ce6759f51d1de94ce6&amp;source=constructor"
                  width="500"
                  height="400"
                  frameBorder="0"
                  title="us adress"
                ></iframe>
              </div>

              <div className="contacts-us">
                <div className="contacts-us-container">
                  <div>
                    <h4>Свяжитесь с нами</h4>
                    <p>
                      Оставьте заявку и команда PRANA IT свяжется с вами любым
                      удобным способом
                    </p>
                  </div>
                  <hr />
                  <div>
                    <div className="text-email-input">
                      <input
                        type="text"
                        className="your-name-input"
                        placeholder="Ваше имя"
                      />
                      <input
                        type="email"
                        className="your-email-input"
                        placeholder="Email"
                      />
                    </div>
                    <input
                      type="number"
                      className="your-number-input"
                      placeholder="Номер телефона"
                    />
                  </div>
                  <hr></hr>
                  <p>Выберите удобный способ связи</p>
                  <div className="buttons-contacts-us">
                    <button className="bt-call">звонок</button>
                    <button className="bt-telegram">telegram</button>
                    <button className="bt-whats-app">whats app</button>
                  </div>
                  <hr />
                  <div>
                    <button className="input-button-call-us">
                      ОТПРАВИТЬ
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        className="button-arr-svg-2"
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
                  <div>
                    <p className="our-conditions">
                      Нажимая кнопку “Отправить” вы соглашаетесь с политикой
                      конфиденциальности
                    </p>
                  </div>
                </div>
              </div>
              <div className="vk">
                <div className="vacancies">
                  <h4>Вакансии</h4>
                  <hr />
                  <div className="web-designer">
                    <h5>Веб-дизайнер</h5>
                    <p>
                      В своём стремлении улучшить пользовательский опыт мы
                      упускаем, что сделанные на базе интернет-аналитики
                    </p>
                  </div>
                  <div className="back-end-developer">
                    <h5>BackEnd разработчик</h5>
                    <p>
                      Вот вам яркий пример современных тенденций — укрепление и
                      развитие внутренней структуры обеспечивает широкому кругу
                    </p>
                  </div>
                  <hr />
                  <a href="https://www.example.com">
                    Посмотреть все вакансии
                    <img src={mark} alt="" className="mark-arr" />
                  </a>
                </div>
                <div className="contacts">
                  <div className="contacts-block">
                    <div>
                      <h4>Контакты</h4>
                      <hr />
                    </div>
                    <div>
                      <h5>Email</h5>
                      <p>info@pranait.ru</p>
                    </div>
                    <div>
                      <h5>Телефон</h5>
                      <p>+7 938 306 99 90</p>
                    </div>
                    <div>
                      <a href="https://www.example.com">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="162"
                          height="46"
                          viewBox="0 0 162 46"
                          fill="none"
                          className="vk-tg-img"
                        >
                          <rect
                            x="58"
                            y="0"
                            width="46"
                            height="46"
                            rx="8"
                            fill="#1D1F2C"
                          />
                          <mask
                            id="mask0_17_70"
                            masktype="alpha"
                            maskUnits="userSpaceOnUse"
                            x="69"
                            y="12"
                            width="23"
                            height="22"
                          >
                            <rect
                              x="70"
                              y="12"
                              width="22"
                              height="22"
                              fill="#D9D9D9"
                            />
                          </mask>
                          <g mask="url(#mask0_17_70)">
                            <path
                              fill="white"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M83.3258 17.3312C81.3554 18.1456 77.4175 19.8312 71.5119 22.388C70.5529 22.7669 70.0506 23.1377 70.0048 23.5002C69.9276 24.1128 70.6996 24.354 71.7509 24.6825C71.8939 24.7272 72.0421 24.7735 72.194 24.8226C73.2283 25.1567 74.6197 25.5476 75.343 25.5631C75.9991 25.5772 76.7314 25.3084 77.5399 24.7567C83.0576 21.0555 85.9059 19.1847 86.0847 19.1443C86.2109 19.1159 86.3857 19.0801 86.5042 19.1847C86.6226 19.2894 86.611 19.4875 86.5984 19.5406C86.5219 19.8646 83.4914 22.6644 81.9231 24.1133C81.4342 24.5649 81.0874 24.8853 81.0165 24.9585C80.8577 25.1224 80.6958 25.2775 80.5403 25.4265C79.5794 26.347 78.8588 27.0373 80.5802 28.1646C81.4074 28.7063 82.0694 29.1542 82.7298 29.6011C83.451 30.0892 84.1703 30.576 85.101 31.1823C85.3382 31.3367 85.5646 31.4972 85.7852 31.6534C86.6245 32.248 87.3786 32.7822 88.3102 32.697C88.8515 32.6475 89.4106 32.1417 89.6946 30.6332C90.3657 27.068 91.6849 19.3435 91.9897 16.1603C92.0164 15.8814 91.9828 15.5245 91.9559 15.3679C91.9289 15.2112 91.8725 14.9879 91.6675 14.8227C91.4248 14.627 91.0501 14.5857 90.8826 14.5885C90.1206 14.602 88.9516 15.0059 83.3258 17.3312Z"
                            />
                          </g>
                          <rect
                            x="116"
                            y="0"
                            width="46"
                            height="46"
                            rx="8"
                            fill="#1D1F2C"
                          />
                          <rect
                            x="-0.000488281"
                            width="46"
                            height="46"
                            rx="8"
                            fill="#1D1F2C"
                          />
                          <path
                            fill="white"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M146.7 15.1625C144.637 13.1 141.887 12 139 12C132.95 12 128 16.95 128 23C128 24.925 128.55 26.85 129.512 28.5L128 34L133.775 32.4875C135.425 33.3125 137.212 33.8625 139 33.8625C145.05 33.8625 150 28.9125 150 22.8625C150 19.975 148.762 17.225 146.7 15.1625ZM134.325 30.8375C135.7 31.6625 137.35 32.075 139 32.075C144.087 32.075 148.075 27.95 148.075 23.1375C148.075 20.6625 147.25 18.4625 145.462 16.675C143.675 15.025 141.475 14.0625 139 14.0625C134.05 14.0625 129.925 18.1875 129.925 23.1375C129.925 24.7875 130.337 26.4375 131.3 27.95L131.575 28.3625L130.612 31.6625L134.05 30.7L134.325 30.8375ZM143.95 25.2C143.675 25.0625 142.3 24.375 142.025 24.375C141.75 24.2375 141.612 24.2375 141.474 24.5125C141.406 24.65 141.234 24.8562 141.062 25.0625C140.89 25.2688 140.718 25.475 140.65 25.6125C140.512 25.75 140.374 25.75 140.099 25.75C140.057 25.7285 140.00 25.7037 139.932 25.6735C139.56 25.5099 138.828 25.1872 137.9 24.375C137.075 23.6875 136.525 22.725 136.387 22.45C136.25 22.175 136.387 22.0375 136.525 21.9L136.937 21.4875C137.006 21.4188 137.04 21.35 137.075 21.2812C137.109 21.2125 137.143 21.1437 137.212 21.075C137.304 20.9833 137.273 20.8917 137.243 20.8C137.227 20.7542 137.212 20.7083 137.212 20.6625C137.212 20.525 136.662 19.15 136.387 18.6C136.25 18.1875 135.975 18.1875 135.837 18.1875H135.287C135.149 18.1875 134.874 18.1875 134.599 18.4625C134.324 18.7375 133.637 19.425 133.637 20.8C133.637 21.9409 134.3 22.9871 134.604 23.4674C134.666 23.566 134.714 23.6407 134.737 23.6875C134.754 23.7045 134.796 23.7637 134.863 23.8563C135.332 24.5124 137.002 26.8486 139.412 27.8125C141.353 28.6119 141.967 28.5577 142.434 28.5163C142.53 28.5079 142.619 28.5 142.712 28.5C143.262 28.5 144.362 27.8125 144.5 27.2625C144.775 26.575 144.775 26.025 144.637 26.025C144.521 25.4446 144.307 25.3542 144.077 25.2573C144.035 25.2395 143.992 25.2214 143.95 25.2Z"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.9995 22.56C11.9995 17.5807 11.9995 15.0947 13.5395 13.54C15.1015 12 17.5875 12 22.5595 12H23.4395C28.4188 12 30.9048 12 32.4595 13.54C33.9995 15.102 33.9995 17.588 33.9995 22.56V23.44C33.9995 28.4193 33.9995 30.9053 32.4595 32.46C30.8975 34 28.4115 34 23.4395 34H22.5595C17.5802 34 15.0942 34 13.5395 32.46C11.9995 30.898 11.9995 28.412 11.9995 23.44V22.56ZM15.7102 18.6953C15.8275 24.4153 18.6875 27.8473 23.7035 27.8473H23.9968V24.5766C25.8375 24.76 27.2308 26.1093 27.7882 27.8473H30.3915C30.1245 26.8597 29.6512 25.9399 29.0027 25.1486C28.3542 24.3573 27.5454 23.7125 26.6295 23.2566C27.4502 22.7569 28.1591 22.0932 28.7117 21.3071C29.2644 20.521 29.649 19.6294 29.8415 18.688H27.4802C26.9669 20.5066 25.4415 22.1566 23.9968 22.3106V18.6953H21.6282V25.0313C20.1615 24.6646 18.3135 22.89 18.2328 18.6953H15.7102Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer className="main-page-footer">
              <p>ООО «PRANA IT» © 2023</p>

              <p>Политика конфиденциальности</p>
            </footer>

            <div className="eleps-box-blog">
              <div className="eleps-box-blog1"></div>
              <div className="eleps-box-blog2"></div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blog;

import code from "../../assets/mainPage/BlueSvg/Code.svg";
import box from "../../assets/mainPage/BlueSvg/BoundingBox.svg";
import video from "../../assets/mainPage/BlueSvg/Video.svg";
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../css/mainPage/header/Main.css';

function Main() {
    const [isFixed, setIsFixed] = useState(true);
    const [maskX, setMaskX] = useState(0.1); // Начальные значения для x
    const [maskZ, setMaskZ] = useState(0.3); // Изначально 70%

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = window.scrollY;
            
            // Функция для обновления параметров анимации
            const updateMaskParameters = () => {
                // Увеличиваем скорость изменения параметров
                const newX = Math.min(Math.max(scrollHeight / 300, 0), 1);
                const newZ = Math.min(Math.max(0.3 + (scrollHeight / 300), 0.7), 1); // 70% изначально и рост до 100%
                
                // Устанавливаем новые значения
                setMaskX(newX);
                setMaskZ(newZ);
                
                if (scrollHeight >= 300) {
                    setIsFixed(false);
                } else {
                    setIsFixed(true);
                }
            };

            // Запускаем функцию обновления через requestAnimationFrame для более плавной анимации
            requestAnimationFrame(updateMaskParameters);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const isGrad = () => (maskX > 0.5 ? `${maskX / 2}` : '0');
    const maskGradient = `linear-gradient(to bottom, rgba(0, 0, 0, ${maskX}) 0%, rgba(0, 0, 0, ${isGrad()}) ${maskZ * 100}%)`;

    return (
        <Container>
            <Row>
                <Col lg={8} md={12}
                className="mx-auto">
                    <main >
                        <div className={`main-container ${isFixed ? 'fixed' : 'not-fixed'}`}
                        style={{
                            WebkitMaskImage: maskGradient,
                        }}>
                            <div className="div-h2">
                                <h2 className="services">Услуги</h2>
                            </div>
                            <div className="services-container">
                                <div className="development-article">
                                    <div className="development-div">
                                        <img src={code} alt="Значек кода" />
                                        <h3>Разработка</h3>
                                    </div>
                                    <hr />
                                    <div>
                                        <h4>Сайты</h4>
                                        <p>Создание сайтов любой сложности, Привлекайте клиентов и развивайте свой бизнес онлайн</p>
                                    </div>
                                    <hr />
                                    <div>
                                        <h4>Чат боты для телеграм</h4>
                                        <p>Улучшите свою коммуникацию с клиентом за счет автоматизации ответов и расширения функционала в мессенджере telegram</p>
                                    </div>
                                </div>

                                <div className="design-article">
                                    <div className="box-div">
                                        <img src={box} alt="Значек коробки" />
                                        <h3>Дизайн</h3>
                                    </div>
                                    <hr />
                                    <div className="check-pas">
                                        <h4>Брендинг</h4>
                                        <p>Анализ аудитории, конкурентов, создание логотипа, цветовой палитры и стиля. Привлекайте клиентов с помощью уникального бренда</p>
                                    </div>
                                    <hr />
                                    <div>
                                        <h4>UI/UX</h4>
                                        <p>Создание привлекательного и интуитивно понятного пользовательского интерфейса</p>
                                    </div>
                                </div>

                                <div className="creative-article">
                                    <div className="player-div">
                                        <img src={video} alt="Значек плеера" />
                                        <h3>Motion</h3>
                                    </div>
                                    <hr />
                                    <div>
                                        <h4>Креатив</h4>
                                        <p>Оживите свой контент с помощью анимации, визуальных эффектов и привлекательных рекламных роликов</p>
                                    </div>
                                    <hr />
                                    <div>
                                        <h4>Промо видео</h4>
                                        <p>Уникальный концепт, сценарий, монтаж и озвучка для вашего бренда. Воздействуйте на целевую аудиторию и увеличьте конверсию с помощью продающих видео роликов</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Navbar, Nav } from 'react-bootstrap';
import '../../css/mainPage/header/Nav.css';
import logoImage from '../../assets/mainPage/BlueSvg/firm.svg';
import mark from '../../assets/mainPage/WhiteSvg/burgerButton.svg';
import { useMediaQuery } from 'react-responsive';

function Navi() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    if (isNavOpen) {
      document.body.classList.remove('overflow-hidden');
    } else {
      document.body.classList.add('overflow-hidden');
    }
  }

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col></Col>
          <Col xl={8} lg={12} md={12}>
            <Navbar expand="md" className='custom-col'>
              <Navbar.Brand>
                <Link to="/">
                  <img src={logoImage} alt="Логотип компании" />
                </Link>
              </Navbar.Brand>
              {isMobile ? (
                <div className='burger-icon' onClick={toggleNav}>
                  <img src={mark} alt="Бургер кнопка" />
                </div>
              ) : (
                <Navbar.Toggle aria-controls="navbar-nav" />
              )}
              <Navbar.Collapse id="navbar-nav" className={`${isNavOpen ? 'show' : ''}`}>
                <Nav className="main-nav">
                  <Link to="/">Портфолио</Link>
                  <Link to="/about">Команда</Link>
                  <Link to="/contact">Блог</Link>
                  <Link to="/contact">Вакансии</Link>
                  <Link to="/contact">Контакты</Link>
                  <Link to="/contact" className="start-project">
                    Начать ПРОЕКТ
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" className="arr-svg-empt">
                      <mask id="mask0_938_118" maskеtype="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="11" height="11">
                        <rect x="0.333008" y="0.666504" width="10" height="10" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_938_118)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.84217 2.1256H2.30797V0.666504H10.333V9.05631H8.87391V3.15734L1.36475 10.6665L0.333008 9.63477L7.84217 2.1256Z" fill="#40B6B7" />
                      </g>
                    </svg>
                  </Link>
                  </Nav>
              </Navbar.Collapse>
            </Navbar>
            <div className={`overlay ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}></div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Routes>
        <Route path="/" />
        <Route path="/about" />
        <Route path="/contact" />
      </Routes>
    </BrowserRouter>
  );
}

export default Navi;
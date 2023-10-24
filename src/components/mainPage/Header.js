import React from 'react';
import Nav from './Nav';
import { Container, Row, Col } from 'react-bootstrap';
import '../../css/mainPage/header/Header.css';
import ParticleCanvas from './elements/ParticleCanvas';
function Header() {
  return (
    <header className="header">
      <Nav />
      <Container>
        <Row>
          <Col></Col>
          <Col xl={8} lg={8} md={12}>
            <div className='header-container'>
              <h1>Энергичные решения для<span> вашего бизнеса</span></h1>
              <p className='info-header'>Комплексная разработка онлайн-присутствия компаний</p>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <div className='eleps33'>
        <div className='eleps4'></div>
        <div className='eleps5'></div>
      </div>
      <ParticleCanvas/>
    </header>
  );
}

export default Header;

import '../../css/mainPage/header/Header.css'
import Nav from './Nav';
function Header() {
    return (
      <header className="header">

        <Nav/>
        <div className='header-container'>
            <h1>Энергичные решения для<span> вашего бизнеса</span></h1>
            <p className='info-header'>Комплексная разработка онлайн-присутствия компаний</p>
        </div>
        <div className='eleps3 eleps-conain'>
          <div className='eleps4 eleps-conain1'></div>
          <div className='eleps5 eleps-conain2'></div>
        </div>
      </header>
    );
}
export default Header

import './Drivers.css';
import logo from '../../assets/logo.png';
import F1 from '../../assets/F1.jpg';
import F2 from '../../assets/F2.jpg';
import F3 from '../../assets/F3.png';
import tickets from '../../assets/tickets.png';
import cart from '../../assets/cart.png';

const Drivers = () => {
  const navigateToLink = (url) => {
    window.location.href = url;
  }

  return (
    <div className='drivers'>
      <div className="program" onClick={() => navigateToLink('https://www.formula1.com/en/racing/2024')}>
        <img src={F1} alt=''/>
        <div className='caption'>
          <img src={logo} alt=''/>
          <span>SCHEDULE</span>
        </div>
      </div>
      <div className="program" onClick={() => navigateToLink('https://f1store.formula1.com/')}>
        <img src={F2} alt=''/>
        <div className='caption'>
          <img src={cart} alt=''/>
          <span>STORE</span>
        </div>
      </div>
      <div className="program" onClick={() => navigateToLink('https://tickets.formula1.com/')}>
        <img src={F3} alt=''/>
        <div className='caption'>
          <img src={tickets} alt=''/>
          <span>TICKETS</span>
        </div>
      </div>
    </div>
  )
}

export default Drivers;

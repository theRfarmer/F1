import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { useState } from 'react'


const Contact = () => {
    const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fc94f1de-6319-43ac-b711-0d080848256d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message
            <img src={msg_icon} alt=''/>
        </h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor cumque, ut culpa temporibus voluptatem ipsum reprehenderit sequi dolore sint. Totam, voluptatum iusto. Quam voluptatem natus dolor nihil expedita? Modi, expedita.</p>
      
      <ul>
        <li> <img src={mail_icon} alt="" />FIAScuderia@f1stewards.com</li>
        <li> <img src={phone_icon} alt="" />+1 8957451608</li>
        <li> <img src={location_icon} alt="" />North Carolina, USA</li>
      </ul>
      </div>
      <div className='contact-col'>
       <form onSubmit={onSubmit}>
        <label>Your name</label>
        <input type='text' name='name' placeholder='Enter your name' required/>
        <label>Phone</label>
        <input type='tel' name='phone' placeholder='Enter your phone number' required/>
        <label>Write your message</label>
        <textarea name='message' rows="6" placeholder='Enter your message' required></textarea>
        <button type='submit' className='btn dark-btn'>Send
            <img src={white_arrow}/>
        </button>
       </form>
       <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact

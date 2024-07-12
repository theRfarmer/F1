import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt='' className='about-img'/>
        <img src={play_icon} alt='' className='play-icon' onClick={()=>{
          setPlayState(true)
        }}/>
      </div>
      <div className="about-right">
        <h2>FORMULA  1</h2>
        <br/>
        <p>Formula One (F1) is the most prestigious motor-racing competition on the planet. The 2024 season features 24 “Grand Prix” weekends on five continents. Each event involves three days of events: practice sessions on Friday and Saturday, qualifying sessions or short-sprint qualifying races to determine starting positions later on Saturday, and the actual race on Sunday.</p>
    
        {/* <h4>History of F1</h4>
        <p>The Formula 1 world championship began in 1950 and is considered the world’s leading form of single-seater motorsport. The 2024 F1 season is the 75th time the world championship has been held. Seven rounds counted towards the first world championship – including the Indianapolis 500, despite it being run to different rules – but a record-breaking 24 races are scheduled on the 2024 F1 calendar. The series visits Europe, North and South America, the Middle East, Asia, and Australasia.</p> */}
      </div>
    </div>
  )
}

export default About

import './Teams.css'
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import redbull from '../../assets/redbull.jpg';
import williams from '../../assets/williams.jpg';
import stake from '../../assets/stake.jpg';
import alpine from '../../assets/alpine.jpg';
import mercedes from '../../assets/merc.jpg';
import mclaren from '../../assets/mclaren.jpg';
import ferrari from '../../assets/ferrari.jpg';
import aston from '../../assets/aston.jpg';
import visarb from '../../assets/visarb.jpg';
import haas from '../../assets/haas.jpg';
import { useRef , useState} from 'react';


const Teams = () => {
    const slider = useRef();
    const [tx, setTx] = useState(0);
    const totalSlides = 10; 
    const slideWidthPercentage = 100 / totalSlides; 
  
    const slideForward = () => {
      if (tx > -(totalSlides - 1) * slideWidthPercentage) {
        setTx(tx - slideWidthPercentage);
      }
    };
  
    const slideBack = () => {
      if (tx < 0) {
        setTx(tx + slideWidthPercentage);
      }
    };
  
    const teams = [
      {
        image: mercedes,
        name: "Mercedes-Petronas",
        location: "Berlin, Germany",
        description: "Mercedes-AMG Petronas Formula One Team is a dominant force in Formula 1, known for its cutting-edge technology and strategic prowess. Led by Team Principal Toto Wolff, Mercedes has secured numerous Championships with drivers like Lewis Hamilton and George Russell."
      },
      {
        image: redbull,
        name: "Red Bull",
        location: "Milton Keynes, United Kingdom",
        description: "Red Bull Racing Team, based in Milton Keynes, UK, is a prominent contender in Formula 1 known for its aggressive racing style and innovative approach. Helmed by Team Principal Christian Horner, Red Bull has enjoyed success with drivers such as Max Verstappen and Sergio Perez."
      },
      {
        image: ferrari,
        name: "Scuderia Ferrari",
        location: "Maranello, Italy",
        description: "Scuderia Ferrari, based in Maranello, Italy, is synonymous with Formula 1 history and passion. A powerhouse in the sport, Ferrari has a storied legacy of success with iconic drivers like Sebestian Vettel and Michael Schumacher."
      },
      {
        image: stake,
        name: "Alfa Romeo ORLEN",
        location: "Hinwil, Switzerland",
        description: "Alfa Romeo Racing ORLEN, based in Hinwil, Switzerland, has a rich history in Formula 1 under various iterations, including its partnership with Alfa Romeo and Sauber. Known for its meticulous Swiss engineering and strategic approach, the team strives for performance excellence."
      },
      {
        image: mclaren,
        name: "McLaren",
        location: "Woking, United Kingdom",
        description: "McLaren Racing, headquartered in Woking, UK, is known for its commitment to technological innovation and racing heritage in Formula 1. Led by CEO Zak Brown, McLaren has a history of Championships and legendary drivers."
      },
      {
        image: aston,
        name: "Aston Martin Cognizant F1 Team",
        location: "Silverstone, United Kingdom",
        description: "Aston Martin Cognizant Formula One Team, based in Silverstone, UK, brings a blend of British heritage and luxury to Formula 1. Under the leadership of Team Principal Otmar Szafnauer, Aston Martin returns to the sport with a strong focus on performance and innovation."
      },
      {
        image: haas,
        name: "MoneyGram Haas F1 Team",
        location: "Kannapolis, United States",
        description: "Haas F1 Team, founded by American industrialist Gene Haas, competes with a focus on efficiency and performance in Formula 1. With a strategy emphasizing cost-effectiveness and strategic partnerships, Haas continues to develop its presence in the sport."
      },
      {
        image: visarb,
        name: "Visa Cash App RB Formula One Team",
        location: "Faenza, Italy",
        description: "Established in 2006 as a squad in which young drivers from Red Bull’s prodigious talent pool could cut their F1 teeth, RB – originally named Toro Rosso and then AlphaTauri – were formed from the ashes of the plucky Minardi team."
      },
      {
        image: williams,
        name: "Williams Racing",
        location: "Grove, United Kingdom",
        description: "Williams Racing, based in Grove, UK, has a rich history in Formula 1, marked by technical innovation and success. Founded by Sir Frank Williams, the team has been a breeding ground for talented drivers and engineering excellence."
      },
      {
        image: alpine,
        name: "BWT Alpine F1 Team",
        location: "Enstone, United Kingdom",
        description: "Alpine F1 Team, formerly Renault, is based in Enstone, UK, and Viry-Châtillon, France. Known for its engineering prowess and dedication to motorsport innovation, Alpine combines French flair with a competitive spirit."
      }
    ];
  
    return (
      <div className='teams'>
        <img onClick={slideForward} src={next_icon} alt='' className='next-btn'/>
        <img onClick={slideBack} src={back_icon} alt='' className='back-btn'/>
        <div className='slider'>
          <ul className='slides' style={{ transform: `translateX(${tx}%)` }} ref={slider}>
            {teams.map((team, index) => (
              <li key={index} className="slide" style={{ flex: `0 0 ${slideWidthPercentage}%` }}>
                <div className="team-info">
                  <img src={team.image} alt='' />
                  <div>
                    <h3>{team.name}</h3>
                    <span>{team.location}</span>
                  </div>
                  <p>{team.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Teams;
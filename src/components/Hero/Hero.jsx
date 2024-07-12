import './Hero.css'


const Hero = () => {
  const navigateToLink = (url) => {
    window.location.href = url;
  }
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>FORMULA 1</h1>
        <p>Formula 1, or F1, is the pinnacle of motorsport, featuring the fastest and most advanced racing cars. Governed by the FIA, F1 consists of a series of Grands Prix held on circuits and public roads worldwide. The sport is known for its high-speed drama, cutting-edge technology, and fierce competition among teams like Ferrari, Mercedes, and Red Bull. Legendary drivers such as Lewis Hamilton and Michael Schumacher have pushed the limits of human and machine. F1`&#39;`s blend of precision, strategy, and spectacle captivates millions of fans globally, making it a premier event in sports.</p>
        <button onClick={()=>navigateToLink("https://www.formula1.com")} className='btn'>Explore more</button>
      </div>
    </div>
  )
}

export default Hero

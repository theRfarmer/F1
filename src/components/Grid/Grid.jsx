import './Grid.css'
import gallery_1 from '../../assets/gallery_1.png'
import gallery_2 from '../../assets/gallery_2.png'
import gallery_3 from '../../assets/gallery_3.png'
import gallery_4 from '../../assets/gallery_4.png'
import gallery_5 from '../../assets/gallery_5.png'
import white_arrow from '../../assets/white-arrow.png'

const Grid = () => {
    const navigateToLink = (url) => {
        window.location.href = url;
      }
  return (
    <div className='campus'>
      <div className='gallery'>
        <img src={gallery_1} alt=''/>
        <img src={gallery_2} alt=''/>
        <img src={gallery_3} alt=''/>
        <img src={gallery_4} alt=''/>
        <img src={gallery_5} alt=''/>
      </div>
        <button onClick={()=>navigateToLink("https://www.formula1.com/en/latest/article/gallery-hamilton-perez-and-more-light-up-the-las-vegas-grand-prix-launch.JwhfA8RKPf6DO3V9EKHdR")} className='btn dark-btn'>See more...<img src={white_arrow} alt=''/></button>
    </div>
  )
}

export default Grid

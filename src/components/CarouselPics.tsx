import paintSmile from '../static/images/smileface.JPG'
import broSis from '../static/images/brosis.JPG'
import closeEyes from '../static/images/closeeyes.JPG'
import paintFace from '../static/images/paintface.JPG'
import paintTable from '../static/images/painttable.JPG'
import bainBridgeKids from '../static/images/bainbridgekids.JPG'
import broSisCraft from '../static/images/brosiscraft.JPG'
import charlotteCute from '../static/images/charlottecute.JPG'
import charlottePie from '../static/images/charlottepie.JPG'
// import charlotteVideoChat from '../static/images/charlottevideochat.png'
import crafting from '../static/images/crafting.JPG'
import dogCat from '../static/images/dogcat.JPG'
import favKid from '../static/images/favkid.JPG'
import hwComplete from '../static/images/hwcomplete.JPG'
import kayiPie from '../static/images/kayipie.JPG'
import lawrenceCamp from '../static/images/lawrencecamp.JPG'
import sleepRead from '../static/images/sleepread.JPG'
import dogChristmas from '../static/images/doggychristmas.JPG'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; //

export const CarouselPics: React.FC = () => {

    return (
        <div className="carousel-box">
            <Carousel fade>
                <Carousel.Item interval={900}>
                    <img 
                        className='paintFace' 
                        src={paintSmile} 
                        alt="slide 1" 
                        />
                </Carousel.Item>
                <Carousel.Item>
                    <img  src={favKid} alt="slide 2" />
                </Carousel.Item>
                <Carousel.Item>
                    <img  src={charlottePie} alt="slide 3" />
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img style={{width:"70%"}} src={charlotteVideoChat} alt="painting on face" />
                </Carousel.Item> */}
                <Carousel.Item>
                    <img src={hwComplete} alt="painting on face" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={bainBridgeKids} alt="painting on face" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={paintFace} alt="painting on face" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={dogCat} alt="painting on face" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={broSisCraft} alt="painting on face" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={paintTable} alt="painting on face" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={sleepRead} alt="painting on face" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={lawrenceCamp} alt="painting on face" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={charlotteCute} alt="painting on face" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={closeEyes} alt="painting on face" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={crafting} alt="painting on face" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={broSis} alt="painting on face" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={kayiPie} alt="painting on face" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={dogChristmas} alt="painting on face" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
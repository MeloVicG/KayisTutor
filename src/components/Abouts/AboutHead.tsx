import kayiyellows from '../../static/images/kayiandyellows.JPG'
import '../../styles/About.scss'

export const AboutHead: React.FC = () => {
    return (
        <div className='container-about'>
            <div className='about-head'>
                <h5 style={{marginTop:'15px'}}>Hello!</h5>
                <h5>My Name is Kayi!</h5>
                <img src={kayiyellows} alt="painting on face" /> 
            </div>
            <div className='about-body'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cum officia error neque nihil magni provident inventore repellat. Incidunt quaerat delectus dolore officiis unde officia obcaecati fugit tempora voluptate quae!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas corrupti aperiam obcaecati minus doloribus nostrum voluptatum, vitae architecto vel ducimus optio soluta, laborum sed dolore porro accusantium totam beatae expedita.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas corrupti aperiam obcaecati minus doloribus nostrum voluptatum, vitae architecto vel ducimus optio soluta, laborum sed dolore porro accusantium totam beatae expedita.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas corrupti aperiam obcaecati minus doloribus nostrum voluptatum, vitae architecto vel ducimus optio soluta, laborum sed dolore porro accusantium totam beatae expedita.
                </p>
                
                <div className='about-footer'>
                    <div className='boxes'>
                        <h3>Nursing</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt est voluptas necessitatibus illo quam ea deleniti, modi, aut eum labore quaerat, consequuntur possimus ab adipisci in qui tenetur? Iste, accusamus?</p>
                    </div>
                    <div className='boxes'>
                        <h3>Child Care</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt est voluptas necessitatibus illo quam ea deleniti, modi, aut eum labore quaerat, consequuntur possimus ab adipisci in qui tenetur? Iste, accusamus?</p>
                    </div>
                    <div className='boxes'>
                        <h3>Tutor</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt est voluptas necessitatibus illo quam ea deleniti, modi, aut eum labore quaerat, consequuntur possimus ab adipisci in qui tenetur? Iste, accusamus?</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
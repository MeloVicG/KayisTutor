import  lawCali from '../static/images/lawrencecali.JPG'
import  readBook from '../static/images/readbook.JPG'
import  putput from '../static/images/putput.JPG'
import '../styles/Courses.scss' 

export const Courses: React.FC = () => {
    return (
        <div className='about-container'>
            <div className='about-header'>
                <div className='boxes'>
                    <p>
                        <h4>Chinese</h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod consequatur, accusantium cum quibusdam quas saepe hic voluptatum officia perferendis ipsa odio numquam debitis explicabo amet earum nesciunt sunt vitae!
                    </p>
                    <img src={lawCali} alt="coursepic" />
                </div>
                <div className='boxes'>
                    <img src={readBook} alt="coursepic" />
                    <p>
                        <h4>English</h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod consequatur, accusantium cum quibusdam quas saepe hic voluptatum officia perferendis ipsa odio numquam debitis explicabo amet earum nesciunt sunt vitae!
                    </p>
                </div>
                <div className='boxes'>
                    
                    <p>
                        <h4>Babysit</h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quod consequatur, accusantium cum quibusdam quas saepe hic voluptatum officia perferendis ipsa odio numquam debitis explicabo amet earum nesciunt sunt vitae!
                    </p>
                    <img src={putput} alt="coursepic" />
                </div>
            </div>
        </div>
    )
}
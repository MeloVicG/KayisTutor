import { Navbar } from './Navbar';
import '../styles/Header.scss' 


export const Header = () => {
    return (
        <div>
            <h1 className="title"> Kayi's Tutor</h1>    
            <div className="App">
                <Navbar/> 
            </div>
        </div>
    )
}
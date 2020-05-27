import React from 'react';
import Heyo from '../Heyo'
import Carousel from '../Carousel';
import android1 from '../assets/android1.PNG';
import android2 from '../assets/android2.PNG';
import javascript1 from '../assets/javascript1.PNG';
import javascript2 from '../assets/javascript2.PNG';
import javascript3 from '../assets/javascript3.PNG';
import db3 from '../assets/db3.PNG';
import db4 from '../assets/db4.PNG';
import db5 from '../assets/db5.PNG';
import db6 from '../assets/db6.PNG';
import db7 from '../assets/db7.PNG';


class Projects extends React.Component {
    render() {
        return(
            <div>
               
                <Heyo title={this.props.title} subtitle={this.props.subtitle} blurb={this.props.blurb}/>
                <h2>Hieu's Projects</h2> 
                <Carousel />
                
                <img src={android1} alt="Calculator" className="hn-project-image1"></img>
                <img src={android2} alt="Quiz Builder" className="hn-project-image2"></img>
                <img src={javascript1} alt="Poker Hand" className="hn-project-image"></img>
                <img src={javascript2} alt="Friend API" className="hn-project-image"></img>
                <img src={javascript3} alt="Plane API" className="hn-project-image"></img>
                <img src={db3} alt="SAP Chart" className="hn-project-image2"></img>
                <img src={db4} alt="GBI Chart" className="hn-project-image2"></img>
                <img src={db5} alt="Google Analytic Beginners" className="hn-project-image"></img>
                <img src={db6} alt="Advanced Google Analytics" className="hn-project-image"></img>
                <img src={db7} alt="Google Tag Manager" className="hn-project-image"></img>
            
            </div>
        )
    }
}

export default Projects;
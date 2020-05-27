import React from 'react';
import Heyo from '../Heyo';
import Content from '../Content';

class About extends React.Component {
    render() {
        return(
            <div>           
            <Heyo title={this.props.title} />
            
            <Content>
                <h2>About Hieu</h2> 
                <p>My name is Hieu Nguyen. I am currently a student at NSCC IT Campus in Halifax, Nova Scotia.</p>

                <p>This site was created by me to showcase my academic, and personal work. I hope you enjoy learning about my passion for programming, database and computer science overall.</p>

                <p>I have quite a varied amount of skills, as in Data Analytics we tend to get small bits of knowledge on just about everything! Some of these skills include: </p>
                <ul>
                    <li>Programming Languages (Python, R, Java including some android app development, JavaScript including React.js)</li>
                    <li>Tableau, MS SQL, Oracle PL/SQL</li>
                    <li>Java, including some android app development</li>
                    <li>Data Programming (SQL)</li>
                    <li>ETL (Extract – Transform – Load)</li>
                    <li>Analytical thinking and problems solving skills</li>
                    <li>SAP Analytics</li>
                </ul>
                <p>If you're interested in talking further, or just want to pick my brain, please reach out to my <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
                
            </Content>
            </div>
        )
    }
}

export default About;
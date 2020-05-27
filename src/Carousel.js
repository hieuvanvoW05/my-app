import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from './Card';

import linkedin from './assets/arrietty.jpg';
import github from './assets/nausicaa.jpg';
import projects from './assets/whisper-of-the-heart.png';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'LinkedIn',
                    subtitle: 'Connect with me',
                    imgSrc: linkedin,
                    link: 'https://www.linkedin.com/in/hieu-nguyen-168a591a3/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'GitHub',
                    subtitle: 'Some of my code',
                    imgSrc: github,
                    link: 'https://github.com/hieuvanvoW05',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Projects',
                    subtitle: 'Coming Soon',
                    imgSrc: projects,
                    link: 'https://www.google.com',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    } 

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id,e))} key={item.id}/>
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Carousel;
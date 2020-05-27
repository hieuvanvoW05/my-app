import React from 'react';
import Heyo from '../Heyo';
import Content from '../Content';

class Contact extends React.Component {
    render() {
        return(
            <div>
                <Heyo title={this.props.title} />
                <Content>
                    <div>
                        <h1>Feel Free to Contact Me if You Have Any Questions!</h1>
                        <h3>I will get back to you as soon as I am available.</h3>
                        <a class="sendMail" href="mailto:hieuvanvok39@gmail.com">Send an Email!</a>
                    </div>
                </Content>
            </div>
        )
    }
}

export default Contact;
import React from 'react';
import ThemeCarousel from '../themeCarousel';
import MyTitleMessage from '../title-message';

class HomePage extends React.Component {
    render() {
        return(
            <div>
                <ThemeCarousel />
                <MyTitleMessage />
            </div>
        )
    }
}

export default HomePage;
import React from 'react';
import Main from './components/Main';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="headfooter-color" title="Hieu Nguyen" scroll>
            <Navigation>
                <Link to="/HomePage">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Resume">Resume</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
        <Footer />
    </Layout>
    </div>
  );
}

export default App;

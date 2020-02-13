import React, { Component } from 'react';
import "./Home.scss";
import Banner from '../../components/Banner/Banner';

export class Home extends Component {
    render() {
        return (
            <div className="fodde-home">
                <Banner />
            </div>
        );
    }
}

export default Home;

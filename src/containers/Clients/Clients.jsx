import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';

export class Clients extends Component {
    render() {
        return (
            <div>
            <Navbar />
            {this.props.children}
            {/* <Footer /> */}
         </div>
        );
    }
}

export default Clients;

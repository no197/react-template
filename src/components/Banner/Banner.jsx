import React, { Component } from 'react';
import "./Banner.scss";

export class Banner extends Component {
    render() {
        return (
            <div className="fodde-banner">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                            <h1 className="text-white fodde-sologan text-center">
                                Luxury cuisines of the French
                            </h1>
                            <h4 className="fodde-content text-white text-center mx-4 px-4 d-none d-sm-block">
                                The traditional French restaurant in Vietnam. In addition, also has lots of orthers cuisine from various counry in the world.
                            </h4>
                            <h4 className="fodde-content text-white text-center mx-4 px-4 d-block d-sm-none">
                                The traditional French restaurant in Vietnam. 
                            </h4>
                            <p className="text-center mt-4">
                                <button className="btn btn-fodde-dark">
                                    ORDER NOW!
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;

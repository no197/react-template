import React, { Component } from 'react';
import "./Navbar.scss";
import logo from '../../assets/icons/logo.png';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: false
        }
    }
    menu;
    handleScroll(nav, navTop) {
        if (window.scrollY > navTop) {
            nav
                .classList
                .add('on-stretch');
        } else {
            nav
                .classList
                .remove('on-stretch');
        }
    }
    activeStretch() {
        const state = this.state;
        state.flag = !state.flag;
        this.setState(state);

    }
    componentDidMount() {
        const nav = document.querySelector('#nav-scroll');
        const nav2 = document.querySelector('#non-scroll');
        const navTop = nav2.offsetTop;

        window.addEventListener('scroll', () => this.handleScroll(nav, navTop));

    }
    render() {
        return (
            <div>
                <div className="fodde-navbar  bg-fodde">
                    <div className="nav-non-scroll d-none d-sm-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 p-0">
                                    <div className="pt-4 pb-4 mt-3 text-center">
                                        {/* <input type="text" className="p-2" name="search-bar" placeholder="Search..."/>
                                        <label htmlFor="search-bar">
                                            <i className="fa fa-search"/>
                                        </label> */}
                                        <p className="fodde-sologan">Le Restaurant de luxe de la France</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-center">
                                    <Link to="/">
                                        <img className="fodde-logo" src={logo} alt="Logo" />
                                    </Link>
                                </div>

                                <div className="col-lg-4 p-0">
                                    <div className="container mt-3 pt-4 pb-4">
                                        <div className="row">
                                            <div className="col-lg-8 fodde-hotline text-right">
                                                <p className="m-0">ORDER NOW</p>
                                                <h4 className="font-weight-bold">+84 079 39 79</h4>
                                            </div>
                                            <div className="col-lg-4 text-right">
                                                <Link to="/my-cart">
                                                    <button id="my-cart" className="btn btn-fodde">
                                                        <i className="fas fa-scroll fodde-cart"></i>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="non-scroll" className="container-fluid px-4 fodde-nav-link">
                            <div className="row">
                                <div className="col-lg-2 text-uppercase text-center">
                                    <Link to="/home" className="nav-link ">Home</Link>
                                </div>
                                <div className="col-lg-2 text-uppercase text-center">
                                    <Link to="/category" className="nav-link ">Recipes
                                    </Link>
                                </div>
                                <div className="col-lg-2 text-uppercase text-center">
                                    <Link to="" className="nav-link ">Order
                                    </Link>
                                </div>
                                <div className="col-lg-2 text-uppercase text-center">
                                    <Link to="/asf" className="nav-link ">Payment
                                    </Link>
                                </div>
                                <div className="col-lg-2 text-uppercase text-center">
                                    <Link to="contact" className="nav-link ">Contact
                                    </Link>
                                </div>
                                <div className="col-lg-2 text-uppercase text-center">
                                    <Link to="login" className="nav-link ">Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="nav-scroll"
                        className="container-fluid px-4 fodde-navbar-scroll d-none d-sm-block">
                        <div className="row">
                            <div className="col-auto text-center m-1">
                                <Link to="home">
                                    <img className="fodde-logo-scroll" src={logo} alt="abc" />
                                </Link>
                            </div>
                            <div className="col-auto fodde-hover  text-uppercase text-center">
                                <Link to="/home" className="nav-link mt-2 ">Home</Link>
                            </div>
                            <div className="col-auto fodde-hover text-uppercase text-center">
                                <Link to="/category" id="cate-scroll-1" className="nav-link mt-2 ">
                                    Recipes
                                </Link>
                            </div>
                            <div className="col-auto fodde-hover text-uppercase text-center">
                                <Link to="/category" id="cate-scroll-1" className="nav-link mt-2 ">
                                    Order
                                </Link>
                            </div>
                            <div className="col-auto fodde-hover text-uppercase text-center">
                                <Link to="/category" id="cate-scroll-1" className="nav-link mt-2 ">
                                    Services
                                </Link>
                            </div>
                            <div className="col-auto fodde-hover text-uppercase text-center">
                                <Link to="/category" id="cate-scroll-1" className="nav-link mt-2 ">
                                    Contact
                                </Link>
                            </div>
                            <div className="col-auto fodde-hover text-uppercase text-center">
                                <Link to="/category" id="cate-scroll-1" className="nav-link mt-2 ">
                                    Login
                                </Link>
                            </div>
                            <div className="col-3 text-right">
                                <Link to="/my-cart">
                                    <button id="my-cart" className="btn btn-fodde">
                                        <i className="fas fa-scroll fodde-cart"></i>
                                    </button>
                                </Link>
                                <div id="cart-detail-2" className="fodde-cart-detail"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fodde-navbar-mobile d-block d-sm-none position-fixed w-100 bg-fodde">
                    <div className="container w-100">
                        <div className="row w-100 m-0">
                            <div className={`col-8 fodde-logo-section py-2 ${this.state.flag ? 'fodde-stretch-icon-active' : ''}`}>
                                <Link to="/">
                                    <img className="fodde-logo-mobile" src={logo} alt="Logo" />
                                </Link>
                            </div>
                            <div className={`col-4 text-right px-0 py-2 ${this.state.flag ? 'fodde-stretch-icon-active' : ''}`}>
                                <button onClick={() => this.activeStretch()} className="btn btn-bars border-0">
                                    <i className="fal fa-bars"></i>
                                </button>
                            </div>
                            <div id="on-stretch" className={`col-12 fodde-stretch-nav position-fixed bg-fodde  ${this.state.flag ? 'fodde-stretch-active' : ''}`}>
                                <div className="col-lg-2 p-2 text-uppercase text-right">
                                    <Link to="/home" className="nav-link ">Home</Link>
                                </div>
                                <div className="col-lg-2 p-2 text-uppercase text-right">
                                    <Link to="/category" className="nav-link ">Recipes
                                    </Link>
                                </div>
                                <div className="col-lg-2 p-2 text-uppercase text-right">
                                    <Link to="" className="nav-link ">Order
                                    </Link>
                                </div>
                                <div className="col-lg-2 p-2 text-uppercase text-right">
                                    <Link to="/asf" className="nav-link ">Payment
                                    </Link>
                                </div>
                                <div className="col-lg-2 p-2 text-uppercase text-right">
                                    <Link to="contact" className="nav-link ">Contact
                                    </Link>
                                </div>
                                <div className="col-lg-2 text-uppercase text-right">
                                    <Link to="login" className="nav-link ">Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;

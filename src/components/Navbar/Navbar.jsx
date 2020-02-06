import React, { Component } from 'react';
import "./Navbar.scss";
import logo from '../../assets/icons/logo.png';
import { Link } from 'react-router-dom';


export class Navbar extends Component {
    handleScroll(nav, navTop) {
        if (window.scrollY > navTop) {
            nav.classList.add('test');
        } else {
            nav.classList.remove('test');
        }
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
            <div className="harvee-navbar">
              <div className="nav-non-scroll d-none d-sm-block">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <Link to="/">
                        <img className="harvee-logo" src={logo} alt="Logo" />
                      </Link>
                    </div>
                    <div className="col-lg-4">
                      <div className="harvee-search-bar pt-4 pb-4 mt-3 text-center">
                        <input type="text" className="p-2" name="search-bar" placeholder="Search..." />
                        <label htmlFor="search-bar">
                          <i className="fa fa-search" />
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="container  pt-4 pb-4">
                        <div className="row">
                          <div className="col-lg-8 harvee-hotline text-right">
                            <p className="m-0">ORDER NOW</p>
                            <h4 className="font-weight-bold">+84 079 39 79</h4>
                          </div>
                          <div className="col-lg-4 text-right">
                            <Link to="/my-cart">
                              <button id="my-cart" className="btn btn-harvee">
                                <i className="far fa-shopping-cart harvee-cart"></i>
                              </button>
                            </Link>
    
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="non-scroll" className="container-fluid px-4 harvee-nav-link">
                  <div className="row">
                    <div className="col-lg-2 text-uppercase text-center">
                      <Link to="/home" className="nav-link ">Home</Link>
                    </div>
                    <div className="col-lg-2 text-uppercase text-center">
                      <Link to="/category" className="nav-link ">Category
                      </Link>
                    </div>
                    <div className="col-lg-2 text-uppercase text-center">
                      <Link to="/asf" className="nav-link ">Payment
                    </Link>
                    </div>
                    <div className="col-lg-2 text-uppercase text-center">
                      <Link to="" className="nav-link ">Shipment
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
              <style dangerouslySetInnerHTML={{ __html: "\n\n    " }} />
              {/* Scroll nav */}
              <div id="nav-scroll" className="container-fluid px-4 harvee-nav-link harvee-navbar-scroll d-none d-sm-block">
                <div className="row">
                  <div className="col-auto text-center m-1">
                    <Link to="home">
                      <img className="harvee-logo-scroll" src={logo} alt="abc" />
                    </Link>
                  </div>
                  <div className="col-auto  text-uppercase text-center">
                    <Link to="/home" className="nav-link mt-2 ">Home</Link>
                  </div>
                  <div className="col-auto  text-uppercase text-center">
                    <Link to="/category" id="cate-scroll-1" className="nav-link mt-2 ">Category
    
                    </Link>
                  </div>
                  <div className="col-auto  text-uppercase text-center">
                    <Link to="adsasd" className="nav-link mt-2 ">Payment
                  </Link>
                  </div>
                  <div className="col-auto  text-uppercase text-center">
                    <Link to="sadfsdf" className="nav-link mt-2 ">Shipment
                  </Link>
                  </div>
                  <div className="col-auto  text-uppercase text-center">
                    <Link to="contact" className="nav-link mt-2 ">Contact
                  </Link>
                  </div>
                  <div className="col-auto  text-uppercase text-center">
                    <Link to="login" className="nav-link mt-2 ">Login
                  </Link>
                  </div>
                  <div className="col-3 text-right">
                    <Link to="/my-cart">
                      <button id="my-cart" className="btn btn-harvee">
                        <i className="far fa-shopping-cart harvee-cart"></i>
                      </button>
                    </Link>
                    <div id="cart-detail-2" className="harvee-cart-detail">
                    </div>
                  </div>
                </div>
              </div>
              <nav className="navbar navbar-expand-sm harvee-nav-mobile d-block d-sm-none w-100">
                <Link className="navbar-brand" to="/home">
                  <img className="harvee-logo-scroll" alt="abc" />
                </Link>
                <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon my-1" />
                  <span className="navbar-toggler-icon my-1" />
                  <span className="navbar-toggler-icon my-1" />
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample03">
                  <ul className="navbar-nav mr-auto harvee-nav-link p-2">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="http://example.com" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category
                    </Link>
                      <div className="dropdown-menu" aria-labelledby="dropdown03">
                        <Link className="dropdown-item" to="#">Action</Link>
                        <Link className="dropdown-item" to="#">Another action</Link>
                        <Link className="dropdown-item" to="#">Something else here</Link>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="http://example.com" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Product
                    </Link>
                      <div className="dropdown-menu" aria-labelledby="dropdown04">
                        <Link className="dropdown-item" to="#">Action</Link>
                        <Link className="dropdown-item" to="#">Another action</Link>
                        <Link className="dropdown-item" to="#">Something else here</Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">Payment</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">Shipment</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-md-0">
                    <input className="form-control" type="text" placeholder="Search" />
                  </form>
                </div>
              </nav>
            </div>
          </div>
        );
    }
}

export default Navbar;

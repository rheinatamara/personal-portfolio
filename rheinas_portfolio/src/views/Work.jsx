import React from 'react'
import mediku from '../img/medikuApp.png'
import apel from '../img/apel.png'
import newsportal from '../img/newsPortal.png'
import { Link } from "react-router-dom";
import '../js/typewriter'
import Footer from '../components/Footer';
function Work() {
    return (
        <div>
            <header id="header-inner">
                <div class="container">
                <nav id="main-nav">
                    <h2 id="logo" class="logo">RT</h2>
                    <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/work" className="current">Work</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    </ul>
            </nav>
                </div>
            </header>
            <section id="work-a" class="text-center py-3">
                <div class="container">
                    <h2 class="section-title">My Work</h2>
                    <div class="bottom-line"></div>
                    <p class="lead">
                    Check out some of my projects
                    </p>
                    <div class="items">
                        <div class="item">
                            <div class="item-image">
                                <img src={mediku} style={{width: '31rem', marginRight: '2rem'}} alt="" />
                            </div>
                            <div class="item-text">
                                <div class="item-text-wrap">
                                    <p class="item-text-category">Web application</p>
                                    <h2 class="item-text-title">Mediku App</h2>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item-image">
                                <img src={newsportal}  style={{width: '31rem', right: '20rem'}} alt="" />
                            </div>
                            <div class="item-text">
                                <div class="item-text-wrap">
                                    <p class="item-text-category">Web application</p>
                                    <h2 class="item-text-title">News Portal</h2>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item-image">
                                <img src={apel} style={{width: '25rem', right: '20rem'}}  alt="" />
                            </div>
                        <div class="item-text">
                            <div class="item-text-wrap">
                                <p class="item-text-category">Website</p>
                                <h2 class="item-text-title">Apple Website clone</h2>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </section>
        <Footer/>
        </div>
    )
}

export default Work

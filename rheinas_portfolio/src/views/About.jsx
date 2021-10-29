import React from 'react'
import '../main.css'
import me from '../img/me.jpeg'
import testimonial1 from "../img/testimonials/person1.jpg"
import testimonial2 from "../img/testimonials/person2.jpg"
import testimonial3 from "../img/testimonials/person3.jpg"
import testimonial4 from "../img/testimonials/person4.jpg"
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import '../js/typewriter'
function About() {
    return (
        <div>
            <header id="header-inner">
                <div class="container">
                <nav id="main-nav">
                    <h2 id="logo" class="logo">RT</h2>
                    <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about" className="current">About</Link></li>
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                </div>
            </header>
            <section id="about-a" class="text-center py-3">
                <div class="container">
                <h2 class="section-title">About Me</h2>
                <div class="bottom-line"></div>
                <p class="lead">
                    Let me tell you a little about myself and what I do...
                </p>
                <div class="about-info">
                    <img src={me} alt="" class="bio-image" />
                    <div class="bio bg-light">
                    <h4>Your Project Is In Safe Hands</h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Aspernatur temporibus atque tempora porro harum, repellendus modi
                        nihil sequi! Aspernatur doloremque esse odit. Quod modi nam
                        numquam optio dolore quaerat illo! Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Assumenda dolor nemo dolorem, non
                        quidem et amet corrupti excepturi velit exercitationem! Lorem
                        ipsum dolor, sit amet consectetur adipisicing elit. Rerum debitis
                        maxime quia deleniti cupiditate, repudiandae reprehenderit facilis
                        eligendi. Ipsam, eveniet?
                    </p>
                    </div>
                    <div class="award award-1">
                    <i class="fas fa-award fa-3x"></i>
                    <h3>Award One</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                        repudiandae.
                    </p>
                    </div>
                    <div class="award award-2">
                    <i class="fas fa-award fa-3x"></i>
                    <h3>Award Two</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                        repudiandae.
                    </p>
                    </div>
                    <div class="award award-3">
                    <i class="fas fa-award fa-3x"></i>
                    <h3>Award Three</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                        repudiandae.
                    </p>
                    </div>
                </div>
                </div>
            </section>
        <section id="about-b" class="bg-dark py-3">
            <div class="container">
            <h2 class="section-title">Technical Skills</h2>
            <div class="bottom-line"></div>
            <h4>Javascript :</h4>
            <div class="progress">
                <div style={{width: '95%'}}></div>
            </div>
            <h4>React.js :</h4>
            <div class="progress">
                <div style={{width: "95%"}}></div>
            </div>
            <h4>React native :</h4>
            <div class="progress">
                <div style={{width: "70%"}}></div>
            </div>
            <h4>Vue.js :</h4>
            <div class="progress">
                <div style={{width: "90%"}}></div>
            </div>
            <h4>HTML & SCSS :</h4>
            <div class="progress">
                <div style={{width: "100%"}}></div>
            </div>
            <h4>Express.js :</h4>
            <div class="progress">
                <div style={{width: "95%"}}></div>
            </div>
            <h4>Node.js :</h4>
            <div class="progress">
                <div style={{width: "95%"}}></div>
            </div>
            <h4>PostgreSQL :</h4>
            <div class="progress">
                <div style={{width: "95%"}}></div>
            </div>
            <h4>jQuery :</h4>
            <div class="progress">
                <div style={{width: "80%"}}></div>
            </div>
            </div>
        </section>


        <section id="about-d" class="py-4">
            <div class="container">
            <h2 class="section-title">Testimonials</h2>
            <div class="bottom-line"></div>
            <p class="lead text-center">Take a look at what my clients say...</p>
            <div class="testimonials">
                <div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                    omnis excepturi. Eum tenetur ullam praesentium quisquam expedita
                    odit architecto minima laudantium sequi fugit? Ut aperiam
                    perspiciatis at nesciunt totam. Nisi!
                </p>
                <ul>
                    <li>
                    <img src={testimonial1} alt="" />
                    </li>
                    <li>Sam Smith, New York</li>
                </ul>
                </div>
                <div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                    omnis excepturi. Eum tenetur ullam praesentium quisquam expedita
                    odit architecto minima laudantium sequi fugit? Ut aperiam
                    perspiciatis at nesciunt totam. Nisi!
                </p>
                <ul>
                    <li>
                    <img src={testimonial2} alt="" />
                    </li>
                    <li>Sarah Williams, Michigan</li>
                </ul>
                </div>
                <div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                    omnis excepturi. Eum tenetur ullam praesentium quisquam expedita
                    odit architecto minima laudantium sequi fugit? Ut aperiam
                    perspiciatis at nesciunt totam. Nisi!
                </p>
                <ul>
                    <li>
                    <img src={testimonial3} alt="" />
                    </li>
                    <li>Jill Johnson, London</li>
                </ul>
                </div>
                <div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                    omnis excepturi. Eum tenetur ullam praesentium quisquam expedita
                    odit architecto minima laudantium sequi fugit? Ut aperiam
                    perspiciatis at nesciunt totam. Nisi!
                </p>
                <ul>
                    <li>
                    <img src={testimonial4} alt="" />
                    </li>
                    <li>Sarah Thompson, Boston</li>
                </ul>
                </div>
            </div>
            </div>
        </section>

        <Footer/>
        </div>
    )
}

export default About

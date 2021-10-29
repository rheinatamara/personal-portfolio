import React from 'react'
import '../js/typewriter'
import { Link } from "react-router-dom";
import Footer from '../components/Footer';

function Contact() {
    return (
        <div>
            <header id="header-inner">
                <div class="container">
                <nav id="main-nav">
                    <h2 id="logo" class="logo">RT</h2>
                    <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="/contact" className="current">Contact</Link></li>
                    </ul>
                </nav>
                </div>
            </header>
            <section id="contact-a" class="text-center py-3">
                <div class="container">
                    <h2 class="section-title">Contact Me</h2>
                    <div class="bottom-line"></div>
                    <p class="lead">Here is how you can reach me</p>
                <form method="POST" data-netlify="true" data-netlify-recaptcha="true">
                    <div class="text-fields">
                        <input type="text" class="text-input name-input" placeholder="Name" name="name"></input>
                        <input type="text" class="text-input subject-input" placeholder="Subject" name ="subject"></input>
                        <input type="email" class="text-input email-input" placeholder="Email Address" name ="email"></input>
                        <input type="text" class="text-input phone-input" placeholder="Phone" name="phone"></input>
                        <textarea class="text-input message-input" placeholder="Enter Message" name="message"></textarea>
                        </div>
                    <div class="my-3"></div>
                    <div data-netlify-recaptcha="true"></div>
                    <button type="submit" class="btn-dark">Submit</button>
                </form>
                </div>
            </section>
            <section id="contact-b" class="py-3 bg-dark">
                <div class="container">
                <div class="contact-info">
                    <div>
                    <i class="fas fa-envelope fa-2x">
                        <h3>Email</h3>
                        <p>rheina.tamara@outlook.com</p>
                    </i>
                    </div>
                    <div>
                    <i class="fas fa-phone fa-2x">
                        <h3>Phone</h3>
                        <p>(+62) 8121 8168 331</p>
                    </i>
                    </div>
                    <div>
                    <i class="fas fa-address-card fa-2x">
                        <h3>Address</h3>
                        <p>Bekasi, West Java, Indonesia</p>
                    </i>
                    </div>
                </div>
                </div>
            </section>
            <section id="contact-c" class="bg-main py-4">
            <div class="container">
            <h1>Let's Start Your Next Project</h1>
            </div>
  </section>
  <Footer/>
        </div>
    )
}

export default Contact

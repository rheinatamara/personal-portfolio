import React from 'react'
import '../main.css'
import '../js/typewriter'
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
function Home() {
    return (
        <div>
            {/* Header */}
            <header id="header-home">
                <div class="container">
                <nav id="main-nav">
                    <h2 id="logo" class="logo">RT</h2>
                    <ul>
                    <li><Link to="/" className="current">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/work">Work</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <div class="header-content">
                    <h1>
                    I Am Rheina The 
                    <span class="txt-type" data-wait="3000" data-words='[" Artist", " Designer", " Full Stack Dev"]'></span>
                    </h1>
                    <p class="lead">I specialize in UI/UX, Full-Stack Development and Graphic Design</p>
                    <Link to="" id="button" class="btn-light">View My Work</Link>
                </div>
                </div>
            </header>
            {/* Section A */}
            <section id="home-a" class="text-center py-2">
                <div class="container">
                <h2 class="section-title">I Specialize In</h2>
                <div class="bottom-line"></div>
                <p class="lead">
                    Art as well as creating digital masterpieces and UI/UX layouts for
                    website and mobile applications
                </p>
                <div class="specials">
                    <div>
                    <i class="fas fa-file-alt fa-2x"></i>
                    <h3>Concepting</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Explicabo accusamus voluptates natus aut voluptatum nisi suscipit
                        quam aperiam sequi fugit!
                    </p>
                    </div>
                    <div>
                    <i class="fas fa-desktop fa-2x"></i>
                    <h3>UI/UX</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Explicabo accusamus voluptates natus aut voluptatum nisi suscipit
                        quam aperiam sequi fugit!
                    </p>
                    </div>
                    <div>
                    <i class="fas fa-object-ungroup fa-2x"></i>
                    <h3>Visual Design</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Explicabo accusamus voluptates natus aut voluptatum nisi suscipit
                        quam aperiam sequi fugit!
                    </p>
                    </div>
                    <div>
                    <i class="fas fa-thumbs-up fa-2x"></i>
                    <h3>Interaction</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Explicabo accusamus voluptates natus aut voluptatum nisi suscipit
                        quam aperiam sequi fugit!
                    </p>
                    </div>
                </div>
                </div>
            </section>
            {/* Section B */}
            <section id="home-b" class="text-center py-2">
            <div class="stats">
            <div>
                <ul>
                <li><i class="fas fa-users fa-3x"></i></li>
                <li class="stats-title">Clients</li>
                <li class="stats-number">99</li>
                </ul>
            </div>
            <div>
                <ul>
                <li><i class="fas fa-award fa-3x"></i></li>
                <li class="stats-title">Certificates</li>
                <li class="stats-number">99</li>
                </ul>
            </div>
            <div>
                <ul>
                <li><i class="fas fa-hourglass-start fa-3x"></i></li>
                <li class="stats-title">Hours Worked</li>
                <li class="stats-number">99</li>
                </ul>
            </div>
            <div>
                <ul>
                <li><i class="fas fa-code-branch fa-3x"></i></li>
                <li class="stats-title">Projects Completed</li>
                <li class="stats-number">99</li>
                </ul>
            </div>
            </div>
        </section>
        <section id="home-c" class="text-center py-2">
    <div class="container">
      <h2 class="section-title">
        My Creative Process
      </h2>
      <div class="bottom-line"></div>
      <p class="lead">
        All of my projects are based off of a practiced
        formula to get the result that I am looking for
      </p>
      <div class="process">
        <div>
          <i class="fas fa-file-alt fa-4x process-icon my-2">
            <div class="process-step">1</div>
          </i>

          <h3>Discuss The Project</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit necessitatibus dolores doloribus nulla, porro esse.
          </p>
        </div>
        <div>
          <i class="fas fa-desktop fa-4x process-icon my-2">
            <div class="process-step">2</div>
          </i>
          <h3>Brainstorming & Concept</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit necessitatibus dolores doloribus nulla, porro esse.
          </p>
        </div>
        <div>
          <i class="fas fa-object-ungroup fa-4x process-icon my-2">
            <div class="process-step">3</div>
          </i>
          <div class="clr"></div>
          <h3>UI/UX Planning</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit necessitatibus dolores doloribus nulla, porro esse.
          </p>
        </div>
        <div>
          <i class="fas fa-thumbs-up fa-4x process-icon my-2">
            <div class="process-step">4</div>
          </i>
          <h3>Interactions & Building project</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit necessitatibus dolores doloribus nulla, porro esse.
          </p>
        </div>
      </div>
    </div>
  </section>

            <Footer/>
        </div>
    )
}

export default Home

import React from 'react'
import Transition from '../components/Transition'
import ScrollAnimation from 'react-animate-on-scroll';
import Particles from 'react-particles-js'
import { TiArrowDownThick } from "react-icons/ti";
import { Link } from 'react-scroll'

const particleOpt = {
    "particles": {
      "number": {
        "value": 160,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#e5e7e6"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

export default function Home() {
    return (
        <>
            <div className='wrapper'>
                <Particles params={particleOpt} />
                </div>
                <div className={'home'}>
                <ScrollAnimation animateIn='fadeIn' duration={2}>
                    <h1>Joshua Keslar</h1>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeIn' duration={3}>
                    <h4>Software Developer</h4>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeIn' duration={4}>
                    <Link 
                activeClass='active'
                to="skills"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-125}
             ><h5 className={'arrow-down'} ><TiArrowDownThick /></h5></Link>
                    </ScrollAnimation>
                </div>

                {/* <div className='particle-middle'>
                <Particles params={particleOpt} />
                </div> */}


                <div className='particle-bottom'>
                  <Particles params={particleOpt} />
                  <div className='clear'>
                  <Transition image={'../static/clearToLight.png'} home />
                  </div>
                </div>               
            <style jsx>{`
        .particle-bottom {
          background-color: #000c1f;
        }
        .home {
            background-color: #000c1f;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 1;
            margin-top: -50%;
        }
        .wrapper {
            width: 100%;
            // background-color: #141301;

            // -webkit-user-select: none; /* Webkit */
            // -moz-user-select: none;    /* Firefox */
            // -ms-user-select: none;     /* IE 10  */
            // -o-user-select: none;
            // user-select: none;   
        }
        h1 {
            // color: #e5e7e6;
            color: white;
            font-size: 6rem;
            // margin-top: 2%;
            margin-top: 6%;
            font-family: 'Raleway', sans-serif;

            -webkit-user-select: none; /* Webkit */
            -moz-user-select: none;    /* Firefox */
            -ms-user-select: none;     /* IE 10  */
            -o-user-select: none;
            user-select: none;   
        }
        h4 {
            color: #b7b5b3;
            font-size: 2.5rem;
            margin-top: 35px;
            font-family: 'Raleway', sans-serif;

            -webkit-user-select: none; /* Webkit */
                    -moz-user-select: none;    /* Firefox */
                    -ms-user-select: none;     /* IE 10  */
                    -o-user-select: none;
                    user-select: none;   
        }
        img {
            border-radius: 21px;
            // filter: grayscale(100%)
        }
        .arrow-down {
            color: #e5e7e6;
            // color: #4ad5ff;
            // color: silver;
            display: flex;
            justify-content: center;
            // color: white;
            margin-top: 200px;
            font-size: 4rem;
        }
        .arrow-down:hover {
          cursor: pointer;
        }
        .clear {
          z-index: 50;
          margin-top: -50%;
        }
        .particle-middle {
          z-index: -5;
          margin-top: -500px;
          background-color: #000c1f;
        }
        // @media (max-width: 730px) {
        //   h1 {
        //     font-size: 5rem;
        //   }
        // }
        // @media (max-width: 550px) {
        //   h1 {
        //     font-size: 3.5rem;
        //   }
        //   h4 {
        //     font-size: 2rem;
        //   }
        // }
      `}</style>
        </>
    )
}

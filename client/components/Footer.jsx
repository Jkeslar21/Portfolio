import React from "react";
import Particles from "react-particles-js";
import { animateScroll as scroll } from "react-scroll";
import { TiArrowUpThick } from "react-icons/ti";

const particleOpt = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#000c1f"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

export default function Footer() {
  const particles = {
    width: "100%",
    marginTop: "-13%",
    backgroundColor: "#e5e7e6",
    zIndex: -3
  };
  const arrowUpIconDark = {
    display: "flex",
    justifyContent: "center",
    color: "#e5e7e6",
    marginTop: "-8%",
    fontSize: "4rem",
    border: "1px solid red",
    zIndex: "9999 !important"
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {/* <h5 onClick={scrollToTop} className={'arrow-up-icon-dark'}><TiArrowUpThick /></h5> */}
      <div className={"particles"}>
        <Particles params={particleOpt} />
      </div>
      <style jsx>{`
        .particles {
          width: 100%;
          margin-top: -13%;
          background-color: #e5e7e6;
          z-index: -99;
        }
        .arrow-up-icon-dark {
          display: flex;
          justify-content: center;
          color: #e5e7e6;
          margin-top: -8%;
          font-size: 4rem;
          border: 1px solid red;
          z-index: 9999 !important;
        }
        // .contact-arrow {
        //     color: red;
        //     // z-index: 99;
        //     border: 1px solid green;
        // }
      `}</style>
    </>
  );
}

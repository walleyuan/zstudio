import './App.css';
import './assets/css/style.css';
import Nav from './components/navigation';
import Header from './components/header';
import Section from './components/section';
import ImgOurstory from './assets/images/our-story.png'
import Service from './components/service';
import imgMascot from './assets/images/work-mascot-partners.png';
import Carousel from './components/carousel';
import React, { Component } from 'react';
import $ from 'jquery';
import sr from './components/scrollreveal';

class App extends Component {

  componentDidMount() {
    // Collapse Navbar
    var navbarCollapse = function () {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };

    //Collapse now if page is not at top
    navbarCollapse();
    //Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Scroll reveal calls
    sr.reveal('.sr-icons', {
      duration: 600,
      scale: 0.3,
      distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
      duration: 1000,
      delay: 200
    });
    sr.reveal('.sr-contact', {
      duration: 600,
      scale: 0.3,
      distance: '0px'
    }, 300);


    // window.addEventListener('load', function () {
    //   // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //   var forms = document.getElementsByClassName('needs-validation');
    //   // Loop over them and prevent submission
    //   var validation = Array.prototype.filter.call(forms, function (form) {
    //     form.addEventListener('submit', function (event) {
    //       if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //       }
    //       form.classList.add('was-validated');
    //     }, false);
    //   });
    // }, false);

    //Stars
    // particlesJS("stars", {
    //   particles: {
    //     number: {
    //       value: 355,
    //       density: {
    //         enable: true,
    //         value_area: 789.1476416322727
    //       }
    //     },
    //     color: {
    //       value: "#ffffff"
    //     },
    //     shape: {
    //       type: "circle",
    //       stroke: {
    //         width: 0,
    //         color: "#000000"
    //       },
    //       polygon: {
    //         nb_sides: 5
    //       },
    //       image: {
    //         src: "img/github.svg",
    //         width: 100,
    //         height: 100
    //       }
    //     },
    //     opacity: {
    //       value: 0.58927153781200905,
    //       random: false,
    //       anim: {
    //         enable: true,
    //         speed: 0.2,
    //         opacity_min: 0,
    //         sync: false
    //       }
    //     },
    //     size: {
    //       value: 2,
    //       random: true,
    //       anim: {
    //         enable: true,
    //         speed: 2,
    //         size_min: 0,
    //         sync: false
    //       }
    //     },
    //     line_linked: {
    //       enable: false,
    //       distance: 150,
    //       color: "#ffffff",
    //       opacity: 0.4,
    //       width: 1
    //     },
    //     move: {
    //       enable: true,
    //       speed: 0.3,
    //       direction: "none",
    //       random: true,
    //       straight: false,
    //       out_mode: "out",
    //       bounce: false,
    //       attract: {
    //         enable: false,
    //         rotateX: 600,
    //         rotateY: 1200
    //       }
    //     }
    //   },
    //   interactivity: {
    //     detect_on: "canvas",
    //     events: {
    //       onhover: {
    //         enable: true,
    //         mode: "bubble"
    //       },
    //       onclick: {
    //         enable: true,
    //         mode: "push"
    //       },
    //       resize: true
    //     },
    //     modes: {
    //       grab: {
    //         distance: 400,
    //         line_linked: {
    //           opacity: 1
    //         }
    //       },
    //       bubble: {
    //         distance: 83.91608391608392,
    //         size: 1,
    //         duration: 3,
    //         opacity: 1,
    //         speed: 3
    //       },
    //       repulse: {
    //         distance: 200,
    //         duration: 0.4
    //       },
    //       push: {
    //         particles_nb: 4
    //       },
    //       remove: {
    //         particles_nb: 2
    //       }
    //     }
    //   },
    //   retina_detect: true
    // });
  }


  render() {
    return (
      <>
        <Nav cssClass="navbar navbar-expand-lg navbar-light fixed-top"></Nav>
        <Header title="We created beautiful design &amp; great user experience, for your best projects." ></Header>
        <Section title="// OUR STORY"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non orci at risus euismod porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          description=" Nam ac gravida metus. Ut ac dui nec mi pulvinar finibus. Vestibulum egestas metus nec dui porttitor auctor. Fusce et dolor porttitor justo egestas congue sed dictum tellus. Vivamus hendrerit placerat eros a bibendum. Maecenas maximus ornare arcu, ac placerat nisi malesuada."
          sectionId="about"
          sectionCssClass=""
          sectionColumn2Css="text-center"
          src={ImgOurstory}
          alt="Image of Z Studio logo"
          cssClass="sr-contact"
          imageLeft='false' />
        <Service title="// SERVICES" sectionId="services" sectionCssClass="bg-light" />
        <Carousel name="// WORKS"
          src={imgMascot}
          alt="Screenshot of Mascot Partners Websites"
          title="Mascot Partners Realty"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non orci at risus euismod porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          description="Nam ac gravida metus. Ut ac dui nec mi pulvinar finibus. Vestibulum egestas metus nec dui porttitor auctor. Fusce et dolor porttitor justo egestas congue sed dictum tellus. Vivamus hendrerit placerat eros a bibendum. Maecenas maximus ornare arcu, ac placerat nisi malesuada. "
          hrefLink="https://www.mascotpartners.com.au/" >
        </Carousel>
      </>
    )
  }
}

export default App;
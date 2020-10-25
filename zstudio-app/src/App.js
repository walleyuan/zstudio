import './App.css';
import './assets/css/style.css';
import Nav from './components/navigation';
import Header from './components/header';
import Section from './components/section';
import ImgOurstory from './assets/images/our-story.png'
import Service from './components/service';
import imgMascot from './assets/images/work-mascot-partners.png';
import Carousel from './components/carousel';
import Contact from  './components/contactus';
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
        <Contact />
      </>
    )
  }
}

export default App;
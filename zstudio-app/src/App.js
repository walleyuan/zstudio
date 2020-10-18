import React from 'react';
import './App.css';
import './assets/css/style.css';
import Nav from './components/navigation';
import Header from './components/header';
import Section from  './components/section';
import ImgOurstory from './assets/images/our-story.png'
import Service from  './components/service';

function App() {
  return (
    <>
    <Nav cssClass = "navbar-expand-lg navbar-light fixed-top"></Nav>
    <Header title="We created beautiful design &amp; great user experience, for your best projects." ></Header>
    <Section title="// OUR STORY" 
             subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non orci at risus euismod porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
             description =" Nam ac gravida metus. Ut ac dui nec mi pulvinar finibus. Vestibulum egestas metus nec dui porttitor auctor. Fusce et dolor porttitor justo egestas congue sed dictum tellus. Vivamus hendrerit placerat eros a bibendum. Maecenas maximus ornare arcu, ac placerat nisi malesuada."
             sectionId ="about"
             sectionCssClass =""
             src ={ImgOurstory}
             alt ="Image of Z Studio logo"
             cssClass ="sr-contact" />
    <Service title ="// Services" sectionId= "services" sectionCssClass="bg-light"/>

    <Section title="// Work" 
             subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non orci at risus euismod porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
             description =" Nam ac gravida metus. Ut ac dui nec mi pulvinar finibus. Vestibulum egestas metus nec dui porttitor auctor. Fusce et dolor porttitor justo egestas congue sed dictum tellus. Vivamus hendrerit placerat eros a bibendum. Maecenas maximus ornare arcu, ac placerat nisi malesuada."
             sectionId ="services"
             sectionCssClass =""
             src ={ImgOurstory}
             alt ="Image of Z Studio logo"
             cssClass ="sr-contact" />
    </>
  );
}

export default App;

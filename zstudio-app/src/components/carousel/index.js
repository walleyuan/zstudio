import React from "react";
import PropTypes from "prop-types";
import Link from "../button";
import Image  from 'react-bootstrap/Image';

export default class Carousel extends React.Component {

    static propTypes = {
        name: PropTypes.string,
        src:PropTypes.string,
        alt:PropTypes.string,
        title: PropTypes.string,
        subTitle: PropTypes.string,
        description: PropTypes.string,
        hrefLink: PropTypes.string
      };

    render() {
        return (

            <section id="work">
                <div className="container">
                    <h2>{this.props.name}</h2>
                    <div id="carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-lg-6 mx-auto">
                                        <Image src={this.props.src} 
                                                alt={this.props.alt} 
                                                className="sr-contact" />
                                    </div>
                                    <div className="col-lg-6 mx-auto">
                                        <h3>{this.props.title}</h3>
                                        <h4>{this.props.subTitle}</h4>
                                        <p>{this.props.description}</p>
                                        <p>
                                            <Link name="View Site" 
                                                  className="btn btn-light btn-outline btn-outline-dark btn-xl js-scroll-trigger"  
                                                  target="_blank" hrefLink= {this.props.hrefLink} />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
        );
    }
}
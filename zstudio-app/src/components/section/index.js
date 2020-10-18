import React from "react";
import PropTypes from "prop-types";
import Image  from 'react-bootstrap/Image';


export default class Section extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        subTitle: PropTypes.string,
        description: PropTypes.string,
        sectionId : PropTypes.string,
        sectionCssClass : PropTypes.string,
        src: PropTypes.string,
        alt: PropTypes.string,
        cssClass : PropTypes.string
    };

    render() {
        return (
            <section id={this.props.sectionId} className={this.props.sectionCssClass}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <h2>{this.props.title}</h2>
                            <h4>{this.props.subTitle}</h4>
                            <p>{this.props.description}</p>
                        </div>
                        <div className="col-lg-6 mx-auto text-center">
                                <Image src={this.props.src} 
                                    alt={this.props.alt} 
                                    className={this.props.cssClass} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
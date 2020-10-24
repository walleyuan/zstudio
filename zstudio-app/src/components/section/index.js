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
        sectionColumn1Css: PropTypes.string,
        sectionColumn2Css: PropTypes.string,
        src: PropTypes.string,
        alt: PropTypes.string,
        cssClass : PropTypes.string
    };

    render() {

        const col1Css = "col-lg-6 mx-auto";
        const col2Css = "col-lg-6 mx-auto text-center";

        return (
            <section id={this.props.sectionId} className={this.props.sectionCssClass}>
                <div className="container">
                    <div className="row">
                        <div className={col1Css}>
                            <h2>{this.props.title}</h2>
                            <h4>{this.props.subTitle}</h4>
                            <p>{this.props.description}</p>
                        </div>
                        <div className= {col2Css}>
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

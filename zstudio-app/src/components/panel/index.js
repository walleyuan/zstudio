import React from "react";
import PropTypes from "prop-types";
import Image from 'react-bootstrap/Image';

export default class Panel extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        src: PropTypes.string,
        alt: PropTypes.string,
        cssClass: PropTypes.string
    };

    render() {
        return (
            <div className="col-lg-3 mx-auto mb-2">
                <h4>
                    <Image src={this.props.src}
                        alt={this.props.alt}
                        className={this.props.cssClass} />
                    {this.props.title}
                </h4>
                <p>{this.props.description}</p>
            </div>
        );
    }
}
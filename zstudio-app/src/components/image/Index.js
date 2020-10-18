import React from "./node_modules/react";
import PropTypes from "prop-types";
import Image  from 'react-bootstrap/Image';

export default class ImageEx extends React.Component{

    static propTypes = {
        src: PropTypes.string,
        alt: PropTypes.string,
        cssClass : PropTypes.string
    };

    render() {
        return (
            <Image src={this.props.src} 
                 alt={this.props.imageAlt} 
                 className={this.props.cssClass} />
        );
    }
}
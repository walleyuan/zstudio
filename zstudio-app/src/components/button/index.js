  
import React from "react";
import PropTypes from "prop-types";

export default class Button extends React.Component {
    static propTypes = {
      name: PropTypes.string,
      cssClass: PropTypes.string,
      hrefTarget: PropTypes.string,
      hrefLink: PropTypes.string
    };

    render() {
      const className = [
        "component-button",
        this.props.cssClass ==="" ? "btn btn-light btn-outline btn-outline-dark btn-xl js-scroll-trigger" : this.props.cssClass
      ];

      const Target = this.props.Target ==="" ? "_blank" : this.props.Target;
      const Href = this.props.hrefLink ==="" ? "#" : this.props.hrefLink;
      
  
      return (
        <a className={className.join(" ").trim()} target= {Target} href={Href}>
            {this.props.name}
        </a>
      );
    }
  }
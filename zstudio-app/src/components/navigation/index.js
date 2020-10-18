import React from "react";
import Logo from "../logo"
import Link from "../button"
import PropTypes from "prop-types";

export default class Navigation extends React.Component {

    static propTypes = {
        name: PropTypes.string,
        cssClass: PropTypes.string
    };

    render() {

        const className = [
            "component-nav",
            this.props.cssClass === "" ? "navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" : this.props.cssClass
        ];

        return (
            <>
                <nav className={className.join(" ").trim()} id="mainNav">
                    <div className="container">
                        <Logo />
                        <button className="navbar-toggler navbar-toggler-right"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarResponsive"
                            aria-controls="navbarResponsive"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link name="Home" cssClass="nav-link nav-home js-scroll-trigger" hrefLink="#home" />
                                </li>
                                <li className="nav-item">
                                    <Link name="Our Story" cssClass="nav-link js-scroll-trigger" hrefLink="#about" />
                                </li>
                                <li className="nav-item">
                                    <Link name="Services" cssClass="nav-link js-scroll-trigger" hrefLink="#services" />
                                </li>
                                <li className="nav-item">
                                    <Link name="Work" cssClass="nav-link js-scroll-trigger" hrefLink="#work" />
                                </li>
                                <li className="nav-item">
                                    <Link name="Contact" cssClass="nav-link js-scroll-trigger" hrefLink="#contact" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    } 
}
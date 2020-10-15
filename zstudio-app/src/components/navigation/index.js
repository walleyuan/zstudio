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
            this.props.cssClass == "" ? "navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" : this.props.cssClass
        ];

        return (
            <>
                <nav class={className.join(" ").trim()} id="mainNav">
                    <div class="container">
                        <Logo />
                        <button class="navbar-toggler navbar-toggler-right"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarResponsive"
                            aria-controls="navbarResponsive"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <Link name="Home" cssClass="nav-link nav-home js-scroll-trigger" hrefLink="#home" />
                                </li>
                                <li class="nav-item">
                                    <Link name="Our Story" cssClass="nav-link js-scroll-trigger" hrefLink="#about" />
                                </li>
                                <li class="nav-item">
                                    <Link name="Services" cssClass="nav-link js-scroll-trigger" hrefLink="#services" />
                                </li>
                                <li class="nav-item">
                                    <Link name="Work" cssClass="nav-link js-scroll-trigger" hrefLink="#work" />
                                </li>
                                <li class="nav-item">
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
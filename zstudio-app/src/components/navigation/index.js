import React from "react";
import Logo from "../logo"
import Link from "../button"
import PropTypes from "prop-types";
import ScrollspyNav from "react-scrollspy-nav";

export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    static propTypes = {
        name: PropTypes.string,
        cssClass: PropTypes.string
    };

    render() {

        const className = [
            "component-nav",
            this.props.cssClass === "" ? "navbar navbar-expand-lg navbar-light fixed-top" : this.props.cssClass
        ];

        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <>
                <ScrollspyNav
                    scrollTargetIds={["home", "about", "services", "work", "contact"]}
                    activeNavClass="navbar-shrink"
                    offset={100}
                    scrollDuration="1000"
                    headerBackground="true"
                >
                    <nav className={className.join(" ").trim()} id="mainNav">
                        <div className="container">
                            <Logo />
                            <button className="navbar-toggler navbar-toggler-right"
                                type="button"
                                onClick={this.toggleNavbar}
                                className={`${classTwo}`}
                                data-toggle="collapse"
                                data-target="#navbarResponsive"
                                aria-controls="navbarResponsive"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={`${classOne}`} id="navbarResponsive">
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
                </ScrollspyNav>

            </>
        );
    }
}
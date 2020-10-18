import React from "react";
import PropTypes from "prop-types";
import Link from "../button";


export default class Header extends React.Component {

    static propTypes = {
        title: PropTypes.string
    };

    render() {
        const Title = this.props.title;
        return (
            <header className="masthead text-white d-flex" id="home">
                <div id="stars" />
                <div className="clouds"/>
                <div className="sky-btm"/>
                <div className="container my-auto">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>{Title}</h1>
                            <Link name="View Projects" cssClass="btn btn-light btn-xl js-scroll-trigger" hrefLink="#work" />
                            <Link name="Get in Touch" cssClass="btn btn-light btn-outline btn-xl js-scroll-trigger" hrefLink="#contact" />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
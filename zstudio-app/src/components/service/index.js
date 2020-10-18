import React from "react";
import PropTypes from "prop-types";
import Panel from '../panel';
import imgPancil from '../../assets/images/ico-pencil.png';
import imgCoding from '../../assets/images/ico-coding.png';
import imgSeo from '../../assets/images/ico-search.png';
import imgMaintenance from '../../assets/images/ico-wrench.png';


export default class Section extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        sectionId : PropTypes.string,
        sectionCssClass : PropTypes.string,
    };

    render(){

        return(
            <section className={this.props.sectionCssClass} id={this.props.sectionId}>
                <div className="container">
                    <h2>{this.props.title}</h2>
                    <div class="row">
                    <Panel title="Design" 
                           src={imgPancil}
                           description ="Design plays a vital role in all our projects. IPerformed by qualified and highly talented designers, this template can impress anyone." 
                           alt = "icon of pencil"
                           cssClass= "sr-icons" />
                           
                    <Panel title="Web Development" 
                           src={imgCoding}
                           description ="The developers make every effort to enable our projects with unparalleled functionality based on Bootstrap Framework and Advanced UI Kit."
                           alt = "icon of coding"
                           cssClass= "sr-icons" />
                    <Panel title="SEO" 
                           src={imgSeo}
                           description ="We’re care for the success of your website’s performance. We’re working to improve search rankings fro your sites from start to finish." 
                           alt = "icon of seo"
                           cssClass= "sr-icons" />
                    <Panel title="Maintenance" 
                           src={imgMaintenance}
                           description ="Keep your website up to date with the latest technology, features and safety requirements." 
                           alt = "icon of maintenance"
                           cssClass= "sr-icons" />
                    </div>
                </div>
            </section>
        );
    }
}
import React, { Component } from 'react';
import axios from 'axios';
import Reaptcha from 'reaptcha';
import Form from 'react-bootstrap-form';

class Contact extends Component {
      state = {
        verified: false,
        name: '',
        phone:'',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
      };
      

      onVerify = recaptchaResponse => {
        this.setState({
          verified: true
        });
      };

    formSubmit = (e) => {
        e.preventDefault()

        if (this.state.verified){
            
            if (this.state.name=='' || this.state.email=='' || this.state.message=='' ){
                return;
            }
        }
        else{

            return
        }

        this.setState({
            buttonText: '...sending'
        })

        let data = {
            name: this.state.name,
            fromAddr: this.state.email,
            message: this.state.message
        }

        axios.post('https://zsendemail.azurewebsites.net/api/SendEmail?code=WDsyrwDFCUSVX1TlSi/n1xJaSRXFjwrOlZSPI8ylqq/6bsMAM/ZvoA==', data)
            .then(res => {
                this.setState({ sent: true }, this.resetForm())
            })
            .catch(() => {
                console.log('Message not sent')
            })
    }

    resetForm = () => {
        this.setState({
            name: '',
            phone: '',
            message: '',
            email: '',
            buttonText: 'Message Sent'
        })
    }
    

    render() {

        return (
                <section id="contact" className="bg-light">
                    <div className="container">
                        <h2>// get in touch</h2>
                        <div className="row">
                            <div className="col-md-12 col-lg-6 mx-auto">
                                <p>Nam ac gravida metus. Ut ac dui nec mi pulvinar finibus. Vestibulum egestas metus nec dui porttitor auctor. Fusce et dolor porttitor justo egestas congue sed dictum tellus. Vivamus hendrerit placerat eros a bibendum. Maecenas maximus ornare arcu, ac placerat nisi malesuada</p>
                                <p>Fusce et dolor porttitor justo egestas congue sed dictum tellus. Vivamus hendrerit placerat eros a bibendum. </p>
                            </div>
                            <div className="col-lg-5 mx-auto">
                                <form className="needs-validation contact-form" noValidate onSubmit={(e) => this.formSubmit(e)}>
                                   
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationFirstName">Your First Name *</label>
                                            <input onChange={e => this.setState({ firstname: e.target.value })} 
                                                id="validationFirstName"
                                                name="name" 
                                                className="form-control" 
                                                type="text" 
                                                placeholder="John" 
                                                value={this.state.firstname} 
                                                required/>
                                            <div className="invalid-feedback">Please enter your first name.</div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationLastName">Your Last Name *</label>
                                            <input onChange={e => this.setState({ lastname: e.target.value })} 
                                                id="validationLastName"
                                                name="name" 
                                                className="form-control" 
                                                type="text" 
                                                placeholder="White" 
                                                value={this.state.lastname} 
                                                required/>
                                            <div className="invalid-feedback">Please enter your last name.</div>                                        
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationPhone">Your Phone *</label>
                                            <input onChange={e => this.setState({ phone: e.target.value })} 
                                                id="validationPhone"
                                                name="phone" 
                                                className="form-control" 
                                                type="number" 
                                                placeholder="0422222222" 
                                                value={this.state.phone} 
                                                required/>
                                            <div className="invalid-feedback">Please enter valid number.</div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationEmail">Email address *</label>
                                            <input onChange={(e) => this.setState({ email: e.target.value })} 
                                                id='validationEmail'
                                                name="email" 
                                                className="form-control" 
                                                type="email" 
                                                placeholder="john.white@email.com" 
                                                required 
                                                value={this.state.email} />
                                            <div className="invalid-feedback">Please enter valid email address.</div>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="validationTextarea">Your Message *</label>
                                        <textarea onChange={e => this.setState({ message: e.target.value })} 
                                                id="validationTextarea"
                                                name="message" 
                                                className="form-control" 
                                                type="text" 
                                                placeholder="Please write your message here" 
                                                value={this.state.message} required />
                                        <div className="invalid-feedback">Please enter a message in the textarea.</div>
                                    </div>
                                    <div className="form-group">
                                        <Reaptcha sitekey="6LeUL9sZAAAAAL_GgusbHniL4H39n30DmidApXc5" onVerify={this.onVerify} />
                                    </div>
                                    <button type="submit" formNoValidate className="btn btn-light btn-outline btn-outline-dark btn-xl">{this.state.buttonText}</button>                                 
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
        );
    }
}

export default Contact;
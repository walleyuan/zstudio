import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

    state = {
        name: '',
        phone:'',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }

    formSubmit = (e) => {
        e.preventDefault()

        this.setState({
            buttonText: '...sending'
        })

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        axios.post('API_URI', data)
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
                <section id="contact" class="bg-light">
                    <div class="container">
                        <h2>// get in touch</h2>
                        <div class="row">
                            <div class="col-md-12 col-lg-6 mx-auto">
                                <p>Nam ac gravida metus. Ut ac dui nec mi pulvinar finibus. Vestibulum egestas metus nec dui porttitor auctor. Fusce et dolor porttitor justo egestas congue sed dictum tellus. Vivamus hendrerit placerat eros a bibendum. Maecenas maximus ornare arcu, ac placerat nisi malesuada</p>
                                <p>Fusce et dolor porttitor justo egestas congue sed dictum tellus. Vivamus hendrerit placerat eros a bibendum. </p>
                            </div>
                            <div class="col-lg-5 mx-auto">
                                <form className="needs-validation contact-form" novalidate onSubmit={(e) => this.formSubmit(e)}>
                                    <div class="form-row">
                                        <div class="col-md-6 mb-3">
                                            <label htmlFor="validationName">Your Name</label>
                                            <input onChange={e => this.setState({ name: e.target.value })} 
                                                id="validationName"
                                                name="name" 
                                                class="form-control" 
                                                type="text" 
                                                placeholder="Your Name" 
                                                value={this.state.name} 
                                                required/>
                                            <div class="invalid-feedback">Please enter your name.</div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                        <label htmlFor="validationPhone">Your Phone</label>
                                            <input onChange={e => this.setState({ phone: e.target.value })} 
                                                id="validationPhone"
                                                name="phone" 
                                                class="form-control" 
                                                type="number" 
                                                placeholder="Your Phone" 
                                                value={this.state.phone} 
                                                required/>
                                            <div class="invalid-feedback">Please enter valid number.</div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="validationEmail">Email address</label>
                                        <input onChange={(e) => this.setState({ email: e.target.value })} 
                                            id='validationEmail'
                                            name="email" 
                                            class="form-control" 
                                            type="email" 
                                            placeholder="your@email.com" 
                                            required 
                                            value={this.state.email} />
                                    <div class="invalid-feedback">Please enter valid email address.</div>
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="validationTextarea">Your Message</label>
                                        <textarea onChange={e => this.setState({ message: e.target.value })} 
                                                id="validationTextarea"
                                                name="message" 
                                                class="form-control" 
                                                type="text" 
                                                placeholder="Please write your message here" 
                                                value={this.state.message} required />
                                        <div class="invalid-feedback">Please enter a message in the textarea.</div>
                                    </div>
                                    <button type="submit" className="btn btn-light btn-outline btn-outline-dark btn-xl">{this.state.buttonText}</button>                                 
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
        );
    }
}

export default Contact;
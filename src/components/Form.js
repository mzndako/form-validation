import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
            name: '',
            email: '',
            phone: '',
            url: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      const {name, value} = e.target;
      this.setState({
        [name]: value
      })
    }

    handleSubmit() {
      const {name, email, phone, url} = this.state;
      const {isFormValid} = this.props;
      
      let invalid = false;
      
      if (name.match(/[^a-z]/) || name.length < 3 || name.length > 30) {
        invalid = true;
      }

      if (email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)) {
        invalid = true;
      }

      if (phone.match(/\d{10}/)) {
        invalid = true;
      }

      if (url.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)) {
        invalid = true;
      }

      isFormValid(!invalid)
    }
    
    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
                <h3>Name: <input type="text" className="name" onChange={this.handleChange} name="name" />
                </h3>
                <h3>Email: <input type="text" className="email" onChange={this.handleChange} name="email" />
                </h3>
                <h3>Phone: <input type="text" className="phone" onChange={this.handleChange} name="phone" />
                </h3>
                <h3>Blog URL: <input type="text" className="url" onChange={this.handleChange} name="url" />
                </h3>
                <div className="small-6 small-centered text-center columns">
                    <a href="#" onClick={this.handleSubmit} className="button success expand round text-center">Verify</a>
                </div>
            </form>
        </div>);
    }
}

export default Form;

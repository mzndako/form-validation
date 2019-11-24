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

    handleChange(name, value) {
      this.setState({
        [name]: value
      })
    }

    handleSubmit() {
      const {name, email, phone, url} = this.state;
      const {isFormValid} = this.props;
      
      let invalid = false;

      if (name.match(/[^a-z]/i) || name.length < 3 || name.length > 30) {
        invalid = true;
      }

      if (!email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)) {
        invalid = true;
      }

      if (!this.checkIfNumberValid(phone)) {
        invalid = true;
      }

      if (!url.match(/((http|https)\:\/\/)?[a-zA-Z0-9\.\/\?\:@\-_=#]+\.([a-zA-Z0-9\&\.\/\?\:@\-_=#])*/)) {
        invalid = true;
      }

      isFormValid(!invalid)
    }

    checkIfNumberValid(n){
      if(n[0] == 1 || n[0] == 0) {
        return false;
      }
      if(n.length !== 10) {
          return false;
      }
    
      return true;
    }
    
    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
                <h3>Name: <input type="text" className="name" onChange={(e) => this.handleChange('name', e.target.value)} name="name" />
                </h3>
                <h3>Email: <input type="text" className="email" onChange={(e) => this.handleChange('email', e.target.value)} name="email" />
                </h3>
                <h3>Phone: <input type="text" className="phone" onChange={(e) => this.handleChange('phone', e.target.value)} name="phone" />
                </h3>
                <h3>Blog URL: <input type="text" className="url" onChange={(e) => this.handleChange('url', e.target.value)} name="url" />
                </h3>
                <div className="small-6 small-centered text-center columns">
                    <a href="#" onClick={this.handleSubmit} className="button success expand round text-center">Verify</a>
                </div>
            </form>
        </div>);
    }
}

export default Form;

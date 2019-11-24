import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {
    constructor(){
      super();
  
      this.state = {
        message: 'Form is Incomplete!'
      }

      this.isFormValid = this.isFormValid.bind(this);
    }


    isFormValid(isValid) {
      const message = !isValid ? 'Form is Incomplete!' : 'Form is Complete!';

      this.setState({
        message
      })
    }

    render() {
        return (<div>
            <Form isFormValid={this.isFormValid}></Form>
            <Message message={this.state.message}></Message>
        </div>);
    }
}

export default App;

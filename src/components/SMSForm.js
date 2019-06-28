import React, { Component } from 'react';
import '../SMSForm.css'

class SMSForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          message: {
            to: '',
            body: `Who Wants To Win 5 Bucks?!: ${this.props.contestant} needs your help! Join the Chat: https://who-wants-to-win-bucks-chat.herokuapp.com/`
          },
          submitting: false,
          error: false
        };
      }

      onHandleChange = (event) => {
        const name = event.target.getAttribute('name');
        this.setState({
          message: { ...this.state.message, [name]: event.target.value }
        });
      }

      onSubmit =(event) => {
        event.preventDefault();
        this.setState({ submitting: true });
        fetch('/api/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state.message)
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
                this.props.textSent()
                window.open('https://who-wants-to-win-bucks-chat.herokuapp.com/')
            } else {
                alert('Invalid Number. Try Again!')
              this.setState({
                error: true,
                submitting: false
              });
            }
          });
      }
    
    render() {
        return (
            <div id="popup">
            <form
            id="myPopup" onSubmit={this.onSubmit} className={this.state.error ? 'error sms-form' : 'sms-form'}>
            <div>
              <label htmlFor="to">Who Would You Like To Call!?:</label>
              <input
                type="tel"
                name="to"
                id="to"
                value={this.state.message.to}
                onChange={this.onHandleChange}
              />
            </div>
            <button type="submit" disabled={this.state.submitting}>Send message</button>
          </form>
          </div>
        );
    }
}

export default SMSForm;
import { React, Component } from "react";
import "../../styles/Contact.scss";

class Contact extends Component {
  state = {
    email: "",
    message: "",
  };

  handleFormValidation(event) {
    event.preventDefault();
    alert("Wiadomość została wysłana");
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="mainContact">
        <h4>Skontaktuj się z nami</h4>
        <section className="contactLocaly">
          <h5>Odwiedz nas w naszej siedzibie</h5>
          <div className="office">
            <div className="info">
              <p>ul. Gdańska 118</p>
              <p>70-661 Szczecin</p>
              <p>Tel: 53 123 33917</p>
            </div>
            <div className="imageContainer">
              <div className="image"></div>
            </div>
          </div>
        </section>
        <section className="contactRemotely">
          <h5>Lub skontaktuj się z nami za pomocą formularza</h5>
          <form>
            <input
              className="inputEmail"
              type="text"
              name="email"
              placeholder="Adres email:"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <textarea
              className="inputTextarea"
              placeholder="Wiadomość"
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
            ></textarea>
            <button onClick={this.handleFormValidation}>Wyślij</button>
          </form>
        </section>
      </div>
    );
  }
}

export default Contact;

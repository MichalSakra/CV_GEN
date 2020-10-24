import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import Basic from "../../components/Basic/Basic";
import School from "../../components/School/School";
import Work from "../../components/Work/Work";

import Button from "../../components/UI/Button/Button";
class Form extends React.Component {
  state = {
    userData: {
      basic: {
        name: {
          id: "name",
          value: "",
          position: "basic",
          type: "text",
          desc: "Imię",
        },
        surname: {
          id: "surname",
          value: "",
          position: "basic",
          type: "text",
          desc: "Nazwisko",
        },
        city: {
          id: "city",
          value: "",
          position: "basic",
          type: "text",
          desc: "Miasto",
          isActive: true,
        },
        adress: {
          id: "adress",
          value: "",
          position: "basic",
          type: "text",
          desc: "Adres",
          isActive: true,
        },
        birthDate: {
          id: "birthDate",
          value: "",
          position: "basic",
          type: "date",
          desc: "Data urodzenia",
          isActive: true,
        },
        phone: {
          id: "phone",
          value: "",
          type: "text",
          desc: "Numer telefonu",
        },
        email: {
          id: "email",
          value: "",
          type: "text",
          desc: "adres e-mail",
        },
        facebook: {
          id: "facebook",
          value: "",
          type: "text",
          desc: "facebook",
          isActive: true,
        },
        linkedin: {
          id: "linkedin",
          value: "",
          type: "text",
          desc: "linkedin",
          isActive: true,
        },
      },
      work: [
        {
          company: {
            value: "",
            type: "text",
            placeholder: "Nazwa Firmy",
          },
          post: {
            value: "",
            type: "text",
            placeholder: "Twoje stanowisko",
          },
          skills: {
            value: [""],
            type: "text",
            placeholder: "Nabyte umiejętności",
          },
          workDate: {
            name: "date",
            value: ["", ""],
            type: "month",
          },
        },
      ],
      school: [
        {
          schoolName: {
            value: "",
            type: "text",
            placeholder: "Nazwa szkoły",
          },
          specialization: {
            value: "",
            type: "text",
            placeholder: "Twoje stanowisko",
          },
          skills: {
            value: [""],
            type: "text",
            placeholder: "Nabyte umiejętności",
          },
          schoolDate: {
            value: ["", ""],
            type: "month",
          },
        },
      ],
    },
    activePage: null,
  };

  handleSwitchComponent(e, move) {
    e.preventDefault();

    if (move === "forward") {
      this.setState((prev) => ({
        activePage: ++prev.activePage,
      }));
    } else if (move === "back") {
      this.setState((prev) => ({
        activePage: --prev.activePage,
      }));
    }
  }

  componentDidMount() {
    this.setState({
      activePage: +this.props.match.params.id,
    });
  }

  componentDidUpdate(__, prevState) {
    if (prevState !== this.state) {
      this.props.history.push(`${this.state.activePage}`);
    }
  }

  render() {
    const index = this.state.activePage;
    let activeComponent;
    switch (index) {
      case 1:
        activeComponent = <Basic data={this.state.userData.basic} />;
        break;
      case 2:
        activeComponent = <Work />;
        break;
      case 3:
        activeComponent = <School />;
        break;
      default:
        activeComponent = <Basic text="Default" />;
    }

    return (
      <div>
        {activeComponent}

        <Button
          btnType="danger"
          click={(e) => this.handleSwitchComponent(e, "back")}
          isDisabled={this.state.activePage <= 1}
        >
          poprzedni
        </Button>
        <Button
          isDisabled={this.state.activePage >= 5}
          btnType="success"
          click={(e) => this.handleSwitchComponent(e, "forward")}
        >
          następny
        </Button>
      </div>
    );
  }
}

export default withRouter(Form);

import React from "react";
import { withRouter } from "react-router-dom";

import Basic from "../../components/Basic/Basic";
import Compound from "../../components/Compound/Compound";
import Language from "../../components/Language/Language";

import Button from "../../components/UI/Button/Button";
import classes from "./Form.module.sass";
class Form extends React.Component {
  state = {
    userData: {
      basic: {
        name: {
          id: "name",
          value: "",
          label: "Name",
          type: "text",
        },
        surname: {
          id: "surname",
          value: "",
          label: "Surname",
          type: "text",
        },
        city: {
          id: "city",
          value: "",
          label: "City",
          type: "text",

          isActive: true,
        },
        address: {
          id: "address",
          value: "",
          label: "address",
          type: "text",

          isActive: true,
        },

        zipCode: {
          id: "zipCode",
          value: "",
          label: "Zip Code",
          type: "text",

          isActive: true,
        },
        birthDate: {
          id: "birthDate",
          value: "",
          label: "Birth date",
          type: "date",

          isActive: true,
        },
      },
      contact: {
        phone: {
          id: "phone",
          value: "",
          label: "phone number",
          type: "tel",
        },
        email: {
          id: "email",
          value: "",
          label: "e-mail",
          type: "text",
        },

        website: {
          id: "website",
          value: "",
          label: "Website",
          type: "text",
          isActive: true,
        },
        facebook: {
          id: "facebook",
          value: "",
          label: "Facebook",
          type: "text",
          isActive: true,
        },
        linkedin: {
          id: "linkedin",
          value: "",
          type: "text",
          label: "LinkedIn",
          isActive: true,
        },
        github: {
          id: "github",
          value: "",
          type: "text",
          label: "Git Hub",
          isActive: true,
        },
      },
      work: [
        {
          place: {
            id: "place",
            value: "",
            type: "text",
            label: "name",
          },
          specialization: {
            id: "specialization",
            value: "",
            type: "text",
            label: "Your specialization",
          },
          skills: {
            id: "skills",
            value: [""],
            type: "text",
            label: "skills",
          },
          date: {
            id: "date",
            value: ["", ""],
            type: "month",
            label: "work date",
          },
        },
      ],
      school: [
        {
          place: {
            id: "place",
            value: "",
            type: "text",
            label: "name",
          },
          specialization: {
            id: "specialization",
            value: "",
            type: "text",
            label: "Your specialization",
          },
          skills: {
            id: "skills",
            value: [""],
            type: "text",
            label: "skills",
          },
          date: {
            id: "date",
            value: ["", ""],
            type: "month",
            label: "date",
          },
        },
      ],
      languages: [
        {
          language: {
            id: "language",
            value: "",
            type: "text",
            label: "language name",
          },
          level: {
            id: "level",
            value: "",
            type: "text",
            label: "Your level",
          },
          skills: {
            id: "skills",
            value: [],
            type: "text",
            label: "skills",
          },
        },
      ],
    },
    activePage: null,
    options: [
      "Elementary",
      "Limited Working",
      "Working Professional",
      "Full Professional",
      "Native",
    ],
  };

  componentDidMount() {
    this.setState({
      activePage: +this.props.match.params.id,
    });
  }
  componentDidUpdate(__, prevState) {
    if (prevState.activePage !== this.state.activePage) {
      this.props.history.push(`${this.state.activePage}`);
    }
  }
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
  handleBasicInputChange = (e, dataType, id) => {
    const userData = {
      ...this.state.userData,
      [dataType]: {
        ...this.state.userData[dataType],
        [id]: {
          ...this.state.userData[dataType][id],
          value: e.target.value,
        },
      },
    };
    this.setState((prev) => {
      return {
        userData,
      };
    });
  };
  handleCompoundInputChange = (e, dataType, id, index) => {
    const dataArray = [...this.state.userData[dataType]];

    dataArray[index] = {
      ...this.state.userData[dataType][index],
      [id]: {
        ...this.state.userData[dataType][index][id],
        value: e.target.value,
      },
    };
    const userData = {
      ...this.state.userData,
      [dataType]: dataArray,
    };

    this.setState((prev) => ({
      userData,
    }));
  };
  handleDateInputChange = (e, dataType, id, index) => {
    console.log("działa");
    const newData = [...this.state.userData[dataType]];
    const date = { ...this.state.userData[dataType][index].date };
    date.value[id] = e.target.value;

    newData[index] = {
      ...this.state.userData[dataType][index],
      date: date,
    };

    this.setState({
      userData: {
        ...this.state.userData,
        [dataType]: newData,
      },
    });
  };
  handleCompoundTextareaChange = (e, dataType, mainIndex, index) => {
    const newData = [...this.state.userData[dataType]];
    const skills = { ...this.state.userData[dataType][mainIndex].skills };
    skills.value[index] = e.target.value;

    newData[mainIndex] = {
      ...this.state.userData[dataType][mainIndex],
      skills: skills,
    };

    this.setState({
      userData: {
        ...this.state.userData,
        [dataType]: newData,
      },
    });
  };
  handleCheckboxChange = (dataType, id) => {
    let userData;

    userData = {
      ...this.state.userData,
      [dataType]: {
        ...this.state.userData[dataType],
        [id]: {
          ...this.state.userData[dataType][id],
          isActive: !this.state.userData[dataType][id].isActive,
        },
      },
    };

    this.setState((prev) => {
      return {
        userData,
      };
    });
  };
  handleAddSkill = (e, dataType, index) => {
    e.preventDefault();
    const skillsValue = [
      ...this.state.userData[dataType][index].skills.value,
      "",
    ];

    const userData = { ...this.state.userData };
    userData[dataType][index].skills = {
      ...this.state.userData[dataType][index].skills,
      value: skillsValue,
    };
    this.setState((prev) => {
      return {
        userData,
      };
    });
  };
  handleAddGroup = (e, dataType) => {
    e.preventDefault();
    let newGroup;
    switch (dataType) {
      case "work":
        newGroup = {
          place: {
            id: "place",
            value: "",
            type: "text",
            label: "name",
          },
          specialization: {
            id: "specialization",
            value: "",
            type: "text",
            label: "Your specialization",
          },
          skills: {
            id: "skills",
            value: [""],
            type: "text",
            label: "skills",
          },
          date: {
            id: "date",
            value: ["", ""],
            type: "month",
            label: "date",
          },
        };
        break;
      case "school":
        newGroup = {
          place: {
            id: "place",
            value: "",
            type: "text",
            label: "name",
          },
          specialization: {
            id: "specialization",
            value: "",
            type: "text",
            label: "Your specialization",
          },
          skills: {
            id: "skills",
            value: [""],
            type: "text",
            label: "skills",
          },
          date: {
            id: "date",
            value: ["", ""],
            type: "month",
            label: "date",
          },
        };
        break;
      case "languages":
        newGroup = {
          language: {
            id: "language",
            value: "",
            type: "text",
            label: "language name",
          },
          level: {
            id: "level",
            value: "",
            type: "text",
            label: "Your level",
          },
          skills: {
            id: "skills",
            value: [],
            type: "text",
            label: "skills",
          },
        };
        break;
      default:
        return null;
    }

    const userData = {
      ...this.state.userData,
      [dataType]: [...this.state.userData[dataType], newGroup],
    };

    this.setState(() => {
      return {
        userData,
      };
    });
  };
  handleDeleteSection = (e, dataType, index) => {
    e.preventDefault();

    const userData = {
      ...this.state.userData,
      [dataType]: this.state.userData[dataType].filter((item, i) => {
        console.log(index, i);
        return index !== i;
      }),
    };

    this.setState({ userData });
  };

  handleSelect = (e) => {
    console.log(e.target.value);
  };

  render() {
    const index = this.state.activePage;
    let activeComponent;
    switch (index) {
      case 1:
        activeComponent = (
          <Basic
            data={this.state.userData.basic}
            dataType="basic"
            inputChange={this.handleBasicInputChange}
            checkboxChange={this.handleCheckboxChange}
          />
        );
        break;
      case 2:
        activeComponent = (
          <Basic
            data={this.state.userData.contact}
            dataType="contact"
            inputChange={this.handleBasicInputChange}
            checkboxChange={this.handleCheckboxChange}
          />
        );
        break;
      case 3:
        activeComponent = (
          <Compound
            header="Works"
            data={this.state.userData.work}
            dataType="work"
            inputChange={this.handleCompoundInputChange}
            textareaChange={this.handleCompoundTextareaChange}
            handleAddSkill={this.handleAddSkill}
            handleAddGroup={this.handleAddGroup}
            handleDeleteSection={this.handleDeleteSection}
            handleDateInputChange={this.handleDateInputChange}
          />
        );
        break;
      case 4:
        activeComponent = (
          <Compound
            header="Schools"
            data={this.state.userData.school}
            dataType="school"
            inputChange={this.handleCompoundInputChange}
            textareaChange={this.handleCompoundTextareaChange}
            handleAddSkill={this.handleAddSkill}
            handleAddGroup={this.handleAddGroup}
            handleDeleteSection={this.handleDeleteSection}
            handleDateInputChange={this.handleDateInputChange}
          />
        );
        break;

      case 5:
        activeComponent = (
          <Language
            inputChange={this.handleCompoundInputChange}
            header="Languages"
            dataType="languages"
            data={this.state.userData.languages}
            options={this.state.options}
            handleAddGroup={this.handleAddGroup}
            handleDeleteSection={this.handleDeleteSection}
            handleSelect={this.handleSelect}
          />
        );
        break;
      default:
        activeComponent = null;
        break;
    }

    return (
      <div className={classes.Container}>
        <div className={classes.FormWrapper}>{activeComponent}</div>

        <div className={classes.ControlButtons}>
          <Button
            btnType="danger"
            btnSize="big"
            click={(e) => this.handleSwitchComponent(e, "back")}
            isDisabled={this.state.activePage <= 1}
          >
            poprzedni
          </Button>
          <Button
            isDisabled={this.state.activePage >= 5}
            btnType="success"
            btnSize="big"
            click={(e) => this.handleSwitchComponent(e, "forward")}
          >
            następny
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Form);

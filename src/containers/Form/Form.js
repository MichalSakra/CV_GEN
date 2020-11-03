import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Basic from "../../components/Basic/Basic";
import Compound from "../../components/Compound/Compound";
import Language from "../../components/Language/Language";
import OtherInfo from "../../components/OtherInfo/OtherInfo";
import Photo from "../../components/Photo/Photo";
import * as actions from "../../store/actions";
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
            value: "Elementary",
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
      otherInfo: [
        {
          id: "courses",
          skills: {
            value: [""],
          },
          label: "Courses",
          type: "text",
        },

        {
          id: "hobby",
          skills: {
            value: [""],
          },
          label: "Interests",
          type: "text",
        },
      ],
      photo: {
        id: "photo",
        value: "",
        label: "image",
        type: "text",
        startValidate: false,
        isValidated: false,
        placeholder: "paste URL link to your photo",
      },
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
    const newData = [...this.state.userData[dataType]];

    newData[index] = {
      ...this.state.userData[dataType][index],
      [id]: {
        ...this.state.userData[dataType][index][id],
        value: e.target.value,
      },
    };
    const userData = {
      ...this.state.userData,
      [dataType]: newData,
    };

    this.setState((prev) => ({
      userData,
    }));
  };
  handleDateInputChange = (e, dataType, id, index) => {
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
  handleTextareaChange = (e, dataType, mainIndex, index) => {
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

    const userData = { ...this.state.userData };
    userData[dataType][index].skills = {
      ...this.state.userData[dataType][index].skills,
      value: [...this.state.userData[dataType][index].skills.value, ""],
    };
    this.setState((prev) => {
      return {
        userData,
      };
    });
  };
  handleDeleteSkill = (e, dataType, mainIndex, i) => {
    e.preventDefault();

    const newArray = [...this.state.userData[dataType]];
    newArray[mainIndex] = {
      ...this.state.userData[dataType][mainIndex],
      skills: {
        ...this.state.userData[dataType][mainIndex].skills,
        value: this.state.userData[dataType][mainIndex].skills.value.filter(
          (___, index) => {
            return index !== i;
          }
        ),
      },
    };

    const userData = {
      ...this.state.userData,
      [dataType]: newArray,
    };

    this.setState({ userData });
  };
  handleAddSection = (e, dataType) => {
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
            value: "Elementary",
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
        return index !== i;
      }),
    };

    this.setState({ userData });
  };

  handleSelect = (e, dataType, index) => {
    const newArray = [...this.state.userData[dataType]];
    newArray[index].level = {
      ...this.state.userData[dataType][index].level,
      value: e.target.value,
    };

    this.setState({
      userData: { ...this.state.userData, [dataType]: newArray },
    });
  };

  handlePhotoInputChange = (e = "", dataType) => {
    console.log(dataType);

    this.setState({
      userData: {
        ...this.state.userData,
        [dataType]: {
          ...this.state.userData[dataType],
          value: e.target.value,
          startValidate: false,
          isValidated: false,
        },
      },
    });
  };
  handleResetPhotoValue = (e, dataType) => {
    console.log("clicked");
    e.preventDefault(e);
    this.setState({
      userData: {
        ...this.state.userData,
        [dataType]: {
          ...this.state.userData[dataType],
          value: "",
          startValidate: false,
          isValidated: false,
        },
      },
    });
  };
  handleValidationPhoto = (e, dataType, action) => {
    e.preventDefault();

    let actionType;

    if (action === "start") {
      actionType = "startValidate";
    } else if (action === "confirm") {
      actionType = "isValidated";
    }

    this.setState({
      userData: {
        ...this.state.userData,
        [dataType]: {
          ...this.state.userData[dataType],
          [actionType]: true,
        },
      },
    });
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
            textareaChange={this.handleTextareaChange}
            handleAddSkill={this.handleAddSkill}
            handleAddSection={this.handleAddSection}
            handleDeleteSection={this.handleDeleteSection}
            handleDateInputChange={this.handleDateInputChange}
            handleDeleteSkill={this.handleDeleteSkill}
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
            textareaChange={this.handleTextareaChange}
            handleAddSection={this.handleAddSection}
            handleDeleteSection={this.handleDeleteSection}
            handleDateInputChange={this.handleDateInputChange}
            handleDeleteSkill={this.handleDeleteSkill}
            handleAddSkill={this.handleAddSkill}
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
            handleAddSection={this.handleAddSection}
            handleDeleteSection={this.handleDeleteSection}
            handleSelect={this.handleSelect}
            textareaChange={this.handleTextareaChange}
            handleAddSkill={this.handleAddSkill}
            handleDeleteSkill={this.handleDeleteSkill}
          />
        );
        break;

      case 6:
        activeComponent = (
          <OtherInfo
            dataType="otherInfo"
            data={this.state.userData.otherInfo}
            textareaChange={this.handleTextareaChange}
            handleDeleteSkill={this.handleDeleteSkill}
            handleAddSkill={this.handleAddSkill}
          />
        );
        break;

      case 7:
        activeComponent = (
          <Photo
            dataType="photo"
            data={this.state.userData.photo}
            validatePhoto={this.handleValidationPhoto}
            changePhoto={this.handlePhotoInputChange}
            resetValue={this.handleResetPhotoValue}
            submitForm={(e) => this.props.onSubmitForm(this.state.userData)}
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
            Back
          </Button>
          <Button
            isDisabled={this.state.activePage >= 7}
            btnType="success"
            btnSize="big"
            click={(e) => this.handleSwitchComponent(e, "forward")}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitForm: (state) => dispatch(actions.addFormData(state)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Form));

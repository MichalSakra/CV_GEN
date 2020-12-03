import React from "react";
import { connect } from "react-redux";
import PersonalInfo from "./Elements/PersonalInfo";
import Contact from "./Elements/Contact";
import Work from "./Elements/Work";
import School from "./Elements/School";
import Language from "./Elements/Language";
import AboutMe from "./Elements/AboutMe";
import Photo from "./Elements/Photo";
import Skills from "./Elements/Skills";
import Hobby from "./Elements/Hobby";
import Courses from "./Elements/Courses";
import classes from "./Schema.module.sass";
import { withRouter } from "react-router";
import Button from "../UI/Button/Button";

class Schema extends React.Component {
  state = {
    components: [
      {
        component: Photo,
        props: this.props.photo,
        page: 7,
        title: "photo",
      },
      {
        component: AboutMe,
        props: this.props.aboutMe,
        page: 7,
        title: "about me",
      },
      {
        component: PersonalInfo,
        props: this.props.personalInfo,
        page: 1,
        title: "personal info",
      },
      {
        component: Contact,
        props: this.props.contact,
        page: 2,
        title: "contact",
      },
      {
        component: Work,
        props: this.props.work,
        page: 3,
        title: "work experience",
      },
      {
        component: School,
        props: this.props.school,
        page: 4,
        title: "education",
      },
      {
        component: Language,
        props: this.props.language,
        page: 5,
        title: "languages",
      },
      {
        component: Skills,
        props: this.props.skills,
        page: 6,
        title: "skills",
      },
      {
        component: Hobby,
        props: this.props.hobby,
        page: 6,
        title: "interests",
      },
      {
        component: Courses,
        props: this.props.courses,
        page: 6,
        title: "courses",
      },
    ],
  };
  handlenavigateButton = (page) => {
    this.props.history.push(`form/${page}`);
  };

  showAllComponents = (components) => {
    return components.map((element, index) => {
      return (
        <div key={`schema` + index}>
          <h2>{element.title}</h2>
          {this.showComponent(element.component, element.props)}

          <Button
            click={(e) => this.handlenavigateButton(element.page)}
            btnType="info"
            btnSize="big"
          >
            Click to change data
          </Button>
        </div>
      );
    });
  };

  showComponent = (Component, props) => {
    return (
      <>
        <Component data={props} />
      </>
    );
  };

  render() {
    console.log(this.props);
    return (
      <div className={classes.Container}>
        {this.showAllComponents(this.state.components)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    personalInfo,
    contact,
    work,
    school,
    language,
    aboutMe,
    photo,
  } = state.data;

  const otherInfoToObject = state.data.otherInfo.reduce(
    (prev, curr) => (curr = { ...prev, [curr.id]: curr }),
    {}
  );

  const { hobby, courses, skills } = otherInfoToObject;

  return {
    personalInfo,
    contact,
    work,
    school,
    language,
    aboutMe,
    photo,
    skills,
    courses,
    hobby,
  };
};

export default connect(mapStateToProps, null)(withRouter(Schema));

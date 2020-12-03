import React from "react";
import Select from "../UI/Select/Select";
import Button from "../UI/Button/Button";
import CompoundInput from "../UI/CompoundInput/CompoundInput";
import Modal from "../UI/Modal/Modal";
import TextArea from "../UI/TextArea/TextArea";
import classes from "./Language.module.sass";

class Language extends React.Component {
  state = {
    isModalActive: false,
    sectionToDelete: null,
  };
  componentDidUpdate(prev) {
    if (prev !== this.props) {
      this.setState({
        isModalActive: false,
        sectionToDelete: null,
      });
    }
  }
  handleShowModal = (e, index) => {
    e.preventDefault();
    this.setState({
      isModalActive: true,
      sectionToDelete: index,
    });
  };

  handleCloseModal = (e) => {
    e.preventDefault();

    this.setState((prev) => ({
      isModalActive: false,
    }));
  };

  showSkillsInputs = (element, mainIndex, dataType, change) => {
    
    const { label, id, value } = element.skills;

    return value.map((item, i) => {
      return (
        <TextArea
          key={label + dataType + mainIndex + i}
          label={label}
          id={id + i}
          mainIndex={mainIndex}
          index={i}
          value={value[i]}
          change={(e)=>this.props.textareaChange(e, dataType, mainIndex, i)}
          dataType={dataType}
          click={(e) => {
            this.props.handleDeleteSkill(e, dataType, mainIndex, i);
          }}
        />
      );
    });
  };

  showLanguages = (data, dataType, options, change) => {
    return data.map((language, i) => {
      return (
        <div key={dataType + i} className={classes.Language}>
          <CompoundInput
            dataType={dataType}
            index={i}
            id={language.language.id}
            value={language.language.value}
            change={change}
          />
          <Select
          id={i}
            select={(e) => {
              this.props.handleSelect(e, dataType, i);
            }}
            options={options}
          />

          <div>
            {this.showSkillsInputs(
              language,
              i,
              dataType,
              this.props.textareaChange
            )}
            <Button btnType="info" btnSize="small" click={(e) => this.props.handleAddSkill(e, dataType, i)}>
              Add skill
            </Button>
          </div>

          {data.length > 1 ? (
            <Button
              btnType="danger"
              btnPosition="center"
              btnSize="big"
              click={(e) => this.handleShowModal(e, i)}
            >
              Remove this section
            </Button>
          ) : null}
        </div>
      );
    });
  };

  render() {
    const { header, dataType, data, options, inputChange } = this.props;
    return (
      <section id={this.props.header} className={classes.Secion} >
        {this.state.isModalActive ? (
          <Modal
            acceptClick={(e) => {
              this.props.handleDeleteSection(
                e,
                this.props.dataType,
                this.state.sectionToDelete
              );
            }}
            cancelClick={(e) => {
              this.handleCloseModal(e);
            }}
          />
        ) : null}
        <h1>{header}</h1>
        {this.showLanguages(data, dataType, options, inputChange)}
        <Button
          btnType="success"
          btnSize="big"
          click={(e) => {
            this.props.handleAddSection(e, this.props.dataType);
          }}
        >
          add another language
        </Button>
      </section>
    );
  }
}

export default Language;

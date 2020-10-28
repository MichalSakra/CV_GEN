import React from "react";
import CompoundInput from "../UI/CompoundInput/CompoundInput";
import Button from "../UI/Button/Button";
import TextArea from "../UI/TextArea/TextArea";
import classes from "./Compound.module.sass";
import Modal from "../UI/Modal/Modal";

class Compound extends React.Component {
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

  showDateInputs = (item, i) => {
    console.log(item);
    return (
      <>
        <CompoundInput
          label={"from:"}
          type={item.date.type}
          id={item.place.id}
          value={item.date.value[0]}
          index={i}
        />

        <CompoundInput
          label={"to:"}
          type={item.date.type}
          id={item.place.id}
          value={item.date.value[1]}
          index={i}
        />
      </>
    );
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
          change={change}
          dataType={dataType}
        />
      );
    });
  };

  showElements = () => {
    const { data, dataType, textareaChange } = this.props;

    const elements = data.map((item, i) => {
      return (
        <section className={classes.Section} key={item + i}>
          <CompoundInput
            label={item.place.label}
            type={item.place.type}
            id={item.place.id}
            dataType={dataType}
            change={this.props.inputChange}
            value={item.place.value}
            index={i}
          />
          <CompoundInput
            label={item.specialization.label}
            type={item.specialization.type}
            id={item.specialization.id}
            dataType={dataType}
            change={this.props.inputChange}
            value={item.specialization.value}
            index={i}
          />
          {this.showDateInputs(item, i)}
          <p> Skills:</p>
          <div>
            {this.showSkillsInputs(item, i, dataType, textareaChange)}
            <Button click={(e) => this.props.handleAddSkill(e, dataType, i)}>
              Add new skill
            </Button>
          </div>

          {data.length > 1 ? (
            <Button click={(e) => this.handleShowModal(e, i)}>
              Remove this section
            </Button>
          ) : null}
        </section>
      );
    });

    return elements;
  };

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

  render() {
    return (
      <div className={classes.Compound}>
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
        <h1>{this.props.header}</h1>
        {this.showElements(this.props)}
        <Button
          btnType="success"
          btnSize="big"
          click={(e) => {
            this.props.handleAddGroup(e, this.props.dataType);
          }}
        >
          {`add another ${this.props.dataType}`}
        </Button>
      </div>
    );
  }
}
export default Compound;

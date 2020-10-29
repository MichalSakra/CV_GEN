import React from "react";
import Select from "../UI/Select/Select";
import Button from "../UI/Button/Button";
import CompoundInput from "../UI/CompoundInput/CompoundInput";
import Modal from "../UI/Modal/Modal";
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

  showLanguages = (data, dataType, options, change) => {
    return data.map((language, i) => {
      console.log(language);
      return (
        <section key={dataType + i} className={classes.Section}>
          <CompoundInput
            dataType={dataType}
            index={i}
            id={language.language.id}
            value={language.language.value}
            change={change}
          />
          <Select select={this.props.handleSelect} options={options} />

          {data.length > 1 ? (
            <Button click={(e) => this.handleShowModal(e, i)}>
              Remove this section
            </Button>
          ) : null}
        </section>
      );
    });
  };

  render() {
    const { header, dataType, data, options, inputChange } = this.props;
    return (
      <div className={classes.Language}>
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
            this.props.handleAddGroup(e, this.props.dataType);
          }}
        >
          {`add another language`}
        </Button>
      </div>
    );
  }
}

export default Language;

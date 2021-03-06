import React from "react";
import TextArea from "../UI/TextArea/TextArea";
import Button from "../UI/Button/Button";
import classes from "./OtherInfo.module.sass";

const OtherInfo = (props) => {
  const showValueItems = (element, mainIndex) => {
    return element.skills.value.map((item, i) => {
      return (
        <TextArea
        value={item}
          key={element.id + "value" + i}
          change={(e) => props.textareaChange(e, props.dataType, mainIndex, i)}
          click={(e) =>
            props.handleDeleteSkill(e, props.dataType, mainIndex, i)
          }
        />
      );
    });
  };

  const showItems = () => {
    return props.data.map((item, i) => {
      
      return (
        <section id={item.label} key={item.id + 1} className={classes.OtherInfo}>
          <h2>{item.label}</h2>
          {showValueItems(item, i)}
          <Button btnType="info" btnSize="small" click={(e) => props.handleAddSkill(e, props.dataType, i)}>
            Add skill
          </Button>
        </section>
      );
    });
  };

  return showItems();
};

export default OtherInfo;

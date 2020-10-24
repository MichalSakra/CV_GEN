import React from "react";
import classes from "./Home.module.sass";
import Button from "../../components/UI/Button/Button";
import logoImage from "../../assets/images/logo.jpg";
import { withRouter } from "react-router";

class Home extends React.Component {
  handleStartButtonClick(e) {
    this.props.history.push("/form/1");
  }

  render() {
    return (
      <section className={classes.Home}>
        <h1>Witamy!</h1>
        <div>
          <img src={logoImage} alt="Logo CV GEN" />
          <p>
            Witamy w generatorze CV, który umożliwi Ci w kilku krokach
            stworzenie własnego CV, który możesz wykorzystać zarówno do
            drukowania, jak i stworzyć prostą, responsywną stronę internetową -
            wizytówkę.
          </p>

          <Button
            btnType="success"
            click={(e) => {
              this.handleStartButtonClick(e);
            }}
          >
            Zaczynamy!
          </Button>
        </div>
      </section>
    );
  }
}

export default withRouter(Home);

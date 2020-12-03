import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Schema from "../../components/Schema/Schema"

class Verify extends React.Component {
  render() {
    let showContent;

    if (!this.props.isSumbitted) {
      showContent = <Redirect to="/" />;
    } else {

      showContent = <div><Schema /></div>;
    }

    return showContent;
  }
}
const mapStateToProps = (state) => {
  return {
    isSumbitted: state.isSumbitted,
    data: state.data,
  };
};

export default connect(mapStateToProps, null)(Verify);

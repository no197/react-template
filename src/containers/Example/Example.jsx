import React, { Component } from "react";
import "./Example.css";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { exampleReduxAction } from "../../actions/exampleAction";

const mapStateToProps = state => ({
  exampleState: state.exampleReducer.exampleState,
});

const mapDispatchToProps = dispatch => ({
  exampleRedux: () => dispatch(exampleReduxAction()),
});

class Example extends Component {
  componentDidMount() {
    this.props.exampleRedux();
  }

  render() {
    return (
      <div className="badge badge-secondary example">
        {`${this.props.exampleState} `}
        <FontAwesomeIcon icon={faCoffee} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);

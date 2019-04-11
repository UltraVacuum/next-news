import React, { Component } from "react";
import PropTypes from "prop-types";
import { LineScalePulseOut } from "@/components/loader";

import Visit from "./Visit";

export default class InfiniteLoader extends Component {
  static get defaultProps() {
    return {
      visitStyle: { visibility: "hidden" }
    };
  }

  static get propTypes() {
    return {
      containerElement: PropTypes.object,
      onVisited: PropTypes.func,
      visitStyle: PropTypes.object,
      loaderStyle: PropTypes.object
    };
  }

  constructor(props) {
    super(props);
  }

  handleVisit() {
    this.refs.visit.resetVisited();
    if (this.props.onVisited != undefined) {
      this.props.onVisited();
    }
  }

  render() {
    return (
      <span>
        <LineScalePulseOut
          style={{
            height: 80
          }}
          className="mb-4"
        />
        <Visit
          className="visit"
          ref="visit"
          {...this.props}
          onVisited={() => this.handleVisit()}
        />
      </span>
    );
  }
}

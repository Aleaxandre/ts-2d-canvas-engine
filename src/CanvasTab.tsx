import React, { Component, FormEvent } from "react";
import Canvas from "./Canvas";

type CanvasTabState = {
  width: string;
  height: string;
};

type CanvasTabProps = {};

export default class CanvasTab extends Component<
  CanvasTabProps,
  CanvasTabState
> {
  constructor(props: CanvasTabProps) {
    super(props);
    this.state = { width: "200", height: "300" };

    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
  }

  handleWidthChange(event: FormEvent<HTMLInputElement>) {
    const widthValue = event.currentTarget.value;
    this.setState({ width: widthValue });
  }

  handleHeightChange(event: FormEvent<HTMLInputElement>) {
    const heightValue = event.currentTarget.value;
    this.setState({ height: heightValue });
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="input-width">Width : </label>
          <input
            name="input-width"
            type="number"
            value={this.state.width}
            onChange={this.handleWidthChange}
          />
        </div>
        <div>
          <label htmlFor="input-height">Height : </label>
          <input
            name="input-height"
            type="number"
            value={this.state.height}
            onChange={this.handleHeightChange}
          />
        </div>
        <Canvas
          width={Number.parseInt(this.state.width)}
          height={Number.parseInt(this.state.height)}
        ></Canvas>
      </div>
    );
  }
}

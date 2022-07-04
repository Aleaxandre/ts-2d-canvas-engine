import React, { Component, useEffect } from "react";

type CanvasProps = {
  width: number;
  height: number;
};

export default class Canvas extends Component<CanvasProps> {
  constructor(props: CanvasProps) {
    super(props);
    // this.state = { width: "200", height: "300" };

    // this.handleWidthChange = this.handleWidthChange.bind(this);
  }

  // useEffect(() => {
  componentDidMount() {
    console.log("componentDidMount");
    // Prepare canvas
    let canvas = document.getElementById("htmlCanvas") as HTMLCanvasElement;
    let context = canvas.getContext("2d");
    if (!!context) {
      context.lineCap = "round";
      context.lineJoin = "round";
      context.strokeStyle = "black";
      context.lineWidth = 1;
      var x = 0;
      var y = 0;
      let width = 10;
      let height = 10;
      let colors = [
        "black",
        "red",
        "green",
        "blue",
        "white",
        "pink",
        "brown",
        "grey",
      ];

      for (let indexH = 0; indexH < 10; indexH++) {
        for (let indexW = 0; indexW < 10; indexW++) {
          context.fillStyle = "green"; // colors[Math.floor(Math.random() * 9)];

          // Draw a coloured square on the canvas
          context.fillRect(indexW * 10, indexH * 10, width, height);
        }

        // Trace a path from the left
        var pathX = 0;
        var pathY = Math.floor(Math.random() * 10);
        context.fillStyle = "brown";
        while (true) {
          console.log(
            "Drawing a " +
              context.fillStyle +
              " square at:(" +
              pathX +
              "," +
              pathY +
              ")."
          );
          context.fillRect(pathX * 10, pathY * 10, width, height);
          let direction = Math.floor(Math.random() * 4); // Four directions
          console.log(direction);
          switch (direction) {
            case 0:
              pathX += 1;
              break;
            case 1:
              pathX -= 1;
              break;
            case 2:
              pathY += 1;
              break;
            default:
              pathY -= 1;
              break;
          }
          if (pathX < 0 || pathX > 9 || pathY > 9 || pathY < 0) {
            break;
          }
        }
      }
    } else {
      console.log("failed to initialize 2D context");
    }

    // var $this = $(ReactDOM.findDOMNode(this));
    // set el height and width etc.
  }
  // });

  render() {
    return (
      <div>
        <div>
          Canvas H{this.props.height}/W{this.props.width}
        </div>
        <canvas
          id="htmlCanvas"
          width={this.props.width}
          height={this.props.height}
        ></canvas>
      </div>
    );
  }
}

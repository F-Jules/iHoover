class iHooverProto {
  constructor(x, y, facing) {
    (this.x = x), (this.y = y), (this.facing = facing);
  }

  setInstructionsToiHoover(instruction) {
    switch (instruction) {
      case "D":
        this.turnRight();
        break;
      case "G":
        this.turnLeft();
        break;
      case "A":
        this.goForward();
    }
  }

  goForward() {
    switch (this.facing) {
      case "N":
        this.y += 1;
        this.gettingiHooverPosition();
        break;
      case "E":
        this.x += 1;
        this.gettingiHooverPosition();
        break;
      case "W":
        this.x -= 1;
        this.gettingiHooverPosition();
        break;
      case "S":
        this.y -= 1;
        this.gettingiHooverPosition();
        break;
    }
  }

  turnLeft() {
    switch (this.facing) {
      case "N":
        this.facing = "W";
        this.gettingiHooverFacing();
        break;
      case "E":
        this.facing = "S";
        this.gettingiHooverFacing();
        break;
      case "W":
        this.facing = "N";
        this.gettingiHooverFacing();
        break;
      case "S":
        this.facing = "W";
        this.gettingiHooverFacing();
        break;
    }
  }

  turnRight() {
    switch (this.facing) {
      case "N":
        this.facing = "E";
        this.gettingiHooverFacing();
        break;
      case "E":
        this.facing = "S";
        this.gettingiHooverFacing();
        break;
      case "W":
        this.facing = "N";
        this.gettingiHooverFacing();
        break;
      case "S":
        this.facing = "W";
        this.gettingiHooverFacing();
        break;
    }
  }

  gettingiHooverPosition() {
    console.log(`iHooverProto's position: ${this.x} / ${this.y}.`);
  }

  gettingiHooverFacing() {
    console.log(`iHooverProto's facing: ${this.facing}.`);
  }
}

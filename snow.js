class Snowflake {

  constructor() {
    let x = random(width);
    let y = 0 - 100 - random(height/2);
    // let distance = random(0.1, 0.7)
    // if (distance > 0.25) {
    //   let distance = random(0.1, 0.7)
    //   if (distance > 0.25) {
    //     let distance = random(0.1, 0.7)
    //     if (distance > 0.25) {
    //       let distance = random(0.1, 0.7)
    //       if (distance > 0.25) {
    //         let distance = random(0.1, 0.7)
    //       }
    //     }
    //   }
    // }
    let roll = random(0,1)
    let distance = 0.0;
    if (roll < 0.1) {
      // 10%
      distance = random(0.5, 0.7);
    } else {
      // Remaining %
      distance = random(0.1, 0.5);
    }


    this.d_const = 20
    this.pos = createVector(x, y, distance);
    this.v_scale = createVector(this.pos.z * this.d_const, this.pos.z * this.d_const, this.pos.z * this.d_const)
    this.wave_start = random(0,6)

    this.vel = createVector();
    this.acc = createVector();

  }

  applyGravity(gravity) {
    //print("VSCALE:", this.v_scale)
    let vect = createVector(gravity.x * this.v_scale.x, gravity.y * this.v_scale.y, gravity.z * this.v_scale.z)
    this.acc.add(vect);

  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    this.pos.x = this.pos.x + ( this.wave_start * sin(this.pos.x / width))

  }


  offScreen() {
    return (this.pos.y > height ||
            this.pos.x < 0 ||
            this.pos.x > width)
  }

  render() {
    stroke(255 * (this.pos.z + 0.3));
    strokeWeight(this.pos.z * this.d_const);
    point(this.pos.x, this.pos.y);
  }

}

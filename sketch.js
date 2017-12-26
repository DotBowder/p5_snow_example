let snow = [];
let gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector( 0, 0.00125, 0 );
  wind = createVector( 0, 0, 0 )
}

function draw() {
  background(0);
  if (snow.length < 400) {
    snow.push(new Snowflake());
  }

  for (flake of snow) {
    flake.applyGravity(gravity)
    flake.update();
    flake.render();
  }

  for (let i = snow.length - 1; i >=0; i--) {
    if (snow[i].offScreen()) {
      snow.splice(i, 1);
    }
  }

}

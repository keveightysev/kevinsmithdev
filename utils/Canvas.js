export default class Canvas {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.time = 0;
  }

  colors = (x, y, r, g, b) => {
    this.ctx.fillStyle = `rgb(${r},${g},${b})`;
    this.ctx.fillRect(x, y, 1, 1);
  };

  red = (x, y, t) => {
    return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
  };

  green = (x, y, t) => {
    return Math.floor(
      192 +
        64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
    );
  };

  blue = (x, y, t) => {
    return Math.floor(
      192 +
        64 *
          Math.sin(
            5 * Math.sin(t / 9) +
              ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
          )
    );
  };

  run = () => {
    for (let x = 0; x <= 35; x++) {
      for (let y = 0; y <= 35; y++) {
        this.colors(
          x,
          y,
          this.red(x, y, this.time),
          this.green(x, y, this.time),
          this.blue(x, y, this.time)
        );
      }
    }
    this.time = this.time + 0.04;
    requestAnimationFrame(this.run);
  };

  stop = () => {
    cancelAnimationFrame(this.canvas);
  };
}

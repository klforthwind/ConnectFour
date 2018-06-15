class Graphics {
  constructor() {
    createCanvas(75 * 7, 75 * 6);
  }

  show(img, x, y) {
    image(img, x, y);
  }
}

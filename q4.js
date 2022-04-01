//Destructure the rectangle object by its properties.
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};

console.log("rectangle: ", rectangle);

const { width, height, area, perimeter } = rectangle;
console.log("width: ", width);
console.log("height: ", height);
console.log("area: ", area);
console.log("perimeter: ", perimeter);

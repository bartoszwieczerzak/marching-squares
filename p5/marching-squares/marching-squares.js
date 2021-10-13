let field = [];
let res = 10;
let cols, rows;

function setup() {
    createCanvas(300, 300);

    cols = 1 + width / res;
    rows = 1 + height / res;
    //print('this works!' + width + 'x' + height);
    prepareField();

    // prevent draw() function from looping
    noLoop();
}

function draw() {
    background(210);
    drawPoints();
}

function prepareField() {
    for (let i = 0; i < cols; i++) {
        field[i]=[];
        for (let j = 0; j < rows; j++) {
            field[i][j] = floor(random(2));
        }
    }
}

function drawPoints() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            stroke(field[i][j] * 255);
            strokeWeight(res*0.5);
            point(i*res, j*res);
        }
    }
}

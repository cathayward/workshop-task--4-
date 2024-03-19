let imgs = [];
let raz, sasha, lili;
let backgroundImage

function preload () {
raz = loadImage("images/raz.png");
sasha = loadImage("images/sasha.png");
lili = loadImage("images/lili.png");
razb = loadImage("images/razb.png");
sashab = loadImage('images/sashab.png');
lilib = loadImage("images/lilib.png");
}

function setup() {
  imgs.push(raz);
  imgs.push(sasha);
  imgs.push(lili);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 222, 181);

  button = createImg('images/razb.png');
  button.position(windowWidth / 5 - (razb.width / 2), windowHeight / 2 - (razb.height / 2));
  button.style('background-image', '(images/razb.png)');
  button.style('cursor', 'pointer');
  button.mousePressed(() => {
    image(raz, random(windowWidth), random(windowHeight));
  }
  );

  button = createImg('images/sashab.png');
  button.position(windowWidth - windowWidth / 5 - (sashab.width / 2), windowHeight / 2 - (sashab.height / 2));
  button.style('background-image', '(images/sasha.png)');
  button.style('cursor', 'pointer');
  button.mousePressed(() => {
    image(sasha, random(windowWidth), random(windowHeight));
  }
  );

  button = createImg('images/lilib.png');
  button.position(windowWidth / 2 - (lilib.width / 2), windowHeight / 2 - (lilib.height / 2));
  button.style('background-image', '(images/razb.png)');
  button.style('cursor', 'pointer');
  button.mousePressed(() => {
    image(lili, random(windowWidth), random(windowHeight));
  }
  );
}

function draw() {
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

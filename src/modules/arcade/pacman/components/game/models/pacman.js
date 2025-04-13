import { Howl } from "howler";

export default class PacMan {
  constructor(
    { position, velocity },
    tileLength,
    munchOne = new Howl({
      src: "./audio/munch_one.wav",
      volume: 0.1,
    }),
    munchTwo = new Howl({
      src: "./audio/munch_two.wav",
      volume: 0.1,
    })
  ) {
    this.originalPosition = position;
    this.position = { ...this.originalPosition };
    this.originalVelocity = velocity;
    this.velocity = { ...this.originalVelocity };
    this.tileLength = tileLength;
    this.radius = (tileLength * 3) / 8;
    this.speed = tileLength / 8;
    this.radians = Math.PI / 4;
    this.openRate = Math.PI / 36;
    this.shrinkRate = Math.PI / 220;
    this.rotation = 0;
    this.lives = 2;
    this.isEating = false;
    this.isShrinking = false;
    this.isLevellingUp = false;
    this.isDead = false;
    this.munchOne = munchOne;
    this.munchTwo = munchTwo;

    // Load images
    this.mouthOpen = new Image();
    this.mouthOpen.src = '/images/pacman-mouth-open.png';
    this.mouthClosed = new Image();
    this.mouthClosed.src = '/images/pacman-mouth-close.png';
    this.dead = new Image();
    this.dead.src = '/images/pacman-dead.png';

    this.currentImage = this.mouthClosed;
  }

  draw(ctx) {
    if (this.isDead) {
      this.currentImage = this.dead;
    } else if (this.isEating) {
      this.currentImage = this.mouthOpen;
    } else {
      this.currentImage = this.mouthClosed;
    }

    ctx.drawImage(
      this.currentImage,
      this.position.x - (this.radius * 3),
      this.position.y - (this.radius * 3),
      this.radius * 6,
      this.radius * 6
    );
  }

  update(ctx) {
    this.draw(ctx);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.velocity.x !== 0 || this.velocity.y !== 0) {
      this.chomp();
    }
  }

  chomp() {
    if (!this.isDead) {
      this.isEating = !this.isEating;
      if (this.isEating) {
        this.munchOne.play();
      } else {
        this.munchTwo.play();
      }
    }
  }

  shrink(ctx) {
    this.draw(ctx);
    this.radians += this.shrinkRate;
  }

  die() {
    this.isDead = true;
    this.isEating = false;
  }

  reset() {
    this.position = { ...this.originalPosition };
    this.velocity = { ...this.originalVelocity };
    this.isDead = false;
    this.isEating = false;
  }
}

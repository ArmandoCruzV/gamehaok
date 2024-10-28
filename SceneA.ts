import { preloadSceneA } from "./preloadSceneA.ts";
import { createSceneA } from "./createSceneA.ts";
import { updateSceneA } from "./updateSceneA.ts";
import { throwBomb } from "./animationsEnemies/enemy1.ts";

export default class SceneA extends Phaser.Scene {

  constructor() {
    super({ key: "SceneA", active: true });

    this.player = null;
    this.platforms = null;
    this.lives = 113;
    this.livesText = null;
    this.gameOverText = null;
    this.retryButton = null;
    this.cursors = null;
    this.livesEnemy1 = 4;
    //this.livesEnemy1a = 4;
    this.livesEnemy2 = 5;
    this.createBombs = true;
    this.invulnerable = false;
    this.direction = 1;

    this.upButton = document.getElementById('upButton');
    this.leftButton = document.getElementById('leftButton');
    this.downButton = document.getElementById('downButton');
    this.rightButton = document.getElementById('rightButton');

    this.update = this.update.bind(this);
  }

  preload() {
    preloadSceneA(this);
  }

  create() {
    createSceneA(this);
  }

  update() {
    updateSceneA(this);
  }

  reduceVida() {
    if (this.lives > 0) {
      this.lives--;
      this.livesText.setText('Vidas: ' + this.lives);

      this.player.setAlpha(0.7); // Establecer la transparencia

      this.playerColliderBomb.active = false;
      this.playerColliderEnemy2.active = false;

      this.time.addEvent({
        delay: 1500,
        callback: () => {
          this.player.setAlpha(1);
          this.playerColliderBomb.active = true;
          this.playerColliderEnemy2.active = true;
        },
        loop: false,
      })
    }
    if (this.lives <= 0) {
      this.gameOverText.setText('Game Over');
      this.retryGame();
    }
  }


  retryGame() {
    this.retryButton.setDepth(1);
    this.retryButton.setInteractive();
    this.createBombs = true;
    this.anims.resumeAll();
    this.livesEnemy1 = 4;
  }

  resetPlayerPosition() {
    if (this.lives > 0) {
      this.player.setPosition(100, 100);
    }
  }


  //LALALALALAL
  // throwBomb(this);
  //funciones de arrojado de bombas
  throwBomb() {
    if (this.createBombs) {
      const bombb = this.bomb.create(this.enemy1.x, this.enemy1.y, 'bomb');
      bombb.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(200, -200));
    }
    this.bomb.children.iterate((bomb) => {
      bomb.body.allowGravity = false;
    });
  }


  //daño al enemigo1
  takeDamage() {
    if (this.livesEnemy1 > 0) {
      this.enemy1.setAlpha(0.7); // Establecer la transparencia

      this.time.addEvent({
        delay: 1000,
        callback: () => {
          this.enemy1.setAlpha(1);
          this.sword.x = false;
          this.sword.y = false;
        },
        loop: false,
      })
    }
    if (this.livesEnemy1 <= 0) {
      this.enemy1.setActive(false);
      this.enemy1.setVisible(false);
      this.createBombs = false;
    }
  }


  hitEnemy() {
    if (this.invulnerable == false) {

      this.takeDamage();

      this.invulnerable = true;
      if (this.invulnerable) {
        this.livesEnemy1--;
        this.time.delayedCall(500, () => {
          this.invulnerable = false;
        }, [], this)
      }
    }
  }


  //Enemy2 
  takeDamageEnemy2() {
    if (this.livesEnemy2 > 0) {
      this.enemy2.setAlpha(0.7);

      this.time.addEvent({
        delay: 1000,
        callback: () => {
          this.enemy2.setAlpha(1);
          this.sword.x = false;
          this.sword.y = false;
        },
        loop: false,
      })
    }
    if (this.livesEnemy2 <= 0) {
      this.enemy2.setActive(false);
      this.enemy2.setVisible(false);
    }
  }
  hitEnemy2() {
    if (this.invulnerable == false) {

      this.takeDamageEnemy2();

      this.invulnerable = true;
      if (this.invulnerable) {
        this.livesEnemy2--;
        this.time.delayedCall(500, () => {
          this.invulnerable = false;
        }, [], this)
      }
    }
  }


}





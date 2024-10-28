/*
import SceneA from "./SceneA";

var config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    //autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: [SceneA],
};

var game = new Phaser.Game(config);

*/

import SceneA from "./SceneA"; // Puedes omitir .js si estás usando TypeScript

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    // autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: [SceneA],
};

const game = new Phaser.Game(config);


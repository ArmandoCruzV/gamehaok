export function preloadSceneA(scene) {
  scene.load.spritesheet('enemy1', 'assets/dude.png', { frameWidth: 40, frameHeight: 60 });
  scene.load.spritesheet('enemy2', 'assets/Perro.png', { frameWidth: 80, frameHeight: 60 });

  scene.load.image('sky2', 'assets/sky2.png');
  scene.load.image('sky', 'assets/sky.png');
  scene.load.image('ground', 'assets/platform.png');
  scene.load.image('copaArbol', 'assets/copaArbol.png');
  scene.load.image('tronco', 'assets/tronco.png');
  scene.load.image('star', 'assets/star.png');
  scene.load.image('bomb', 'assets/bomb.png');
  scene.load.image('nopal', 'assets/nopal.png',);
  scene.load.image('mexquite','assets/mexquite.png'); 
  scene.load.image('terreno','assets/terreno.png');

  //player
  scene.load.spritesheet('heroe', 'assets/heroe.png', { frameWidth: 40, frameHeight: 60 });
  scene.load.spritesheet('atack', 'assets/attack.png', { frameWidth: 80, frameHeight: 60 });
  scene.load.spritesheet('damaged', 'assets/muerteHero.png', { frameWidth: 40, frameHeight: 60 });

}

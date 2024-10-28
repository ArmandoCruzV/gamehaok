import { animationsPlayer } from "./animationsPlayer.js";
import { animationsEnemy1,lala} from "./animationsEnemies/enemy1.js";
import { animationsEnemy2 } from "./animationsEnemies/enemy2.js";

export function createSceneA(scene) {

  scene.anims.create({
    key: 'sky-animation',
    frames: [
      { key: 'sky2' },
      { key: 'sky' }
    ],
    frameRate: 0.1,
    repeat: -1,
  })
  scene.sky = scene.add.sprite(400, 300, 'sky2');
  scene.sky.play('sky-animation');
  scene.sky.setScrollFactor(0);

  scene.createByHaok = scene.add.text(50, 50, 'Haok Game Production.', {
    fontSize: '45px', fill: '#E2BBE9',
    fontStyle: 'bold',
    backgroundColor: '#5A639C',
    borderRadius: '9px',
  });

  scene.livesText = scene.add.text(16, 16, 'Vidas: ' + scene.lives, {
    fontSize: '32px', fill: '#624E88',
    //fontStyle: 'bold',
    backgroundColor: '#FFD7C4',
    borderRadius: '9px',
  });
  scene.livesText.setScrollFactor(0);

  let cam = scene.cameras.main;
  let centerX = cam.worldView.x + cam.width / 2;
  let centerY = cam.worldView.y + cam.height / 2;
  scene.gameOverText = scene.add.text(centerX, centerY, '', {
    fontSize: '64px', fill: '#E76F51',
    fontStyle: 'bold',
    backgroundColor: '#088395',
  });
  scene.gameOverText.setDepth(1);
  scene.gameOverText.setOrigin(0.5, 0.5);
  scene.gameOverText.setScrollFactor(0);

  //Botones de reiniciar
  scene.retryButton = scene.add.text(400, 400, 'VOLVER A INTENTAR', {
    fontSize: '32px', fill: '#EEEDEB',
    fontStyle: 'bold',
    backgroundColor: '#2F3645'
  });
  scene.retryButton.setOrigin(0.5, 0.5);
  //retryButton.setInteractive();
  scene.retryButton.disableInteractive();
  scene.retryButton.setScrollFactor(0);
  scene.retryButton.setDepth(-1);
  scene.retryButton.on('pointerdown', () => {
    scene.scene.restart();
    scene.lives = 3;
  });

  scene.platforms = scene.physics.add.staticGroup();

  scene.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
  scene.platforms.create(600, 568, 'ground').setScale(2).refreshBody();
  ///  scene.platforms.create(1000, 568, 'ground').setScale(2).refreshBody();
  scene.platforms.create(1600, 568, 'ground').setScale(2).refreshBody();
  scene.platforms.create(2200, 568, 'ground').setScale(2).refreshBody();
  scene.platforms.create(3300, 568, 'ground').setScale(2).refreshBody();
  scene.platforms.create(3600, 568, 'ground').setScale(2).refreshBody();


  scene.terreno = scene.add.image(400, 478, 'terreno').setScale(2)
  scene.terreno = scene.add.image(600,478, 'terreno').setScale(2)
  scene.terreno = scene.add.image(1600, 478, 'terreno').setScale(2)
  scene.terreno = scene.add.image(2200, 478, 'terreno').setScale(2)
  scene.terreno = scene.add.image(3300, 478, 'terreno').setScale(2)
  scene.terreno = scene.add.image(3600, 478, 'terreno').setScale(2)


  scene.tronco = scene.add.image(45, 390, 'tronco').setScale(0.75);
  scene.troncoInvertido = scene.add.image(800, 340, 'tronco').setScale(1);
  scene.troncoInvertido.flipX = true;
  scene.tronco = scene.add.image(1345, 430, 'tronco').setScale(0.55);
  scene.tronco2 = scene.add.image(1645, 430, 'tronco').setScale(1);
  scene.tronco2.flipX = true;
  scene.tronco2.setDepth(1)

  scene.nopal = scene.add.image(530,470,'nopal').setScale(1.5);
  scene.nopal = scene.add.image(2400,470,'nopal').setScale(1.5);
  scene.nopal = scene.add.image(2200,443,'nopal').setScale(2).flipX = true;
  scene.nopal = scene.add.image(2300,480,'nopal').setScale(1.3);
  scene.nopal = scene.add.image(3000,465,'nopal').setScale(1.7);

  scene.mexquite = scene.add.image(1850, 453,'mexquite');
  scene.mexquite = scene.add.image(3050, 453,'mexquite');

  scene.platforms.create(250, 400, 'copaArbol');
  scene.platforms.create(50, 250, 'copaArbol');
  scene.platforms.create(750, 130, 'copaArbol');
  scene.platforms.create(880, 130, 'copaArbol');
  scene.platforms.create(1350, 320, 'copaArbol');
  scene.add.image(1550, 240, 'copaArbol').setScale(1.5);
  scene.platforms.create(1750, 220, 'copaArbol');
  scene.platforms.create(2000, 200, 'copaArbol');

  scene.player = scene.physics.add.sprite(100, 100, 'heroe').setScale(1.5); 
  scene.player.setBounce(0.2);
  scene.player.setCollideWorldBounds(true);
  //Animacion de daño para el player
  scene.anims.create({
    key: 'damaged',
    frames: scene.anims.generateFrameNumbers('damaged', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });
  //Ataque  
  scene.anims.create({
    key: 'attack',
    frames: scene.anims.generateFrameNumbers('atack', { start: 0, end: 5 }), // Ajusta los índices a tu spritesheet
    frameRate: 10,
    repeat: -1,
  });
  scene.sword = scene.add.rectangle(scene.player.x, scene.player.y, 50, 50) //,0xff0000); PARA COLOREAR EL AREA DE ATAQUE
  scene.physics.add.existing(scene.sword);
  scene.sword.body.setAllowGravity(false);

  scene.bomb = scene.physics.add.group();
  scene.time.addEvent({
    key: 'bomb',
    delay: 700,
    callback: scene.throwBomb,
    callbackScope: scene,
    loop: true,
  });

  
  animationsEnemy1(scene.anims);
  lala(scene,800,400);
  lala(scene,200,400);

  lala(scene,300,400);
  /*
  scene.enemy1 = scene.physics.add.sprite(800, 400, 'enemy1');
  scene.enemy1.setBounce(0.3);
  scene.enemy1.setCollideWorldBounds(true);
  scene.enemy1.anims.play('enemy');
  //ocurre cuando colpea la espada al Enemy1
  scene.physics.add.overlap(scene.sword, scene.enemy1, (sword, enemy) => {
    scene.takeDamage();
  }, null, scene);
*/

  animationsEnemy2(scene.anims);
  scene.enemy2 = scene.physics.add.sprite(2000, 300,'enemy2').setScale(2);
  scene.enemy2.setBounce(0.3);
  scene.enemy2.setCollideWorldBounds(true);
  scene.enemy2.anims.play('enemy2');
  scene.physics.add.overlap(scene.sword, scene.enemy2, (sword, enemy) => {
    scene.takeDamageEnemy2();
  }, null, scene);

  scene.physics.world.setBounds(0, 0, 4000, 600); //distancia del escenerio
  scene.cameras.main.setBounds(0, 0, 4000, 600);
  scene.cameras.main.startFollow(scene.player);
  
  animationsPlayer(scene.anims);

  scene.playerColliderBomb = scene.physics.add.collider(scene.bomb, scene.player, scene.reduceVida, null, scene)
  scene.playerColliderEnemy2 = scene.physics.add.collider(scene.enemy2, scene.player, scene.reduceVida, null, scene)
  scene.enemyCollider = scene.physics.add.collider(scene.sword, scene.enemy1, scene.hitEnemy, null, scene)
  scene.enemyCollider = scene.physics.add.collider(scene.sword, scene.enemy2, scene.hitEnemy2, null, scene)

  scene.cursors = scene.input.keyboard.createCursorKeys();

  //Botones de HTML
  scene.upButton.addEventListener('mousedown', () => {
    scene.cursors.up.isDown = true;
  });
  scene.upButton.addEventListener('mouseup', () => {
    scene.cursors.up.isDown = false;
  });
  scene.leftButton.addEventListener('mousedown', () => {
    scene.cursors.left.isDown = true;
  });
  scene.leftButton.addEventListener('mouseup', () => {
    scene.cursors.left.isDown = false;
  });
  scene.rightButton.addEventListener('mousedown', () => {
    scene.cursors.right.isDown = true;
  });
  scene.rightButton.addEventListener('mouseup', () => {
    scene.cursors.right.isDown = false;
  });
  scene.downButton.addEventListener('mousedown', () => {
    scene.cursors.down.isDown = true;
  });
  scene.downButton.addEventListener('mouseup', () => {
    scene.cursors.down.isDown = false;
  });

  scene.physics.add.collider(scene.player, scene.platforms);
  scene.physics.add.collider(scene.enemy1, scene.platforms);
  scene.physics.add.collider(scene.enemy2, scene.platforms);


}






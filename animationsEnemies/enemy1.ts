export const animationsEnemy1 = (anims) => {
  anims.create({
    key: 'enemy',
    frames: anims.generateFrameNumbers('enemy1', { start: 0, end: 5 }),
    //velocidad
    frameRate: 5,
    //repetir indefinidamente
    repeat: -1,
  });
}
  
export const lala = (scene,x,y) => {
  scene.enemy1 = scene.physics.add.sprite(x, y, 'enemy1');
  scene.enemy1.setBounce(0.3);
  scene.enemy1.setCollideWorldBounds(true);
  scene.enemy1.anims.play('enemy');
  //ocurre cuando colpea la espada al Enemy1
  scene.physics.add.overlap(scene.sword, scene.enemy1, (sword, enemy) => {
    scene.takeDamage();
  }, null, scene);
}

export const throwBomb = (scene) => {
    if (scene.createBombs) {
      const bombb = scene.bomb.create(scene.enemy1.x, scene.enemy1.y, 'bomb');
      bombb.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(200, -200));
    }
    scene.bomb.children.iterate((bomb) => {
      bomb.body.allowGravity = false;
    });
}
 

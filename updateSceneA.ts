export function updateSceneA(scene) {

  scene.keys = scene.input.keyboard.addKeys({
    a: Phaser.Input.Keyboard.KeyCodes.A
  });


  if (scene.lives > 0 && !scene.keys.a.isDown) {
    if (scene.cursors.left.isDown) {
      scene.player.setVelocityX(-160);
      scene.player.anims.play('left', true);
      scene.player.flipX = true;
    } else if (scene.cursors.right.isDown) {
      scene.player.setVelocityX(160);
      scene.player.anims.play('right', true);
      scene.player.flipX = false;
    } else if (scene.cursors.up.isDown) {
      scene.player.setVelocityX(0);
      scene.player.anims.play('up', true);
    } else if (scene.cursors.down.isDown) {
      scene.player.setVelocityX(0);
      scene.player.anims.play('down', true);
    } else {
      scene.player.setVelocityX(0);
      scene.player.anims.play('turn');
    }

    if (scene.cursors.up.isDown && scene.player.body.touching.down) {
      scene.player.setVelocityY(-330);
    }
  }

  // Verificar si el jugador ha caído fuera del escenario
  if (scene.player.y + 50 > scene.physics.world.bounds.height) {
    scene.reduceVida();
    scene.resetPlayerPosition();
  }

  // Actualiza la posición de la espada según la del jugador
  if (scene.player.anims.currentAnim.key === 'attack') {
    scene.sword.x = scene.player.flipX ? scene.player.x - 30 : scene.player.x + 30; // Ajustar según la dirección
    scene.sword.y = scene.player.y;
  }


  //verifica si el jugador tiene 0 de vida 
      if(scene.lives > 0){
      scene.input.keyboard.on('keydown-A', () => {
      scene.player.anims.play('attack', true);
      scene.attack();
    })
    }
    if (scene.lives <= 0) {
      scene.player.anims.play('damaged', true);
      scene.time.addEvent({
        delay: 500,
        callback: () => {
      scene.player.anims.pause();
      scene.enemy1.anims.pause();
      scene.physics.pause();
      },
        loop: false,
      })
    } 

//Movimientos de enemy2
  scene.enemy2.x += scene.direction * 8;
  if(scene.enemy2.x >= 2400){
    scene.direction = -1; 
    scene.enemy2.flipX = false;
  }else if(scene.enemy2.x <= 1500 ) {
    scene.direction = 1;
    scene.enemy2.flipX = true;
  }

}

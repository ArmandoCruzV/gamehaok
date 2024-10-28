export const animationsPlayer = (anims) => {

  anims.create({
    key: 'left',
    frames: anims.generateFrameNumbers('heroe', { start: 0, end: 3 }),
    frameRate: 15,
    repeat: -1
  });

  anims.create({
    key: 'turn',
    frames: [{ key: 'heroe', frame: 0 }],
    frameRate: 20
  });

  anims.create({
    key: 'right',
    frames: anims.generateFrameNumbers('heroe', { start: 0, end: 3 }),
    frameRate: 15,
    repeat: -1
  });

  anims.create({
    key: 'up',
    frames: anims.generateFrameNumbers('heroe', { start: 4, end: 4 }),
    frameRate: 15,
    repeat: -1
  });

  anims.create({
    key: 'down',
    frames: anims.generateFrameNumbers('heroe', { start: 5, end: 5 }),
    frameRate: 15,
    repeat: -1
  });
}


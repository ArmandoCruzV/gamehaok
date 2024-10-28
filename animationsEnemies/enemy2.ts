export const animationsEnemy2 = (anims) => {
  anims.create({
    key: 'enemy2',
    frames: anims.generateFrameNumbers('enemy2', { start: 0, end: 5 }),
    //velocidad
    frameRate: 12,
    //repetir indefinidamente
    repeat: -1,
  });
}


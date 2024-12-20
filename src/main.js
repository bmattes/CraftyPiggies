import Phaser from 'phaser';

const config = {
    type: Phaser.AUTO,
    width: 768,
    height: 1366,
    physics: {
        default: 'matter',
        matter: {
            gravity: { y: 1 },
        },
    },
    scene: {
        preload,
        create,
        update,
    },
};

const game = new Phaser.Game(config);

function preload() {
    console.log('Preloading...');
}

function create() {
    console.log('Creating game...');
    this.input.on('pointerdown', (pointer) => {
        console.log(`Pointer down at x: ${pointer.x}, y: ${pointer.y}`);
    });
}

function update() {}

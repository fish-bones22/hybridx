var config = {
    type: Phaser.AUTO,
    width: data.GLOBAL_WIDTH,
    height: data.GLOBAL_HEIGHT,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    },
    backgroundColor: "#551111"
};

var game = new Phaser.Game(config);

function preload ()
{

}

function create ()
{

}


function update ()
{

}
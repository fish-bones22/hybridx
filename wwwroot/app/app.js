let defaultScene =  new DefaultScene();
let sceneChooser =  new SceneChooser();

var config = {
    type: Phaser.AUTO,
    width: data.GLOBAL_WIDTH,
    height: data.GLOBAL_HEIGHT,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0  }
        }
    },
    scene: sceneChooser,
    backgroundColor: "#551111"
};

//globalGame.scene.add(defaultScene);
globalGame = new Phaser.Game(config);
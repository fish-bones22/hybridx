
function DefaultScene() {

    this.player;
    
    Phaser.Scene.call(this, 'DefaultScene');
    sceneContext = this;

    this.preload = function ()
    {
        this.player = new Player(assets.player);
        this.player.preload();
    }

    this.create = function ()
    {
        this.player.create();
        this.player.enterStage(400, 20);
    }


    this.update = function ()
    {

    }

}

DefaultScene.prototype = Object.create(Phaser.Scene.prototype);
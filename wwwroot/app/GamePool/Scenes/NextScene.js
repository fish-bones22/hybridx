
function NextScene() {

    this.player;
    
    Phaser.Scene.call(this, 'NextScene');
    sceneContext = this;

    this.preload = function ()
    {
        this.player = new Player();
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
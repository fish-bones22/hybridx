
function SceneChooser() {

    this.button1;
    this.button2;
    
    Phaser.Scene.call(this, 'SceneChooser');
    sceneContext = this;

    this.preload = function ()
    {
        this.button1 = new Button();
        this.button2 = new Button();
        this.button1.preload();
        this.button2.preload();
    }

    this.create = function ()
    {
        this.button1.create();
        this.button1.enterStage(400, 20);
        this.button2.create();
        this.button2.enterStage(400, 20);
    }


    this.update = function ()
    {

    }

}

DefaultScene.prototype = Object.create(Phaser.Scene.prototype);
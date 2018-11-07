
function SceneChooser() {

    this.button1;
    this.button2;
    
    Phaser.Scene.call(this, 'SceneChooser');
    sceneContext = this;

    this.preload = function ()
    {
        this.button1 = new Button(assets.btnScene1);
        this.button2 = new Button(assets.btnScene2);
        this.button1.preload();
        this.button2.preload();
    }

    this.create = function ()
    {
        this.button1.create();
        this.button1.enterStage(300, 200);
        this.button2.create();
        this.button2.enterStage(500, 200);
    }


    this.update = function ()
    {

    }

}

SceneChooser.prototype = Object.create(Phaser.Scene.prototype);
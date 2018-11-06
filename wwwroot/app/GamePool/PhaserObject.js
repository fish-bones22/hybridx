function PhaserObject() {

    this.asset = {};

    this.preload = function () 
    {
        sceneContext.load.spritesheet(
            this.asset.key, 
            this.asset.path,
            { frameWidth: this.asset.width, frameHeight: this.asset.height }
        );
    }
    
    this.create = function ()
    {
        // Iterate animations
        for (let i = 0; i < this.asset.anim.length; i++) {
            
            sceneContext.anims.create({
                key: this.asset.anim[i].key,
                frames: sceneContext.anims.generateFrameNumbers(this.asset.key, { start: this.asset.anim[i].start, end: this.asset.anim[i].end }),
                frameRate: this.asset.anim[i].frameRate,
                repeat: this.asset.anim[i].repeat
            });

        }
    }
    
    
    this.update = function ()
    {
    
    }

    this.enterStage = function (x, y) 
    {
        this.phaserObject = sceneContext.physics.add.sprite(x, y, this.asset.key);
        this.phaserObject.anims.play(this.asset.anim[1].key);
    }

}
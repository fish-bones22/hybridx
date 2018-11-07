function PhaserObject(asset) {

    this.asset = asset;

}


PhaserObject.prototype.asset = this.asset;


PhaserObject.prototype.preload = function () 
{
    console.log("parent preload");
    sceneContext.load.spritesheet(
        this.asset.key, 
        this.asset.path,
        { frameWidth: this.asset.width, frameHeight: this.asset.height }
    );
}


PhaserObject.prototype.create = function ()
{
    console.log("parent create");
    console.log(this);
    
    // Iterate animations
    for (let i = 0; i < PhaserObject.prototype.asset.anim.length; i++) {

        PhaserObject.prototype.asset.anim[i].key = this.asset.key + this.asset.anim[i].key;

        sceneContext.anims.create({
            key: this.asset.anim[i].key,
            frames: sceneContext.anims.generateFrameNumbers(this.asset.key, { start: this.asset.anim[i].start, end: this.asset.anim[i].end }),
            frameRate: this.asset.anim[i].frameRate,
            repeat: this.asset.anim[i].repeat
        });

    }
}


PhaserObject.prototype.update = function ()
{
    console.log("parent update");
}


PhaserObject.prototype.enterStage = function (x, y) 
{
    this.phaserObject = sceneContext.physics.add.sprite(x, y, this.asset.key);
    this.phaserObject.anims.play(this.asset.anim[0].key);
}
function Player() {
    
    PhaserObject.call(this);
    this.asset = assets.player;

}

Player.prototype = Object.create(PhaserObject.prototype);

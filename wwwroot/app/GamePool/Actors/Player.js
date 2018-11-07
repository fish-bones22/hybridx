function Player(asset) {
    
    PhaserObject.call(this, asset);

}

Player.prototype = Object.create(PhaserObject.prototype);

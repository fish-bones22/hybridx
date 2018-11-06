function Button() {
    
    PhaserObject.call(this);
    this.asset = assets.button;

}

Button.prototype = Object.create(PhaserObject.prototype);

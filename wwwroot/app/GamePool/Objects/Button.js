function Button(asset) {
    
    PhaserObject.call(this, asset);

    this.hovered = false;

    this.create = function() {

        PhaserObject.prototype.create(this);

        this.phaserObject.setInteractive()
        .on("pointerover", () => this.hovered = true)
        .on('pointerout', () => this.hovered = false);

    }

    this.update = function() {

        PhaserObject.prototype.update(this);

        if (this.hovered) {
            this.phaserObject.anim.play(asset.key + "hover");
        }
        else {
            this.phaserObject.anim.play(asset.key + "default");
        }
        
    }

}

Button.prototype = Object.create(PhaserObject.prototype);

function Player() {

    preload = function () {
        this.load.spritesheet(
            assets.player.key, 
            assets.player.path,
            { frameWidth: assets.player.width, frameHeight: assets.player.height }
            );
    }

}
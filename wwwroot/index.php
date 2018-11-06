<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="/favicon.ico">
    <title>Hybrid X</title>
    <script src="/phaser/phaser.min.js"></script>
    <script src="/jquery/jquery.min.js"></script>
</head>
<body> 
    <script>
        var data;
        var assets;
        var globalGame;
        var sceneContext;

        $.ajax({ 
            url: "/app/config.json", 
            dataType: 'json', 
            data: data, 
            async: false, 
            success: function(json){ 
                data = json;
            } 
        });
        $.ajax({ 
            url: "/app/assets.json", 
            dataType: 'json', 
            data: data, 
            async: false, 
            success: function(json){ 
                assets = json;
            } 
        });

    </script>
    <script src="/app/GamePool/PhaserObject.js"></script>
    <script src="/app/GamePool/Actors/Player.js"></script>
    <script src="/app/GamePool/Actors/Button.js"></script>
    <script src="/app/GamePool/Scenes/SceneChooser.js"></script>
    <script src="/app/GamePool/Scenes/DefaultScene.js"></script>

    <script src="/app/utilities.js"></script>
    

    <script src="/app/app.js"></script>
</body>
</html>
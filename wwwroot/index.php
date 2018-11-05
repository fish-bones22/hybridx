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
        var data = $.getJSON("/app/config.json");
        var assets = $.getJSON("/app/assets.json");
    </script>
    <script src="/app/utilities.js"></script>
    <script src="/app/app.js"></script>
</body>
</html>
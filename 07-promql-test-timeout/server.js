var pause = require('./pause');

router.get('/items', function (req, res) {
    var items = [];

    pause(2000)
        .then(function () {
            res.send(items)
        });

});
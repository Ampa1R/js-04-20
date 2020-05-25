const fs = require('fs');

fs.readFile('./data.json', (err, data) => {
    if (err) {
        console.log('[ERROR]', err);
        return;
    }

    const object = JSON.parse(data);
    object.second = 2;
    fs.writeFile('./data.json', JSON.stringify(object), (err) => {
        if (err) {
            console.log('[ERROR]', err);
            return;
        }

        //
    })
});

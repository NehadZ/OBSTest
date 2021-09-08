const OBSWebSocket = require('obs-websocket-js');
const obs = new OBSWebSocket();
obs.connect({
        address: 'localhost:4444',
    })
    .then(() => {
        console.log(`Success! We're connected & authenticated.`);

     return obs.send('StartRecording');

        
    })
    .catch(err => { // Promise convention dicates you have a catch on every chain.
        console.log(err);
    });



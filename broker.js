var mosca = require('mosca');
const settings = '1883';
var broker = new mosca.Server(settings);

broker.on('ready', () => {
  console.log('Broker is running');
});

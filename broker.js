var mosca = require('mosca');
const settings = '1883';
var broker = new mosca.Server(settings);

var mysql = require('mysql')
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mqttJS'
})

broker.on('ready', () => {
  console.log('Broker is running');
});

db.connect(() => {
  console.log('Database connected!')
})


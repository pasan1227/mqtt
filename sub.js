var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://mqtt.fluux.io');

var topic = 'vha/bed_coordinates';
var topic1 = 'vha/privacy_timeout';
var topic2 = 'vha/automatic_detection';

client.on('connect', () => {
  client.subscribe((topic = 'vha/bed_coordinates'));
  client.subscribe((topic1 = 'vha/privacy_timeout'));
  client.subscribe((topic2 = 'vha/automatic_detection'));
});

client.on('message', (topic, message) => {
  console.log(topic, ' : ', message.toString());

  // bed_coordinates = bed_coordinates.toString();
  // console.log('Bed coordinates:', bed_coordinates);

  // privacy_timeout = privacy_timeout.toString();
  // console.log('Privacy timeout:', privacy_timeout);

  // automatic_detection = automatic_detection.toString();
  // console.log('Automatic detection:', automatic_detection);

});

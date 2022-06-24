var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://mqtt.fluux.io');

var topic = 'vha/bed_coordinates';
var topic1 = 'vha/bed_coordinate_timeout';
var topic2 = 'vha/automatic_detection';
var topic3 = 'vha/patient_gestures';
var topic4 = 'vha/falling_alerts';
var topic5 = 'vha/privacy_button_timeout';


client.on('connect', () => {
  client.subscribe((topic = 'vha/bed_coordinates'));
  client.subscribe((topic1 = 'vha/bed_coordinate_timeout'));
  client.subscribe((topic2 = 'vha/automatic_detection'));
  client.subscribe((topic3 = 'vha/patient_status'));
  client.subscribe((topic4 = 'vha/falling_alerts'));
  client.subscribe((topic5 = 'vha/privacy_button_timeout'));
});

client.on('message', (topic, message) => {
  console.log(topic, ' : ', message.toString());
});

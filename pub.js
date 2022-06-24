var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://mqtt.fluux.io');

var topic = 'vha/bed_coordinates';
var topic1 = 'vha/bed_coordinate_timeout';
var topic2 = 'vha/automatic_detection';
var topic3 = 'vha/patient_status';
var topic4 = 'vha/falling_alerts';
var topic5 = 'vha/privacy_button_timeout';

var bed_coordinates = JSON.parse(
  '{"bed_coordinates": [10, 3, 4, 5, 2, 6, 5, 1]}'
);
var bed_coordinate_timeout = JSON.parse('{"bed_coordinate_timeout": "00:01"}');
var automatic_detection = JSON.parse('{"automatic_detection": "true"}');
var patient_status = JSON.parse('{"gesture": "standing"}');
var falling_alerts = JSON.parse('{"alert": "Falling"}');
var privacy_button_timeout = JSON.parse('{"privacy_button_timeout": "00:01"}');

client.on('connect', () => {
  setInterval(() => {
    client.publish(
      (topic = 'vha/bed_coordinates'),
      JSON.stringify(bed_coordinates)
    );

    client.publish(
      (topic1 = 'vha/bed_coordinate_timeout'),
      JSON.stringify(bed_coordinate_timeout)
    );

    client.publish(
      (topic2 = 'vha/automatic_detection'),
      JSON.stringify(automatic_detection)
    );

    client.publish(
      (topic3 = 'vha/patient_status'),
      JSON.stringify(patient_status)
    );

    client.publish(
      (topic4 = 'vha/falling_alerts'),
      JSON.stringify(falling_alerts)
    );

    client.publish(
      (topic5 = 'vha/privacy_button_timeout'),
      JSON.stringify(privacy_button_timeout)
    );

    console.log('Bed coordinates:', bed_coordinates);
    console.log('Bed coordinates timeout:', bed_coordinate_timeout);
    console.log('Automatic detection:', automatic_detection);
    console.log('Patient status:', patient_status);
    console.log('Falling alerts:', falling_alerts);
    console.log('Privacy Button Timeout:', privacy_button_timeout);
  }, 3000);
});

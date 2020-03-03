const fetch = require('node-fetch');
const FormData = require('form-data');

// Url to retrieve UTA Frontrunner schedule
const scheduleDataUrl = 'https://www.rideuta.com/api/route/indexgrid';

let data = new FormData();

data.append('date', new Date().toISOString());
data.append('direction', 'Southbound');
data.append('routeNumber', '750')
data.append('stops', 'Lehi Station');
// data.append('stops', 'Orem Central Station');

/** Retrieves the train schedule as JSON */
let getSchedule = () => {
  fetch(scheduleDataUrl, {
    method: 'POST',
    body: data
  }).then(res => res.json()).then(({stops}) => {
    console.log(stops);
  }).catch(err => console.log('Error:', err));
}

getSchedule();
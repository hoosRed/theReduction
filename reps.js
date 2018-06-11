const https = require('https');
var fs      = require('fs');



const options = {
  hostname: 'api.propublica.org',
  port: 443,
  path: '/congress/v1/115/house/members.json',
  method: 'GET',
  headers: {'X-API-Key': 'XmoaaoLdaemtHoLx3riYOPGY00bbLojWq46fLi4A'}
};
//res is a nodejs Event Emitter, you can pipe it directly into the destination
const req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
console.log('headers:', res.headers);
res.pipe(fs.createWriteStream('reps.json'));
});
req.on('error', (e) => {
  console.error(e);
});
req.end();


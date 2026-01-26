const https = require('https');
const querystring = require('querystring');

const url = 'https://script.google.com/macros/s/AKfycby1G8M8tI1fYuGb4Ly05Eo8WH8k0DZx9DAhWc8Mgn8D-UndeijlYoaKKx33ALGgWef-uA/exec';
const payload = {
  name: 'TestUser',
  mobile: '9999999999',
  email: 'test@example.com',
  dob: '',
  father: '',
  mother: '',
  aadhaar: '',
  address: 'Test address',
  reference: 'Script test',
  timestamp: new Date().toISOString()
};

const data = querystring.stringify(payload);
const u = new URL(url);

const options = {
  method: 'POST',
  hostname: u.hostname,
  path: u.pathname + u.search,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(data)
  }
};

const req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log('response body:\n', body.slice(0, 2000));
  });
});

req.on('error', (e) => {
  console.error('request error', e);
});

req.write(data);
req.end();

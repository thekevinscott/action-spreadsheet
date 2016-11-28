/*
 * Sets up the proxy server for an external API.
 */
import fetch from 'isomorphic-fetch';

import {
  API,
} from 'config';

/*
function sendResponse(res, response) {
  res.status(200);
  res.json(response);
}

function sendError(res, err) {
  console.error('Error from Proxy fetch', err);
  res.status(500);
  res.json({ error: 'Invalid data' });
}

const getBody = body => {
  if (body) {
    return {
      body: JSON.stringify(body),
    };
  }

  return null;
};
*/

export default (app) => {
  // Proxy to API server
  app.use('/api', (req, res) => {
    const url = `${API}${req.url}`;
    console.log('prepare to proxy', url);
    fetch(url).then(response => response.json()).then(response => {
      res.json(response);
    });

    /*
    proxy.on('proxyReq', (proxyReq) => {
      console.log('set the proxy req header');
      //proxyReq.setHeader('cookie', 'sessionid=' + cookieSnippedValue);
    });
    */
  });
};

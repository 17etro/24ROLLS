const express = require('express');
const app = express();
const port = process.env.PORT || 3006;
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const backendUrl = 'https://backend.24rolls.com.ua';

app.use(async (req, res, next) => {
    try {
        const seo = await axios.get(backendUrl + '/seo/');
        const mainSeo = seo.data.message.filter(el => el.name === 'Menu')[0];
        req.mainSeo = mainSeo;
        next();
    }
    catch (err) {
        throw new Error('seo has broken');
    }
}); 

app.get(['/', '/zp', '/dp', '/kh'], function(req, res) {
    console.log('Home page visited!');
    const filePath = path.resolve(__dirname, 'index.html');
    const seoObj = req.mainSeo;
  
    // read in the index.html file
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      
      // replace the special strings with server generated strings
      data = data.replace(/\$DESCRIPTION/g, seoObj.description);
      data = data.replace(/\$KEYWORDS/g, seoObj.keywords);
      data = data.replace(/\$OG_TITLE/g, seoObj.title);
      data = data.replace(/\$OG_DESCRIPTION/g, seoObj.description);
      result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + seoObj.image);
      res.send(result);
    });
});

app.use(express.static(path.resolve(__dirname, '.')));

app.get('*', function(request, response) {
    const filePath = path.resolve(__dirname, 'index.html');
    response.sendFile(filePath);
  });

app.listen(port, () => console.log(`Listening on port ${port}`));
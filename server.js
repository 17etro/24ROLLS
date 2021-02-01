const express = require('express');
const port = process.env.PORT || 3006;
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const backendUrl = 'https://backend.24rolls.com.ua';

const app = express();

app.use(async (req, res, next) => {
    try {
        const seo = await axios.get(backendUrl + '/seo/');
        const mainSeo = seo.data.message.filter(el => el.name === 'Menu')[0];
        const deliverySeo = seo.data.message.filter(el => el.name === 'Delivery')[0];
        const contactsSeo = seo.data.message.filter(el => el.name === 'Contacts')[0];
        const blogSeo = seo.data.message.filter(el => el.name === 'Blog')[0];
        const sharesSeo = seo.data.message.filter(el => el.name === 'Actions')[0];
        req.mainSeo = mainSeo;
        req.deliverySeo = deliverySeo;
        req.contactsSeo = contactsSeo;
        req.blogSeo = blogSeo;
        req.sharesSeo = sharesSeo;
        next();
    }
    catch (err) {
        throw new Error('seo has broken');
    }
}); 

//menu
app.get(['/', '/zp', '/dp', '/kh'], function(req, res) {
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

//delivery
app.get(['/zp/delivery', '/dp/delivery', '/kh/delivery'], function(req, res) {
  const filePath = path.resolve(__dirname, 'index.html');
  const seoObj = req.deliverySeo;

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

//blog
app.get(['/zp/posts', '/dp/posts', '/kh/posts'], function(req, res) {
  const filePath = path.resolve(__dirname, 'index.html');
  const seoObj = req.blogSeo;

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

//shares
app.get(['/zp/shares', '/dp/shares', '/kh/shares'], function(req, res) {
  const filePath = path.resolve(__dirname, 'index.html');
  const seoObj = req.sharesSeo;

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

//shares
app.get(['/zp/shares', '/dp/shares', '/kh/shares'], function(req, res) {
  const filePath = path.resolve(__dirname, 'index.html');
  const seoObj = req.sharesSeo;

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

//contacts
app.get(['/zp/shares', '/dp/shares', '/kh/shares'], function(req, res) {
  const filePath = path.resolve(__dirname, 'index.html');
  const seoObj = req.contactsSeo;

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
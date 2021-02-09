const express = require('express');
const port = process.env.PORT || 3006;
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const backendUrl = 'https://backend.24rolls.com.ua';

const app = express();

app.use((req, res, next) => {
        Promise.all([
          axios.get(backendUrl + '/seo/'),
          axios.get(backendUrl + '/products/'),

        ]).then(values => {
            const products = values[1].data.message;
            const seo = values[0].data.message;
            const mainSeo = seo.filter(el => el.name === 'Menu')[0];
            const deliverySeo = seo.filter(el => el.name === 'Delivery')[0];
            const contactsSeo = seo.filter(el => el.name === 'Contacts')[0];
            const blogSeo = seo.filter(el => el.name === 'Blog')[0];
            const sharesSeo = seo.filter(el => el.name === 'Actions')[0];

            //seo
            req.mainSeo = mainSeo;
            req.deliverySeo = deliverySeo;
            req.contactsSeo = contactsSeo;
            req.blogSeo = blogSeo;
            req.sharesSeo = sharesSeo;

            //products
            req.products = products;

            next();
        })
        .catch(err => {
          throw new Error('failed loading')
        });
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

//contacts
app.get(['/zp/about-us', '/dp/about-us', '/kh/about-us'], function(req, res) {
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

app.get(['/zp/:routeCat/:routeProd', '/dp/:routeCat/:routeProd', '/kh/:routeCat/:routeProd'], (req, res) => {
  const filePath = path.resolve(__dirname, 'index.html');
  const products = req.products;

  const routeCat = req.params.routeCat;
  const routeProd = req.params.routeProd;
  if (routeCat === 'order') {
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      res.send(data);
    });
  } else {
    const product = products.filter(el => {
      return el.route === routeProd && el.categoryId.route === routeCat
    })[0];
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      
      // replace the special strings with server generated strings
      data = data.replace(/\$DESCRIPTION/g, product.seo_description);
      data = data.replace(/\$KEYWORDS/g, product.seo_keywords);
      data = data.replace(/\$OG_TITLE/g, product.seo_title);
      data = data.replace(/\$OG_DESCRIPTION/g, product.seo_description);
      result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + product.image);
      res.send(result);
    });
  }
});

app.use(express.static(path.resolve(__dirname, '.')));

app.get('*', function(request, response) {
    const filePath = path.resolve(__dirname, 'index.html');
    response.sendFile(filePath);
  });

app.listen(port, () => console.log(`Listening on port ${port}`));
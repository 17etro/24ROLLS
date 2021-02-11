const express = require('express');
const port = process.env.PORT || 3006;
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const backendUrl = 'https://backend.24rolls.com.ua';

const app = express();

app.use(express.static(path.resolve(__dirname, '.')));

app.use((req, res, next) => {
        Promise.all([

          axios.get(backendUrl + '/seo/'),
          axios.get(backendUrl + '/products/'),
          axios.get(backendUrl + '/products/filters'),
          axios.get(backendUrl + '/products/categories'),
          axios.get(backendUrl + /posts/)

        ]).then(values => {
            const products = values[1].data.message;
            const seo = values[0].data.message;
            const filters = values[2].data.fils;
            const categories = values[3].data.cats;
            const posts = values[4].data;

            const mainSeo = seo.filter(el => el.name === 'Menu')[0];
            const khSeo = seo.filter(el => el.name === 'Kh')[0];
            const zpSeo = seo.filter(el => el.name === 'Zp')[0];
            const dpSeo = seo.filter(el => el.name === 'Dp')[0];
            const deliverySeo = seo.filter(el => el.name === 'Delivery')[0];
            const contactsSeo = seo.filter(el => el.name === 'Contacts')[0];
            const blogSeo = seo.filter(el => el.name === 'Blog')[0];
            const sharesSeo = seo.filter(el => el.name === 'Actions')[0];

            //seo
            req.mainSeo = mainSeo;
            req.khSeo = khSeo;
            req.zpSeo = zpSeo;
            req.dpSeo = dpSeo;
            req.deliverySeo = deliverySeo;
            req.contactsSeo = contactsSeo;
            req.blogSeo = blogSeo;
            req.sharesSeo = sharesSeo;

            //products
            req.products = products;
            req.categories = categories;
            req.filters = filters;
            req.posts = posts;

            next();
        })
        .catch(err => {
          throw new Error('failed loading')
        });
}); 
// , '/zp', '/dp', '/kh'
//menu
app.get('/', function(req, res) {
    const filePath = path.resolve(__dirname, 'index.html');
    const seoObj = req.mainSeo;
  
    // read in the index.html file
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        console.log(err);
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
//menu
app.get('/kh', function(req, res) {
  const filePath = path.resolve(__dirname, 'index.html');
  const seoObj = req.khSeo;

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      console.log(err);
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
app.get('/dp', function(req, res) {
  const filePath = path.resolve(__dirname, 'index.html');
  const seoObj = req.dpSeo;

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      console.log(err);
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
app.get('/zp', function(req, res) {
  const filePath = path.resolve(__dirname, 'index.html');
  const seoObj = req.zpSeo;

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      console.log(err);
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
      console.log(err);
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
      console.log(err);
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
      console.log(err);
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
      console.log(err);
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

//products
app.get(['/zp/:routeCat/:routeProd', '/dp/:routeCat/:routeProd', '/kh/:routeCat/:routeProd'], 
(req, res, next) => {
  const filePath = path.resolve(__dirname, 'index.html');
  const products = req.products;

  const routeCat = req.params.routeCat;
  const routeProd = req.params.routeProd;

  const product = products.filter(el => {
    return el.route === routeProd && el.categoryId.route === routeCat
  })[0];
  console.log(product);

  if (!product) {
    next();
  } else {
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

//filters
app.get(['/zp/:routeFil', '/dp/:routeFil', '/kh/:routeFil'], (req, res, next) => {
  const filePath = path.resolve(__dirname, 'index.html');
  const filters = req.filters;
  const routeCat = req.params.routeFil;

  const filter = filters.filter(el => el.route === routeCat)[0];
  console.log(filter);

  if (!filter) {
    next();
  } else {
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        console.log(err);
      }
      
      // replace the special strings with server generated strings
      data = data.replace(/\$DESCRIPTION/g, filter.seo_description);
      data = data.replace(/\$KEYWORDS/g, filter.seo_keywords);
      data = data.replace(/\$OG_TITLE/g, filter.seo_title);
      data = data.replace(/\$OG_DESCRIPTION/g, filter.seo_description);
      result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + filter.image);
      res.send(result);
    });
  }
});

//categories
app.get(['/zp/:routeCat', '/dp/:routeCat', '/kh/:routeCat'], (req, res, next) => {
  const filePath = path.resolve(__dirname, 'index.html');
  const categories = req.categories;
  const routeCat = req.params.routeCat;

  const category = categories.filter(el => el.route === routeCat)[0];
  console.log(category);

  if (!category) {
    next();
  } else {
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        console.log(err);
      }
      
      // replace the special strings with server generated strings
      data = data.replace(/\$DESCRIPTION/g, category.seo_description);
      data = data.replace(/\$KEYWORDS/g, category.seo_keywords);
      data = data.replace(/\$OG_TITLE/g, category.seo_title);
      data = data.replace(/\$OG_DESCRIPTION/g, category.seo_description);
      result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + category.image);
      res.send(result);
    });
  }
});

//posts
app.get(['/zp/posts/:postRoute', '/dp/posts/:postRoute', '/kh/posts/:postRoute'], (req, res, next) => {
  const filePath = path.resolve(__dirname, 'index.html');
  const posts = req.posts;
  const postRoute = req.params.postRoute;

  const post = posts.filter(el => el.route === postRoute)[0];
  console.log(post)

  if (!post) {
    next();
  } else {
    fs.readFile(filePath, 'utf8', function (err,data) {
      if (err) {
        console.log(err);
      }
      
      // replace the special strings with server generated strings
      data = data.replace(/\$DESCRIPTION/g, post.seo_description);
      data = data.replace(/\$KEYWORDS/g, post.seo_keywords);
      data = data.replace(/\$OG_TITLE/g, post.seo_title);
      data = data.replace(/\$OG_DESCRIPTION/g, post.seo_description);
      result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + post.image);
      res.send(result);
    });
  }
});

app.get('*', function(req, res) {

  const mainSeo = req.mainSeo;
  console.log(mainSeo);

  const filePath = path.resolve(__dirname, 'index.html');
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      console.log(err);
    }
    
    // replace the special strings with server generated strings
    data = data.replace(/\$DESCRIPTION/g, mainSeo.seo_description);
    data = data.replace(/\$KEYWORDS/g, mainSeo.seo_keywords);
    data = data.replace(/\$OG_TITLE/g, mainSeo.seo_title);
    data = data.replace(/\$OG_DESCRIPTION/g, mainSeo.seo_description);
    result = data.replace(/\$OG_IMAGE/g, backendUrl + '/' + mainSeo.image);
    res.send(result);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
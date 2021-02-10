const  axios = require("axios");
const fs = require("fs");
const path = require("path");

const pathXML = path.join(path.dirname(require.main.filename), '..', "sitemap.xml");
console.log(pathXML);
const backendUrl = "https://backend.24rolls.com.ua";

let info = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
<url> <loc>https://24rolls.zp.ua/</loc> </url>
<url> <loc>https://24rolls.zp.ua/</loc> </url>
<url> <loc>https://24rolls.zp.ua/zp/ </loc> </url>
<url> <loc>https://24rolls.zp.ua/dp/ </loc> </url>
<url> <loc>https://24rolls.zp.ua/kh/ </loc> </url>
<url> <loc>https://24rolls.zp.ua/zp/shares/ </loc> </url>
<url> <loc>https://24rolls.zp.ua/dp/shares/ </loc> </url>
<url> <loc>https://24rolls.zp.ua/kh/shares/ </loc> </url>
<url> <loc>https://24rolls.zp.ua/zp/delivery/</loc> </url>
<url> <loc>https://24rolls.zp.ua/dp/delivery/</loc> </url>
<url> <loc>https://24rolls.zp.ua/kh/delivery/</loc> </url>
<url> <loc>https://24rolls.zp.ua/zp/about-us/</loc> </url>
<url> <loc>https://24rolls.zp.ua/dp/about-us/</loc> </url>
<url> <loc>https://24rolls.zp.ua/kh/about-us/</loc> </url>
<url> <loc>https://24rolls.zp.ua/zp/posts/</loc> </url>
<url> <loc>https://24rolls.zp.ua/dp/posts/</loc> </url>
<url> <loc>https://24rolls.zp.ua/kh/posts/</loc> </url>
<url> <loc>https://24rolls.zp.ua/zp/log-in/</loc> </url>
<url> <loc>https://24rolls.zp.ua/dp/log-in/</loc> </url>
<url> <loc>https://24rolls.zp.ua/kh/log-in/</loc> </url>
<url> <loc>https://24rolls.zp.ua/zp/favourite/</loc> </url>
<url> <loc>https://24rolls.zp.ua/dp/favourite/</loc> </url>
<url> <loc>https://24rolls.zp.ua/kh/favourite/</loc> </url>
`;

const blockedFilters = [
  "60129318205af05787df2f6f",
  "60129301205af05787df2f6e",
  "6012924b205af05787df2f6d",
];

const blockedCategories = ["5ff17a7f6158c22e503feaa1"];

const func = async () => {
  try {
    const categoriesRes = await axios.get(backendUrl + "/products/categories");
    const categories = categoriesRes.data.cats;

    const filtersRes = await axios.get(backendUrl + "/products/filters");
    const filters = filtersRes.data.fils;

    const postsRes = await axios.get(backendUrl + "/posts");
    const posts = postsRes.data;

    const allProductsRes = await axios.get(backendUrl + "/products/");
    const allProducts = allProductsRes.data.message;

    {
      filters.map((el) =>
        blockedFilters.includes(el._id)
          ? null
          : [
              (info =
                info +
                `<url> <loc> https://24rolls.zp.ua/zp/${el.route}/ </loc> </url> \n` +
                `<url> <loc> https://24rolls.zp.ua/kh/${el.route}/ </loc> </url> \n` +
                `<url> <loc> https://24rolls.zp.ua/dp/${el.route}/ </loc> </url> \n`),
            ]
      );
    }
    {
      categories.map((el) =>
        blockedCategories.includes(el._id)
          ? null
          : [
              (info =
                info +
                `<url> <loc> https://24rolls.zp.ua/zp/${el.route}/ </loc> </url> \n` +
                `<url> <loc> https://24rolls.zp.ua/kh/${el.route}/ </loc> </url> \n` +
                `<url> <loc> https://24rolls.zp.ua/dp/${el.route}/ </loc> </url> \n`),
            ]
      );
    }
    {
      posts.map((el) => [
        (info =
          info +
          `<url> <loc> https://24rolls.zp.ua/zp/${el.route}/ </loc> </url> \n` +
          `<url> <loc> https://24rolls.zp.ua/kh/${el.route}/ </loc> </url> \n` +
          `<url> <loc> https://24rolls.zp.ua/dp/${el.route}/ </loc> </url> \n`),
      ]);
    }
    {
      allProducts.map((el) => {
        if (el.categoryId.route === "presents") {
          return null;
        } else {
          el.shop.map((shop) => {
            if (shop.name === "Kh") {
              info =
                info +
                `<url> <loc> https://24rolls.zp.ua/kh/${el.categoryId.route}/${el.route}/ </loc> </url> \n`;
            } else if (shop.name === "Zp") {
              info =
                info +
                `<url> <loc> https://24rolls.zp.ua/zp/${el.categoryId.route}/${el.route}/ </loc> </url> \n`;
            } else {
              info =
                info +
                `<url> <loc> https://24rolls.zp.ua/dp/${el.categoryId.route}/${el.route}/ </loc> </url> \n`;
            }
          });
        }
      });
    }
    console.log(info)
    fs.writeFile(pathXML, info, () => {
        console.log("success");
      return;
    });
  } catch (err) {
    console.log("something went wrong");
  }
};

func()
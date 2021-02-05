require("babel-register")({
    presets: ["es2015", "react"]
});
  
const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;
  
async function generateSitemap() {

    const routes = await router();
    console.log(routes);
      return (
        new Sitemap(routes)
            .build("https://24rolls.zp.ua")
            .save("./sitemap.xml")
      );
}
  
generateSitemap();
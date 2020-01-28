const PercyScript = require("@percy/script");

PercyScript.run(async (page, percySnapshot) => {
    await page.goto("http://localhost:8080/");
    // ensure the page has loaded before capturing a snapshot
    await page.waitFor(1000);
    await percySnapshot("homepage");
});

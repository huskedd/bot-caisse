const puppeteer = require('puppeteer');
const data = require('./passwd18.json');
let user = data.username;
let passwd = data.passwd;
/*delay function*/

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 };

/*end delay function*/


(async () => {
  const browser = await puppeteer.launch({headless : true});
  console.log("browser launched")
  const page = await browser.newPage();
  await page.setViewport({width: 1366, height: 768});
  await page.goto('https://caisse.enregistreuse.fr/');
  let price1;
  // other actions...
  
  /*login to my account*/
  /*delay for accessing the page*/
  console.log("access to the page in :")
  for (i = 0; i < 4; i++){
      await page.waitForTimeout(1000);
      console.log("time : " + i);
  }

  /*end delay for accessing the page*/
  await page.waitForSelector('#PAccount');
  console.log("element selected");
  await page.click('#PAccount');
  await console.log("successfully on the login page !");
  await page.waitForTimeout(2000);
  await console.log("logging in...");
  await page.type('#user_connect_nom', user);
  await page.type('#user_connect_mdp', passwd);
  console.log("connection ...")
  await page.click('.btn-submit');
      await page.waitForTimeout(2000);
      await page.click('#Pcaisse_ferme');
      await console.log("redirecting to 'caisse'");
      await console.log("oppening caisse")
      await page.click(".btn-submit");
      await console.log("selector <<<.btn submit")
      await page.waitForTimeout(1000);
      await page.click("#Pcaisse_ferme");
      await console.log("selector<<#Pcaisse_ferme ");
      await console.log("checking prices...");
      await console.log("extracting prices");
      await page.waitForSelector('.blockSetup');
      const el = await page.$('.blockSetup');
      //screenshoting page
        await el.screenshot({path : 'paris18.jpg'})
        await console.log("screenshoted 📷")
	await browser.close();
	
  
})();
import { expect, test } from "@playwright/test";

/* This is a feature branch change */
  
test("Learn git actions", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.waitForTimeout(3000);
    
    await page.locator('//input[@id="username"]').fill("democsr2");

    await page.locator('//input[@id="password"]').fill("crmsfa");

    await page.locator('//input[@class="decorativeSubmit"]').click();

    await page.locator('//a[contains(text(),"CRM")]').click();


})





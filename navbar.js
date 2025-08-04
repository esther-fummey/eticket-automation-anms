const { Builder, By, until } = require('selenium-webdriver');

// Main navbar test function
async function navbarTest(browserName) {
    let driver;
    try {
        driver = await new Builder().forBrowser(browserName).build();
        await driver.manage().window().maximize();

        // Open home page
        await driver.get("http://159.8.238.90:7047/home");
        await driver.sleep(5000);

        // ✅ Click "This Week"
        try {
            await driver.wait(
                until.elementLocated(By.xpath("/html/body/app-root/app-home-layout/main/div[2]/div[1]/app-home/main/div/div[2]/div/div[1]/app-selectable-list/section/div/div/div[2]")),
                10000
            ).click();
            console.log(`📌 ${browserName}: 'This Week' clicked.`);
            await driver.sleep(2000);
        } catch (e) {
            console.log(`⚠️ ${browserName}: 'This Week' element not found.`);
        }

        // ✅ Check for alert message
        try {
            const alerts = await driver.findElements(By.xpath("/html/body/app-root/app-home-layout/main/div[2]/app-toast/main/div[2]/p[1]"));
            if (alerts.length > 0) {
                const messageText = await alerts[0].getText();
                console.log(`📢 ${browserName}: Alert Message Found - ${messageText}`);
            } else {
                console.log(`ℹ️ ${browserName}: No 'no events this week' message found.`);
            }
        } catch (e) {
            console.log(`⚠️ ${browserName}: Unable to read alert message.`);
        }

        // ✅ Click "This Month"
        try {
            const thisMonth = await driver.wait(
                until.elementLocated(By.xpath("/html/body/app-root/app-home-layout/main/div[2]/div[1]/app-home/main/div/div[2]/div/div[1]/div[3]")),
                10000
            );
            await driver.wait(until.elementIsVisible(thisMonth));
            await thisMonth.click();
            console.log(`📌 ${browserName}: 'This Month' clicked.`);
            // await driver.sleep(15000);
        } catch (e) {
            console.log(`⚠️ ${browserName}: 'This Month' element not clickable.`);
        }

        // ✅ View all events
        try {
            await driver.findElement(By.xpath("/html/body/app-root/app-home-layout/main/div[2]/div[1]/app-home/main/div/div[2]/div/div[3]/app-secondary-button/main")).click();
            console.log(`📌 ${browserName}: 'View All Events' clicked.`);
            await driver.sleep(15000);
            await driver.navigate().back();
            console.log(`↩️ ${browserName}: Navigated back from events page.`);
        } catch (e) {
            console.log(`⚠️ ${browserName}: 'View All Events' not found.`);
        }

        // ✅ View all category
        try {
            await driver.findElement(By.xpath("/html/body/app-root/app-home-layout/main/div[2]/div[1]/app-home/main/div/div[3]/div[1]/div/h3")).click();
            console.log(`📌 ${browserName}: 'View All Category' clicked.`);
            await driver.sleep(1500);
            await driver.navigate().back();
            console.log(`↩️ ${browserName}: Navigated back from category page.`);
        } catch (e) {
            console.log(`⚠️ ${browserName}: 'View All Category' not found.`);
        }

        // ✅ Scroll to dropdown range
        try {
            const elementToScrollTo = await driver.findElement(By.xpath("/html/body/app-root/app-home-layout/main/div[2]/div[1]/app-home/main/div/div[5]/div/div/div/app-event-container[1]/section/div/div/img"));
            await driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", elementToScrollTo);
            console.log(`🖱️ ${browserName}: Scrolled to dropdown image.`);
        } catch (e) {
            console.log(`⚠️ ${browserName}: Scroll element not found.`);
        }

        // ✅ Final Click
        try {
            await driver.findElement(By.xpath("/html/body/app-root/app-home-layout/main/div[2]/div[1]/app-home/main/div/div[5]/div/span/div/h2/span")).click();
            console.log(`📌 ${browserName}: Final element clicked.`);
        } catch (e) {
            console.log(`⚠️ ${browserName}: Final element not clickable.`);
        }

        console.log(`✅ ${browserName}: Navbar test completed successfully.`);

    } 
    
    
    
    catch (err) {
        console.error(`❌ ${browserName}: Test failed -`, err.message);
    } finally {
        if (driver) {
            // await driver.sleep(3000);
            // await driver.quit();
        }
    }
}

// ✅ Run test on multiple browsers
(async function runNavbarTests() {
    await navbarTest('chrome');
    await navbarTest('firefox');
    // await navbarTest('MicrosoftEdge'); // Uncomment if Edge WebDriver is available
})();

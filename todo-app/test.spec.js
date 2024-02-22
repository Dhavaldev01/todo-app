const { chromium } = require('playwright');


describe('Todo App', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await chromium.launch();
    });

    beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('http://localhost:5173'); 
    });

 
    afterAll(async () => {
        if (browser) {
            await browser.close();
        }
    });
    

    it('add new todo', async () => {
       
    });

    it(' delete todo', async () => {
       
    });

   
});








const assert = require('node:assert/strict');
const { chromium } = require(process.argv[2] || 'playwright');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    for (const reducedMotion of ['reduce', 'no-preference']) {
      const context = await browser.newContext({ reducedMotion });
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.goto(process.env.MOTION_TEST_URL || 'http://localhost:3000');
      const control = page.getByRole('button', { name: 'Enable animations' });
      await control.waitFor();
      if (reducedMotion === 'reduce') {
        assert.equal(await control.getAttribute('aria-pressed'), 'false');
        await control.click();
      }
      await page.waitForFunction(() => document.querySelector('[data-site-motion="full"]'));
      const layer = page.locator('[data-parallax="0.32"]');
      const before = await layer.evaluate(el => getComputedStyle(el).translate);
      await page.evaluate(() => window.scrollTo(0, 450));
      await page.waitForFunction(initial => {
        const el = document.querySelector('[data-parallax="0.32"]');
        return getComputedStyle(el).translate !== initial;
      }, before);
      const after = await layer.evaluate(el => getComputedStyle(el).translate);
      assert.notEqual(after, 'none');
      await page.reload();
      await page.waitForFunction(() => document.querySelector('[data-site-motion="full"]'));
      await page.getByRole('link', { name: 'About', exact: true }).first().click();
      await page.waitForURL('**/about');
      await page.waitForFunction(() => document.querySelector('[data-site-motion="full"]'));
      const parallax = page.locator('[class*="parallax"] > div').first();
      await parallax.waitFor();
      const transform = await parallax.evaluate(el => getComputedStyle(el).transform);
      await page.evaluate(() => window.scrollTo(0, 500));
      await page.waitForFunction(initial => {
        const el = document.querySelector('[class*="parallax"] > div');
        return getComputedStyle(el).transform !== initial;
      }, transform);
      await control.click();
      await page.waitForFunction(() => document.querySelector('[data-site-motion="reduced"]'));
      assert.equal(await parallax.evaluate(el => getComputedStyle(el).transform), 'none');
      assert.deepEqual(errors, []);
      console.log(JSON.stringify({ reducedMotion, before, after, reload: 'passed', navigation: 'passed', disable: 'passed', errors }));
      await context.close();
    }
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });

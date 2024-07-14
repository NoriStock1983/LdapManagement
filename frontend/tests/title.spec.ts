import { test, expect } from '@playwright/test';

test('初期ページのテスト',async({page},testinfo)=>{
  await page.goto('http://localhost:3000/');

  await expect(page).toHaveTitle('React App');
  await page.screenshot({ path: `screenshot/${testinfo.title}.png` });



});




import { test, expect } from '@playwright/test';

test('初期ページのテスト',async({page},testinfo)=>{
  await page.goto('http://localhost:3000/');

  await expect(page).toHaveTitle('React App');



});

test('表示画面チェック',async({page},testinfo)=>{
    await testinfo.step('画面表示チェック');
});


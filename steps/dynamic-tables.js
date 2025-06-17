
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given(/^the user is on "([^"]*)"$/, async function(url) {
  await this.dynamicTablePage.goto(url);
});

Then('the user should see the {string} heading', async function (query) {
    await expect(this.dynamicTablePage.inventoryHeading).toHaveText(query, { timeout: 10000 })
 
});

Then("the user should see the table with the {string} below", async function (headerText) {
  const headers = this.dynamicTablePage.tableHeaders;
  const count = await headers.count();
  let found = false;

  for (let i = 0; i < count; i++) {
    const text = await headers.nth(i).innerText();
    if (text.trim() === headerText) {
      found = true;
      break;
    }
  }

  expect(found).toBe(true);
});

Then('the user should see the table with the rows below:', async function (datatable) {
   const data = datatable.rawTable;

  for(let i = 0; i < data.length; i++) {
    const row = data[i]
    // Тепер перевіряємо значення в рядку
    const rowText = await this.dynamicTablePage.tableRows.nth(i).innerText();
    // Перевіряємо, чи співпадає текст у рядку таблиці
    expect(rowText).toContain(row[0]);
    expect(rowText).toContain(row[1]);
    expect(rowText).toContain(row[2]);
    expect(rowText).toContain(row[3]);
  }
});

Then('the user should see the {string} button is enabled', async function (query) {
  const button = this.page.getByRole('button', { name: query });
  await expect(button).toBeEnabled();
});


// Then('the user should see the {string} button is enabled', async function (query) {
//   if(query === 'X'){
//       await expect(this.page.dynamicTablePage.closeButton).toBeEnabled();
//   } else {
//   await expect( this.page.getByRole('button', { name: query })).toBeEnabled();
//   }
// });

Then('the user should see the {string} text displayed', async function (query) {
   await expect(this.dynamicTablePage.total).toHaveText(query, { timeout: 5000 })
})



When('the user clicks on the ADD PRODUCT button', async function () {
  await this.dynamicTablePage.clickOnAddButton()

})

Then('the user should see the {string} modal with its heading', async function (query) {
  await expect(this.page.getByRole('heading', { name: query })).toBeVisible();
});

// Then('the user should see the "X" button is enabled', async function () {
//   await expect(this.dynamicTablePage.closeButton).toBeEnabled();
// })

Then('the user should see the {string} label', async function (query) {
  await expect(this.page.getByText(query)).toBeVisible();
});

Then('the user should see the {string} input box is enabled', async function (labelText) {
let locator;

  if (labelText === 'Quantity') locator = this.dynamicTablePage.quantity;
  else if (labelText === 'Product') locator = this.dynamicTablePage.product
  else if (labelText === 'Price') locator = this.dynamicTablePage.price
  else throw new Error(`Unknown input box label: ${labelText}`);

  await expect(locator).toBeEnabled();

});

When('the user clicks on the {string} button', async function (button) {
  if (button.toLowerCase() === 'close') {
    await this.dynamicTablePage.closeButton.click();
  } else {
    await this.page.getByRole('button', { name: button }).click();
  }
})
Then('the user should not see the {string} modal', async function (query) {
  await expect(this.page.getByRole('heading', { name: query })).not.toBeVisible();
});

Then('the user enters the quantity as {string}', async function (quantity) {
  await this.dynamicTablePage.quantity.fill(quantity);
});

Then('the user enters the product as {string}', async function (product) {
  await this.dynamicTablePage.product.fill(product);
});

Then('the user enters the price as {string}', async function (price) {
  await this.dynamicTablePage.price.fill(price, { timeout: 50000 });
  
});



Then('the user should see the table with the new row below:', async function (datatable) {
   const data = datatable.rawTable;

  for(let i = 0; i < data.length; i++) {
    const row = data[i]
    // Тепер перевіряємо значення в рядку
    const rowText = await this.dynamicTablePage.tableRows.last().innerText();
    // Перевіряємо, чи співпадає текст у рядку таблиці
    expect(rowText).toContain(row[0]);
  }
})



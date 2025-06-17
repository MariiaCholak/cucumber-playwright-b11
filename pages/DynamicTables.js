import { BasePage } from "./BasePage.js";

export class DynamicTablePage extends BasePage {
    constructor(page){
    super(page)



this.inventoryHeading = this.page.locator('h1[class="is-size-3"]')
this.tableHeaders = this.page.locator('table th')
this.tableRows = this.page.locator('tbody tr')
this.total = this.page.locator('#total_amount')
this.addButton = this.page.locator('#add_product_btn')
this.addNewProductModal = this.page.locator('.modal-card')
this.closeButton = this.page.locator('button.delete[aria-label="close"]')
this.quantity = this.page.locator('#quantity')
this.product = this.page.locator('#product')
this.price = this.page.locator('#price')
    }
  async goto(url) {
    await this.page.goto(url);
  }

  async clickOnAddButton(){
    await this.addButton.click()
  }
}
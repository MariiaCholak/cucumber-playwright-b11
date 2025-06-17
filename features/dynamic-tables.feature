@DynamicTable @Regression
Feature: Dynamic-Tables verification 

Background: 
  Given the user is on "https://techglobal-training.com/frontend/dynamic-tables"


Scenario Outline: Validation of the "<headers>" content of the inventory table
  Then the user should see the "Inventory" heading
  And the user should see the table with the "<headers>" below
  And the user should see the table with the rows below:
    | 1 | iPhone  | 1,000 | 1,000 |
    | 3 | Airpods | 100   | 300   |
    | 2 | iPad    | 500   | 1,000 |
  And the user should see the "ADD PRODUCT" button is enabled
  And the user should see the "Total = $2,300" text displayed

Examples:
  | headers   |
  | Quantity  |
  | Product   |
  | Price $   |
  | Total $   |


  Scenario:'Test Case 02 - Validate the Add New Product modal'
  
When the user clicks on the ADD PRODUCT button
Then the user should see the "Add New Product" modal with its heading
And the user should see the "close" button is enabled
And the user should see the "Please select the quantity" label
And the user should see the "Quantity" input box is enabled
And the user should see the "Please enter the name of the product" label
And the user should see the "Product" input box is enabled
And the user should see the "Please enter the price of the product" label
And the user should see the "Price" input box is enabled
And the user should see the "SUBMIT" button is enabled


Scenario: Test Case 03 - Validate the Add New Product modal X button

When the user clicks on the ADD PRODUCT button
Then the user should see the "Add New Product" modal with its heading
When the user clicks on the "close" button
Then the user should not see the "Add New Product" modal


Scenario Outline: Test Case 04 - Validate the new product added
When the user clicks on the ADD PRODUCT button
  And the user enters the quantity as "<quantity>"
  And the user enters the product as "<product>"
  And the user enters the price as "<price>"
  And the user clicks on the "SUBMIT" button
  Then the user should see the table with the new row below:
    | <quantity> | <product> | <price> |
  And the user should see the "Total = $2,500" text displayed

Examples:
  | quantity | product | price |  total |
    | 2        | Mouse   | 100  | 200   |
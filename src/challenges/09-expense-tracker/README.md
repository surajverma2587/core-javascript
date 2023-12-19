# Expense Tracker

## User Story

> As a user I want to use my bank statements to track my monthly expenses so that I can view the total spend and transactions within each category along with the total number of transactions and the grand total of all expenses.

## Mock Bank Statements

```javascript
[
  {
    id: "4741b53d-59db-42ec-a051-c2157c1d6603",
    amount: 45.99,
    vendor: "Tesco Supermarket",
    category: "Groceries",
  },
  {
    id: "38dbb729-988a-44e4-97ae-cefcf72ba779",
    amount: 12.99,
    vendor: "Uber",
    category: "Transport",
  },
  {
    id: "dea7aa10-704e-4718-8bfe-85af7a9b6921",
    amount: 23.99,
    vendor: "M&S Supermarket",
    category: "Groceries",
  },
  {
    id: "486e6915-99fb-4a4e-8c6e-2665667c73a2",
    amount: 6.99,
    vendor: "Uber",
    category: "Transport",
  },
  {
    id: "41623100-b877-47ad-b694-2dce21181e51",
    amount: 125,
    vendor: "Tesco Supermarket",
    category: "Groceries",
  },
  {
    id: "92df1bf2-324c-4601-b175-0dc2c50c7813",
    amount: 27.99,
    vendor: "BT Broadband",
    category: "Utility",
  },
  {
    id: "0352188d-5a2f-4c42-afb0-12f2655078af",
    amount: 65,
    vendor: "Next",
    category: "Retail",
  },
  {
    id: "c50a7e17-3032-48fd-878c-2232dd23eb78",
    amount: 13.99,
    vendor: "Metro",
    category: "Transport",
  },
  {
    id: "bf67ec01-5fe0-402b-9d1d-1e43bb6ddd60",
    amount: 89.99,
    vendor: "Tesco Supermarket",
    category: "Groceries",
  },
  {
    id: "ddcaae90-2d9d-4a30-a85e-945e67ac8323",
    amount: 201.78,
    vendor: "British Gas",
    category: "Utility",
  },
  {
    id: "b188e736-bb4a-49d1-a669-276e6f7d8e38",
    amount: 6.99,
    vendor: "Metro",
    category: "Transport",
  },
  {
    id: "155697ab-46d8-40ed-a507-27ca5aa148fa",
    amount: 389.99,
    vendor: "Pandora",
    category: "Retail",
  },
  {
    id: "5be5ce4a-7f79-4c3a-9b1b-b8687a41023b",
    amount: 36.48,
    vendor: "Asda Supermarket",
    category: "Groceries",
  },
  {
    id: "6a49d91f-b29d-4457-be88-59018bb5f5e7",
    amount: 45.38,
    vendor: "United Utilities",
    category: "Utility",
  },
  {
    id: "834dd259-3fed-4cba-ba58-b46b925348d3",
    amount: 3.99,
    vendor: "Uber",
    category: "Transport",
  },
  {
    id: "618e7a09-914a-41ca-a83f-5f0fb23524ac",
    amount: 122.34,
    vendor: "River Island",
    category: "Retail",
  },
];
```

## Acceptance Criteria

- The generated expense report should contain a breakdown of each category
- Each category in the report should contain the transactions belonging to that particular category, the total number of transactions in that category, and the total spend in that category
- The generated expense report should also contain the total number of all transactions and the total spend of all transactions regardless of which category it belongs to

## Tasks

- Write a function `expenseTracker` which accepts parameters comprising of transactions
- `expenseTracker` function returns the generated expense report
- Write unit tests for the `expenseTracker` function

## Usage

> To run tests use `npm run test expense-tracker`

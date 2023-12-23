# Expense Tracker

## User Story

> As a user I want to use my bank statements to track my monthly expenses so that I can view the total spend and transactions within each category along with the total number of transactions and the grand total of all expenses.

## Acceptance Criteria

### 1

```
Given I want to determine my expense report

When I process my bank statements with multi categories

Then I should be presented with the expected expense report
```

### 2

```
Given I want to determine my expense report

When I process my bank statements with a single category

Then I should be presented with the expected expense report
```

### 3

```
Given I want to determine my expense report

When I process my bank statements with 0 amounts

Then I should be presented with the expected expense report
```

### 4

```
Given I want to determine my expense report

When I process my bank statements with negative amounts

Then I should be presented with the expected expense report without the negative entries
```

## Example Bank Statements

```javascript
[
  {
    id: "4741b53d-59db-42ec-a051-c2157c1d6603",
    amount: 45.99,
    vendor: "Tesco Supermarket",
    category: "Groceries",
    categoryId: "b6665999-6c38-4e8d-97c7-5dff280126fe",
  },
  {
    id: "38dbb729-988a-44e4-97ae-cefcf72ba779",
    amount: 12.99,
    vendor: "Uber",
    category: "Transport",
    categoryId: "8f81adea-d762-4f00-b5ad-9dcdfa2158a3",
  },
  {
    id: "dea7aa10-704e-4718-8bfe-85af7a9b6921",
    amount: 23.99,
    vendor: "M&S Supermarket",
    category: "Groceries",
    categoryId: "b6665999-6c38-4e8d-97c7-5dff280126fe",
  },
  {
    id: "486e6915-99fb-4a4e-8c6e-2665667c73a2",
    amount: 6.99,
    vendor: "Uber",
    category: "Transport",
    categoryId: "8f81adea-d762-4f00-b5ad-9dcdfa2158a3",
  },
  {
    id: "41623100-b877-47ad-b694-2dce21181e51",
    amount: 125,
    vendor: "Tesco Supermarket",
    category: "Groceries",
    categoryId: "b6665999-6c38-4e8d-97c7-5dff280126fe",
  },
  {
    id: "92df1bf2-324c-4601-b175-0dc2c50c7813",
    amount: 27.99,
    vendor: "BT Broadband",
    category: "Utility",
    categoryId: "bb1a284a-14fe-4ce0-9ad1-a0ae4fe1f85a",
  },
  {
    id: "0352188d-5a2f-4c42-afb0-12f2655078af",
    amount: 65,
    vendor: "Next",
    category: "Retail",
    categoryId: "2552cabc-2087-4a30-baab-e56c49beae47",
  },
  {
    id: "c50a7e17-3032-48fd-878c-2232dd23eb78",
    amount: 13.99,
    vendor: "Metro",
    category: "Transport",
    categoryId: "8f81adea-d762-4f00-b5ad-9dcdfa2158a3",
  },
  {
    id: "bf67ec01-5fe0-402b-9d1d-1e43bb6ddd60",
    amount: 89.99,
    vendor: "Tesco Supermarket",
    category: "Groceries",
    categoryId: "b6665999-6c38-4e8d-97c7-5dff280126fe",
  },
  {
    id: "ddcaae90-2d9d-4a30-a85e-945e67ac8323",
    amount: 201.78,
    vendor: "British Gas",
    category: "Utility",
    categoryId: "bb1a284a-14fe-4ce0-9ad1-a0ae4fe1f85a",
  },
  {
    id: "b188e736-bb4a-49d1-a669-276e6f7d8e38",
    amount: 6.99,
    vendor: "Metro",
    category: "Transport",
    categoryId: "8f81adea-d762-4f00-b5ad-9dcdfa2158a3",
  },
  {
    id: "155697ab-46d8-40ed-a507-27ca5aa148fa",
    amount: 389.99,
    vendor: "Pandora",
    category: "Retail",
    categoryId: "2552cabc-2087-4a30-baab-e56c49beae47",
  },
  {
    id: "5be5ce4a-7f79-4c3a-9b1b-b8687a41023b",
    amount: 36.48,
    vendor: "Asda Supermarket",
    category: "Groceries",
    categoryId: "b6665999-6c38-4e8d-97c7-5dff280126fe",
  },
  {
    id: "6a49d91f-b29d-4457-be88-59018bb5f5e7",
    amount: 45.38,
    vendor: "United Utilities",
    category: "Utility",
    categoryId: "bb1a284a-14fe-4ce0-9ad1-a0ae4fe1f85a",
  },
  {
    id: "834dd259-3fed-4cba-ba58-b46b925348d3",
    amount: 3.99,
    vendor: "Uber",
    category: "Transport",
    categoryId: "8f81adea-d762-4f00-b5ad-9dcdfa2158a3",
  },
  {
    id: "618e7a09-914a-41ca-a83f-5f0fb23524ac",
    amount: 122.34,
    vendor: "River Island",
    category: "Retail",
    categoryId: "2552cabc-2087-4a30-baab-e56c49beae47",
  },
];
```

## Example Result Object

```javascript
{
  categorisedItems: [
    {
      label: "Groceries",
      categoryId: "b6665999-6c38-4e8d-97c7-5dff280126fe",
      total: 321.45,
      totalTransactions: 5,
      items: [
        {
          id: "4741b53d-59db-42ec-a051-c2157c1d6603",
          amount: 45.99,
          vendor: "Tesco Supermarket",
        },
        {
          id: "dea7aa10-704e-4718-8bfe-85af7a9b6921",
          amount: 23.99,
          vendor: "M&S Supermarket",
        },
        {
          id: "41623100-b877-47ad-b694-2dce21181e51",
          amount: 125,
          vendor: "Tesco Supermarket",
        },
        {
          id: "bf67ec01-5fe0-402b-9d1d-1e43bb6ddd60",
          amount: 89.99,
          vendor: "Tesco Supermarket",
        },
        {
          id: "5be5ce4a-7f79-4c3a-9b1b-b8687a41023b",
          amount: 36.48,
          vendor: "Asda Supermarket",
        },
      ],
    },
    {
      label: "Transport",
      categoryId: "8f81adea-d762-4f00-b5ad-9dcdfa2158a3",
      total: 44.95,
      totalTransactions: 5,
      items: [
        {
          id: "38dbb729-988a-44e4-97ae-cefcf72ba779",
          amount: 12.99,
          vendor: "Uber",
        },
        {
          id: "486e6915-99fb-4a4e-8c6e-2665667c73a2",
          amount: 6.99,
          vendor: "Uber",
        },
        {
          id: "c50a7e17-3032-48fd-878c-2232dd23eb78",
          amount: 13.99,
          vendor: "Metro",
        },
        {
          id: "b188e736-bb4a-49d1-a669-276e6f7d8e38",
          amount: 6.99,
          vendor: "Metro",
        },
        {
          id: "834dd259-3fed-4cba-ba58-b46b925348d3",
          amount: 3.99,
          vendor: "Uber",
        },
      ],
    },
    {
      label: "Utility",
      categoryId: "bb1a284a-14fe-4ce0-9ad1-a0ae4fe1f85a",
      total: 275.15,
      totalTransactions: 3,
      items: [
        {
          id: "92df1bf2-324c-4601-b175-0dc2c50c7813",
          amount: 27.99,
          vendor: "BT Broadband",
        },
        {
          id: "ddcaae90-2d9d-4a30-a85e-945e67ac8323",
          amount: 201.78,
          vendor: "British Gas",
        },
        {
          id: "6a49d91f-b29d-4457-be88-59018bb5f5e7",
          amount: 45.38,
          vendor: "United Utilities",
        },
      ],
    },
    {
      label: "Retail",
      categoryId: "2552cabc-2087-4a30-baab-e56c49beae47",
      total: 577.33,
      totalTransactions: 3,
      items: [
        {
          id: "0352188d-5a2f-4c42-afb0-12f2655078af",
          amount: 65,
          vendor: "Next",
        },
        {
          id: "155697ab-46d8-40ed-a507-27ca5aa148fa",
          amount: 389.99,
          vendor: "Pandora",
        },
        {
          id: "618e7a09-914a-41ca-a83f-5f0fb23524ac",
          amount: 122.34,
          vendor: "River Island",
        },
      ],
    },
  ],
  totalTransactions: 16,
  total: 1218.88,
}
```

## Getting Started

- Open your [test file](./index.test.js) and complete the tests for the above mentioned acceptance criteria
- Open your [source file](./index.js) and complete the code until all your test cases pass

## Resources

- JavaScript docs [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- Jest docs [here](https://jestjs.io/docs/getting-started)

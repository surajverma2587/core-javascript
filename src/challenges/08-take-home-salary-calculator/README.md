# Take Home Salary Calculator

## User Story

> As a user I should be able to determine my take home salary after income tax deduction for the tax year 2021/2022 or 2022/2023 taking in to account the national personal allowance of 12500.

## Tax Table

| Annual Salary  | 21/22 Tax % | 22/23 Tax % |
| -------------- | ----------- | ----------- |
| 12501 - 40000  | 20%         | 18%         |
| 40001 - 100000 | 40%         | 35%         |
| above 100000   | 45%         | 40%         |

## Calculation

> Annual income: 50000

> Tax year: 2021/2022

> Taxable income: 50000 - 12500 = 37500

> Tax percentage: 40

> Tax amount: 40% of 37500 = 13125

> Take home salary: 50000 - 13125 = 36875

## Acceptance Criteria

### 1

```
Given I want to determine my take home salary for the year 2021/2022

When I enter my annual salary of 30000

Then I should be presented with the following information:

  {
    annualIncome: 30000,
    taxYear: 2021/2022,
    taxableIncome: 17500,
    taxPercentage: 20,
    taxAmount: 3500,
    takeHomeSalary: 26500,
  }
```

### 2

```
Given I want to determine my take home salary for the year 2021/2022

When I enter my annual salary of 50000

Then I should be presented with the following information:

  {
    annualIncome: 50000,
    taxYear: 2021/2022,
    taxableIncome: 37500,
    taxPercentage: 40,
    taxAmount: 15000,
    takeHomeSalary: 35000,
  }
```

### 3

```
Given I want to determine my take home salary for the year 2021/2022

When I enter my annual salary of 150000

Then I should be presented with the following information:

  {
    annualIncome: 150000,
    taxYear: 2021/2022,
    taxableIncome: 137500,
    taxPercentage: 45,
    taxAmount: 61875,
    takeHomeSalary: 88125,
  }
```

### 4

```
Given I want to determine my take home salary for the year 2021/2022

When I enter my annual salary of 10000

Then I should be presented with the following information:

  {
    annualIncome: 10000,
    taxYear: 2021/2022,
    taxableIncome: 0,
    taxPercentage: 0,
    taxAmount: 0,
    takeHomeSalary: 10000,
  }
```

### 5

```
Given I want to determine my take home salary for the year 2022/2023

When I enter my annual salary of 30000

Then I should be presented with the following information:

  {
    annualIncome: 30000,
    taxYear: 2022/2023,
    taxableIncome: 17500,
    taxPercentage: 18,
    taxAmount: 3150,
    takeHomeSalary: 26850,
  }
```

### 6

```
Given I want to determine my take home salary for the year 2022/2023

When I enter my annual salary of 50000

Then I should be presented with the following information:

  {
    annualIncome: 50000,
    taxYear: 2022/2023,
    taxableIncome: 37500,
    taxPercentage: 35,
    taxAmount: 13125,
    takeHomeSalary: 36875,
  }
```

### 7

```
Given I want to determine my take home salary for the year 2022/2023

When I enter my annual salary of 150000

Then I should be presented with the following information:

  {
    annualIncome: 150000,
    taxYear: 2022/2023,
    taxableIncome: 137500,
    taxPercentage: 40,
    taxAmount: 55000,
    takeHomeSalary: 95000,
  }
```

### 8

```
Given I want to determine my take home salary for the year 2022/2023

When I enter my annual salary of 10000

Then I should be presented with the following information:

  {
    annualIncome: 10000,
    taxYear: 2022/2023,
    taxableIncome: 0,
    taxPercentage: 0,
    taxAmount: 0,
    takeHomeSalary: 10000,
  }
```

### 9

```
Given I want to determine my take home salary for the year 2020/2021

When I enter my annual salary of 30000

Then I should be presented with a message "Please enter a valid tax year!"
```

### 10

```
Given I want to determine my take home salary for the year 2021/2022

When I enter my annual salary of 0

Then I should be presented with a message "Please enter a valid salary!"
```

### 11

```
Given I want to determine my take home salary for the year 2021/2022

When I enter my annual salary of -30000

Then I should be presented with a message "Please enter a valid salary!"
```

## Getting Started

- Open your [test file](./index.test.js) and complete the tests for the above mentioned acceptance criteria
- Open your [source file](./index.js) and complete the code until all your test cases pass

## Resources

- JavaScript docs [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- Jest docs [here](https://jestjs.io/docs/getting-started)

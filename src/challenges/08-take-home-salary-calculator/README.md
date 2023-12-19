# Income Tax Calculator

## User Story

As a user I should be able to determine my take home salary after income tax deduction for the year tax 2021/2022 or year 2022/2023 taking in to account the national personal allowance of £12,500.

| Annual Salary      | 21/22 Tax % | 22/23 Tax % |
| ------------------ | ----------- | ----------- |
| £12,501 - £40,000  | 20%         | 18%         |
| £40,001 - £100,000 | 40%         | 35%         |
| above £100,000     | 45%         | 40%         |

**Example for 2021/2022**

> Annual income: £50,000

> Taxable income: £50,000 - £12,500 = £37,500

> Tax %: 40%

> Tax: 40% of £37,500 = £13,125

> Take home salary: £50,000 - £13,125 = **£36,875**

## Acceptance Criteria

- should return the message of "Your annual take home salary is £xxxxx" for a salary greater than 0
- should accept the tax year as 2021/2022 or 2022/2023
- invalid tax years should return the message "Please enter a valid tax year!"
- invalid salaries should return the message "Please enter a valid salary!"

## Tasks

- Write a function `takeHomeSalaryCalculator` which accepts parameters comprising of salary and tax year
- `takeHomeSalaryCalculator` function returns the appropriate message
- Write unit tests for the `takeHomeSalaryCalculator` function

## Usage

> To run tests use `npm run test take-home-salary-calculator`

# Objects

## User Story

As a developer I should be able to use JavaScript objects in my codebase.

## Acceptance Criteria

- create a `car` object with the following keys:

  - make: `"Toyota"`
  - model: `"Corolla"`
  - year: `2023`
  - color: `"Silver"`
  - price: `25000`
  - getInfo: method that returns the information about the car in the following format: `"[make] | [model] | [year] | [color] | [price]"`
  - displayPrice: method that returns the price information in the following format: `"£[price]"`

- add a new key `mileage` with a value of `8000` to the `car` object
- add a new method `drive` to the `car` object that returns the following message: `"You drove [mileage] miles"`

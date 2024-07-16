# Arrays

## User Story

As a developer I should be able to use JavaScript numbers in my codebase.

## Acceptance Criteria

- create a function `areaAndPerimeter` that accepts a `shape` (`"SQUARE"` or `"RECTANGLE"`), `sideA` and `sideB` and returns the area and perimeter of a rectangle or a square in an object
- if `shape` is not `"SQUARE"` or `"RECTANGLE"` return an error message `"Invalid shape!"`
- if `sideA` or `sideB` is not a number then return an error message `"Invalid side!"`
- if `sideA` or `sideB` is equal to 0 then return an error message `"Invalid side!"`
- if `sideA` or `sideB` is a floating point number then return an error message `"Invalid side!"`
- if `sideA` or `sideB` is a negative number then return an error message `"Invalid side!"`
- if `sideA` and `sideB` are valid and the shape is a square then return the area and perimeter of a square in an object
- if `sideA` and `sideB` are valid and the shape is a rectangle then return the area and perimeter of a rectangle in an object

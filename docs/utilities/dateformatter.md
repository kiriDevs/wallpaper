# The `dateformatter` utility

The `dateformatter` utility formats JavaScript `Date` objects into Strings representing either the contained date or the contained time in human-friendly strings.

## Exports

The `dateformatter` utility places the following objects in the global `Util` object:

### `Util.daytable`

An array mapping the day indices to the days' English names.
Sunday is repeated at the end to have both American and European weeks

- 0-6 = Sunday -> Saturday
- 1-7 = Monday -> Sunday

```javascript
Util.daytable = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]
```

### `Util.montable`

An array mapping the months' indices to the months' English names.

```javascript
Util.montable = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]
```

### `Util.dateformatter`

#### `Util.dateformatter.dateString`

This function accepts two parameters:

- `date` (type: `Date`) The `Date` object to format
- `pattern` (type: `string`) The expected format

The following placeholder sequences are replaced in the `pattern` string:

Placeholder | Replacement
----------- | -----------
`%w`        | The JS index of the day of the week (Sunday = `0`, Saturday = `6`)
`%W`        | The day of the week, `%w` localised using `Util.daytable`
`%m`        | The JS index of the month (January = `0`, December = `11`)
`%M`        | The month, `%m` localised using `Util.montable`
`%d`        | The JS index of the day of the month (starting at `1`)
`%Y`        | The number of the year (4-digit, e.g. `2023`)

**Returns:** The `pattern` with the placeholders replaced by their respective values (type: `string`)

#### `Util.dateformatter.timeString`

This function accepts two parameters:

- `date` (type: `Date`): The `Date` object to format
- `pattern` (type: `string`): The expected format

The following placeholder sequences are replaced in the `pattern` string:

Placeholder | Replacement
----------- | -----------
`%h`        | The number of the hour (24hr, fixed to 2 digits, e.g. `05`, `10`, `20`)
`%m`        | The number of the minute (fixed to 2 digits, e.g. `05`, `10`)
`%S`        | The number of the second (fixed to 2 digits, e.g. `05`, `10`)
`%s`        | The number of the millisecond (fixed to 3 digits, e.g. `005`, `010`, `500`)

**Returns:** The `pattern` with the placeholders replaced by their respective values (type: `string`)

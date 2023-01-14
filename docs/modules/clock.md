# The `clock` module

## Dependencies

- `util:dateformatter`

## Widgets

### `module-clock-date`

This widget renders the current date in a customizable format.
Updates every second.

**Parameters:**

Name | Location | Format | Description
---- | -------- | ------ | -----------
`pattern` | HTML body | [see util:dateformatter#datestring](../utilities/dateformatter.md#utildateformatterdatestring) | The expected pattern of the resulting date string

**Result:**

The given `pattern` with the placeholders replaced by the corresponding values

**Example:**

```html
<module-clock-date>%W, %d. %M %Y</module-clock-date>
<!-- Sunday, 8. January 2023 -->
```

### `module-clock-time`

This widget renders the current time in a customizable format.
Updates every second.

**Parameters:**

Name | Location | Format | Description
---- | -------- | ------ | -----------
`pattern` | HTML body | [see util:dateformatter#timestring](../utilities/dateformatter.md#utildateformattertimestring) | The expected pattern of the resulting time string

**Result:**

The given `pattern` with the placeholders replaced by the corresponding values

**Example:**

```html
<module-clock-time>%h:%m</module-clock-time>
<!-- 01:51 -->
```

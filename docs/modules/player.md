# The `player` module

## Dependencies

This module does not have any dependencies.

## Widgets

### `module-ytplayer-multi`

This widget renders a list of buttons to switch between YouTube video embeds.

**Parameters:**

Name | Location | Format | Description
---- | -------- | ------ | -----------
`videos` | HTML body | `string` list (seperated by `\n`) | A list of YouTube video IDs

**Result:**

A row of buttons to switch between embeds for the given video IDs.
When the first selection is made, an `<iframe>` is created above the buttons.
When a different selection is made, the embed is replaced with the new one.

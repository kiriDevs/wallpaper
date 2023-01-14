# The `themes` utility

The `themes` utility allows you to manage and apply themes to the document programmatically.
Consider this as a kind of library for creating modules (including widgets) to allow switching between existing themes.

## Setup

This utility requires a `<link>` to the `.css` file you want to use as your default theme.
This `<link>` tag should be a normal stylesheet link and have the ID `util-themes-themelink`.
The utility will automatically detect the location of your theme files and the name of your default theme from the inital `href` attribute.
This `<link>` tag will also be reused when the theme is changed by automatically re-writing the `href` attribute.

For example, if you want to use `styles/themes/dark.css` as your default theme:

```html
<link id="util-themes-themelink" rel="stylesheet" type="text/css" href="styles/themes/dark.css">
```

Because of the utility automatically detecting the location of your theme based on the default, you should place all your themes in the same folder.
The repository includes `/styles/themes/` specifically for this, but it should be fine to use any other folder, if you want to.

**Important:** When importing your configuration into Wallpaper Engine, make sure all your theme files are included in the project.
Since they are referenced dynamically, they might not be detected as used files and therefore not be included by default.

## Exports

The `themes` utility places the following objects in the global `Util` object:

### `Util.themes`

#### `Util.themes.getCurrentTheme`

This function does not accept any arguments.
It returns the name of the current theme (the filename, without extension, of the currently used `.css` file).

#### `Util.themes.switchTheme`

This function accepts one argument:

- `newThemeName` (type: `string`): The name of the theme to switch to.

The function will activate the theme with the given name by changing the file name in the `href` attribute of the theme-link (see above: [Setup](#setup)).

**Note:** The function will not check if the theme exists.
This means that, when called with an invalid theme name, the theme-link will be changed to a non-existing file, resulting in no theme-specific stylesheet being applied.

# Modules

Find the list of all modules, including links to their respective documentation pages, below. Or just [click this link](#list-of-modules)

## What are modules?

Modules are defined as a single `.js` file in `/scripts/modules/`.
The part before the `.js` file name will be refered to as the modules name in all further documentation.

Modules generally maintain [widgets](#what-are-widgets), but may also make functions available to other modules by adding them to an object in the global `MODULES` namespace.

Modules can have their own stylesheets to define the inner layout of their widgets.
These stylesheets are located in `/styles/modules/` and are called after the respective module's name (e.g. `clock.js` / `clock.css`).

For a list of utilites and utility-specific documentations, [click here](../utilities/README.md).

## What are widgets?

Widgets are defined as a single HTML element in the `<body>` of the `index.html` file.
They are conventionally named `module-<module-name>-<widget-name>` (e.g. `module-clock-time`).
They are a part of UI that is controlled by the respective module.
You can configure them in your `index.html` by adding data to the inside of the widget element:

```html
<module-clock-time>%h:%m</module-clock-time>
```

At runtime, this configuration content will be used and replaced with actual data by the controlling module.
In this case, the `clock` module will replace the `%h` and `%m` placeholders with the current hour and minute (e.g. `01:51`).

## List of modules

This is a list of all included modules, along with a short description of what they do.
The name of the module links to its specific documentation.

- [`clock`](./clock.md): Display time and date in a customizable format
- [`player`](./player.md): Render buttons to switch between YouTube video embeds
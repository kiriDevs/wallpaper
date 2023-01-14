# wallpaper

This is the second iteration of the framework around my [Wallpaper Engine](https://www.wallpaperengine.io) web wallpaper.
It is aimed at providing JavaScript modules to create simple, multi-functional wallpapers with simple, readable HTML.
This makes edits simple for any group of users (although initial creation requires knowledge of HTML and CSS; JS is required for custom modules).
This framework's main purpose is combining functional text, contained and maintained by modules, on top of an existing image.

## What this is (and what not)

This repository contains the basic framework for your wallpaper.
That means it contains some modules that might be useful for a lot of people
(well, technically all the modules that I made for myself).

It *does not contain* a full wallpaper.
There is no actual markup (`/index.html`), any layout styles (`/styles/layout/`) or theming (`/styles/themes/`).
It also doesn't contain any actual background images (`/assets/backgrounds/`).
You will have to provide all of these yourself.

## How do I use this?

First of all, clone this repository.
Open the folder in a file browser or your favorite (source code) editor.

### Create your markup

In the root of the cloned repository, create an `index.html` file.
In that file, write your HTML markup.
If you want to use a module, [check out the modules documentation](docs/modules/README.md).

In your `<head>`, you will have to link the `/styles/general.css` stylesheet.
It makes sure your background image actually becomes the background of the wallpaper and that it behaves as expected:

```html
<link rel="stylesheet" type="text/css" href="styles/general.css">
```

#### How to include modules

If you use any modules, you will need to include some `<script>` tags in your HTML to make sure Wallpaper Engine will load the required JavaScript code with your wallpaper.
I recommend that you do all your script execution at the end of your `<body>` to keep all your `<script>` tags in one block.

The order of these `<script>` tags matter, since some things might depend on  other things already being set up.

First of all, you will need to load `/scripts/envinit.js`.
This script will, as the name implies, initialize the scripting environment that all the modules will run in.
You can use this line to do that:

```html
<script src="scripts/envinit.js"></script>
```

In this example, we will assume your configuration uses the `clock` module.
As you can see in [its documentation](docs/modules/clock.md), it requires the `dateformatter` utility.
Utilities are located in `/scripts/util`.
To make sure this is available, you will have to load it *before* the `clock` module itself.

```html
<script src="scripts/util/dateformatter.js"></script>
```

After the scripting environment has been initialized and you included all your dependencies, you can finally load the actual modules.
To reduce your wallpaper's impact on RAM and CPU usage, you should only load modules you actually use.
Modules are located in `/scripts/modules/`, so you can load the `clock` module like this:

```html
<script src="scripts/modules/clock.js"></script>
```

So, all in all, your script block might look something like this:

```html
<!-- Initialize scripting environment -->
<script src="scripts/envinit.js"></script>

<!-- Import utility JS -->
<script src="scripts/util/dateformatter.js"></script>

<!-- Import module JS -->
<script src="scripts/modules/clock.js"></script>
```

Most modules also contain stylesheets for their internal layout.
These are located in `/styles/modules/<modulename>.css`.
For example, the `clock` module's stylesheet is located at `/styles/modules/clock.css`.
To make sure your modules are laid out properly and look as they're supposed to, you will also have to add `<link>` tags to those stylesheets to your HTML:

```html
<link rel="stylesheet" type="text/css" href="styles/modules/clock.css">
```

#### Example

A basic example of an `index.html` file containing just a clock using the `clock` module might look like this:

For more info on the `<link>` to `/styles/layout/header.css`, see [Create your stylesheets](#create-your-stylesheets)

```html
<!DOCTYPE HTML>
<html>
    <head>
    <meta charset="utf-8" />
    <title>Example Wallpaper</title>

    <!-- Import default stylesheets -->
    <link rel="stylesheet" type="text/css" href="styles/general.css">
    <link rel="stylesheet" type="text/css" href="styles/layout/layout.css">

    <!-- Import module stylesheets -->
    <link rel="stylesheet" type="text/css" href="styles/modules/clock.css">
  </head>
  <body>
    <module-clock-time>%h:%m</module-clock-time>

    <!-- Initialize scripting environment -->
    <script src="scripts/envinit.js"></script>

    <!-- Import utility JS -->
    <script src="scripts/util/dateformatter.js"></script>

    <!-- Import module JS -->
    <script src="scripts/modules/clock.js"></script>
  </body>
</html>
```

### Create your stylesheets

The stylesheets included in modules only cover how the modules are styled internally.
You have to do your external layout (what module (or other component) should be where) yourself.
Put those custom stylesheets into `/styles/layout/`.
For example, a stylesheet that dictates the layout in a header could be `/styles/layout/header.css`.
What you actually call those doesn't matter, you just have to make sure to include `<link>`s to your stylesheets in your HTML's `<head>`.

As a minimal example, if you only have a single `layout.css` file, you need to add this `<link>` to your HTML's `<head>`:

```html
<link rel="stylesheet" type="text/css" href="styles/layout/layout.css">
```

### Add your backdrop

Your backdrop is the image that will actually be displayed behind everything else you added to your `index.html`.
For the best results, make sure your image is already the correct size for your monitor(s).
You can place your image in `/assets/backgrounds/default.jpg`.
If your image is in a different format (or you really want to call it something else for whatever reason), you can change that path in `/styles/general.css`.

If you want to use different backdrops for different themes, see [Themes](#themes)

## Themes

You can create multiple themes to switch between at runtime via JavaScript.
This requires the `themes` utility, so you will need to load that in your `index.html`:

```html
<scripts src="scripts/util/themes.js"></scripts>
```

As you can see in [its documentation](docs/utilities/themes.md), the `themes` module has no further dependencies to include.
It also doesn't include a stylesheet, so you don't need to `<link>` that either.

Next up, you will have to reorganize your stylesheets.
You can keep anything that you want to apply at all times in your custom style sheets in `/styles/layouts/`.
However, you will need to move any styles that only apply to a single theme to theme-specific `.css` files.
These theme-files should be located in `/styles/themes/` and be named after the theme they define.
For example, your style sheet for your light theme could be at `/styles/themes/light.css`.

## Contributing

Want to see a new module that you think might be useful to others?
Missing a feature in an existing module or found a bug?
You have problems understanding something from the documentation?

Feel free to [open an issue](https://github.com/kiriDevs/wallpaper/issues/new)!
Make sure to describe your problem / suggestion properly so I (or others) can actually understand what you are talking about.
We might have some further questions, so it would be nice if you would check your notifications once in a while.

---

Already created that module for yourself and want to share it?
Implemented the feature yourself?
Want to improve documentation for others?

Cool!
Just [fork the repo](https://github.com/kiriDevs/wallpaper/fork), push your changes to your fork and send a pull request!
I am happy to accept (quality) pull requests in this repo (no singular typo fixes please), if I feel they are a good fit.

If you add anything, please remember to include documentation in your PR.

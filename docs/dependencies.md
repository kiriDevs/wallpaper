# Dependencies

Every module and utility has a list of dependencies (however that list might be empty).
Any dependency of a component has to be loaded before the depending component itself, meaning that you have to adjust the order of the `<script>` tags in your `index.html` accordingly.

Dependencies are listed either as `module:xyz` or `util:xyz`, where xyz is the name of the module or utility.
`module:xyz` means that the dependency is a module (and you need to load `/scripts/modules/xyz.js`).
`util:xyz` means that it is a utility (and you need to load `/scripts/util/xyz.js`).

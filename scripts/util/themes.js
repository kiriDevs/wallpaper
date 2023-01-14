const THEME_LINK = document.getElementById(MARKERS["util:themes:themelink"]);

let themeLocation = undefined;
let currentTheme = undefined;

Util.themes = {
    __init: () => {
        const defaultThemePath = THEME_LINK.href;
        let defaultThemePathParts = defaultThemePath.split("/");
    
        if (["http:", "https:", "file:"].includes(defaultThemePathParts[0])) {
            defaultThemePathParts = defaultThemePathParts.slice(3);
        }
        while (defaultThemePathParts[0] === "") defaultThemePathParts.shift();
    
        const fileName = defaultThemePathParts.pop();
        const fileNameParts = fileName.split(".");
        fileNameParts.pop(); // Remove file name extension
        currentTheme = fileNameParts.join("."); // Put the rest back together
    
        // Save where all the themes are located
        themeLocation = "/" + defaultThemePathParts.join("/") + "/";
    },
    getCurrentTheme: () => currentTheme,
    switchTheme: (newThemeName) => {
        newThemePath = themeLocation + newThemeName + ".css";
        THEME_LINK.href = newThemePath;
        currentTheme = newThemeName;
    }
};

Util.themes.__init();
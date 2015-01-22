element.isOnScreen
==========

A native JavaScript port of the [jQuery isOnScreen plugin](https://github.com/moagrius/isOnScreen), originally created by moagrius. This plugin determines if an element is within the viewport, with optional parameters that allow the user to specify a minimum percentage of the element's dimensions that must be visible to qualify.

@param x - Float values to test against, as a decimal value of how much of the element's width must be visible for the method to return true.  Defaults to 1 (100%)

@param y - Float values to test against, as a decimal value of how much of the element's height must be visible for the method to return true.  Defaults to 1 (100%)

For example, passing `element.isOnScreen(0.5, 0.5)` would return true if the element has at least 50% of its height and width within the viewport. `element.isOnScreen(0.1, 0.5)` would return true if at least 10% of the width is visible *and* 50% of the height is visible. Omitting an argument (or passing null) defaults to 1 (or 100%).

### Usage

    element.isOnScreen();  // returns true if element is entirely within the viewport
    element.isOnScreen(0.5, 0.5); // returns true if element is at least 50% within the viewport

### Example
[Codepen Example](http://codepen.io/acordova/pen/KwmYxd)

### Browser Compatibility
TBA
Object.prototype.isOnScreen = function(x, y) {
    var viewport,
        width,
        height,
        bounds,
        visible,
        deltas;

    this.x = x;
    this.y = y;

    if (this.x === null || typeof this.x === 'undefined') { this.x = 1; }
    if (this.y === null || typeof this.y === 'undefined') { this.y = 1; }

    viewport = {
        top: window.pageYOffset,
        left: window.pageXOffset
    };

    viewport.right = viewport.left + document.documentElement.clientWidth;
    viewport.bottom = viewport.top + document.documentElement.clientHeight;

    height = this.clientHeight;
    width = this.clientWidth;

    if (!width || !height) { return false; }

    bounds = {
        top: this.getBoundingClientRect().top + viewport.top,
        right: this.getBoundingClientRect().left + viewport.left + width,
        bottom: this.getBoundingClientRect().top + viewport.top + height,
        left: this.getBoundingClientRect().left + viewport.left
    };

    visible = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    if (!visible) { return false; }

    deltas = {
        top: Math.min(1, (bounds.bottom - viewport.top) / height),
        bottom: Math.min(1, (viewport.bottom - bounds.top) / height),
        left: Math.min(1, (bounds.right - viewport.left) / width),
        right: Math.min(1, (viewport.right - bounds.left) / width)
    };

    return (deltas.left * deltas.right) >= this.x && (deltas.top * deltas.bottom) >= this.y;
};

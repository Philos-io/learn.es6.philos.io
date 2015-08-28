// From hack Mozilla

function Circle(radius) {
    this.radius = radius;
    Circle.circlesMade++;
}

Circle.draw = function draw(circle, canvas) {

}

Object.defineProperty(Circle, "circlesMade", {
    get: function() {
        return !this._count ? 0 : this._count;
    },

    set: function(val) {
        this._count = val;
    }
});

Circle.prototype = {
    area: function area() {
        return Math.pow(this.radius, 2) * Math.PI;
    }
};

Object.defineProperty(Circle.prototype, "radius", {
    get: function() {
        return this._radius;
    },

    set: function(radius) {
        if (!Number.isInteger(radius))
            throw new Error("Circle radius must be an integer.");
        this._radius = radius;
    }
});
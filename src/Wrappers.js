/*
    Copyright 2008,2009
        Matthias Ehmann,
        Michael Gerhaeuser,
        Carsten Miller,
        Bianca Valentin,
        Alfred Wassermann,
        Peter Wilfahrt

    This file is part of JSXGraph.

    JSXGraph is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    JSXGraph is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with JSXGraph.  If not, see <http://www.gnu.org/licenses/>.
*/

JXG.extend(JXG.Board.prototype, /** @lends JXG.Board.prototype */ {
    angle: function(A, B, C){ return JXG.Math.Geometry.angle(A,B,C); },
    rad: function(A, B, C){ return JXG.Math.Geometry.rad(A,B,C); },
    distance: function(arr1, arr2){ return JXG.Math.Geometry.distance(arr1,arr2); },
    pow: function(a, b){ return JXG.Math.pow(a,b); },
    round: function(x, n){ return (x).toFixed(n); },
    cosh: function(x){ return JXG.Math.cosh(x); },
    sinh: function(x){ return JXG.Math.sinh(x); },
    sgn: function(x) { return (x==0 ? 0 : x/(Math.abs(x))); },
    D: function(f,obj){ return JXG.Math.Numerics.D(f,obj); },
    I: function(interval,f){ return JXG.Math.Numerics.I(interval,f); },
    root: function(f,x,obj){ return JXG.Math.Numerics.root(f,x,obj); },
    lagrangePolynomial: function(p){ return JXG.Math.Numerics.lagrangePolynomial(p); },
    neville: function(p){ return JXG.Math.Numerics.Neville(p); },
    riemannsum: function(f,n,type,start,end){ return JXG.Math.Numerics.riemannsum(f,n,type,start,end); },

    abs: Math.abs,
    acos: Math.acos,
    asin: Math.asin,
    atan: Math.atan,
    ceil: Math.ceil,
    cos: Math.cos,
    exp: Math.exp,
    floor: Math.floor,
    log: Math.log,
    max: Math.max,
    min: Math.min,
    random: Math.random,
    sin: Math.sin,
    sqrt: Math.sqrt,
    tan: Math.tan,
    trunc: Math.ceil,
    
    factorial: function(n){ return JXG.Math.factorial(n); },
    binomial: function(n,k){ return JXG.Math.binomial(n,k); },

    getElement: function (el) {return JXG.getReference(this,el); },

    /**
     * GUI interface
     **/
    intersectionOptions: ['point',[[JXG.OBJECT_CLASS_LINE,JXG.OBJECT_CLASS_LINE],[JXG.OBJECT_CLASS_LINE,JXG.OBJECT_CLASS_CIRCLE],
                                   [JXG.OBJECT_CLASS_CIRCLE,JXG.OBJECT_CLASS_CIRCLE]]],

    pointFunc: function(){return [null];},
    pointOptions: ['point',[[JXG.OBJECT_CLASS_POINT]]],

    lineFunc: function(){return arguments;},
    lineOptions: ['line',[[JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_POINT]]],

    linesegmentFunc: function(){return arguments;},
    linesegmentOptions: ['line',[[JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_POINT]]],
    linesegmentAtts: {straightFirst : false, straightLast : false },

    arrowFunc: function(){return arguments;},
    arrowOptions: ['arrow',[[JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_POINT]]],

    circleFunc: function(){return arguments;},
    circleOptions: ['circle',[[JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_POINT],[JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_LINE],
                              [JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_CIRCLE]]],

    arrowparallelOptions: ['arrowparallel',[[JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_LINE]]],
    arrowparallelFunc: function(){return arguments;},

    bisectorOptions: ['bisector',[[JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_POINT]]],
    bisectorFunc: function(){return arguments;},

    circumcircleOptions: ['circumcircle',[[JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_POINT]]],
    circumcircleFunc: function(){return arguments;},

    circumcirclemidpointOptions: ['circumcirclemidpoint',[[JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_POINT]]],
    circumcirclemidpointFunc: function(){return arguments;},

    integralOptions: ['integral',[[]]],
    integralFunc: function(){return arguments;},

    midpointOptions: ['midpoint',[[JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_POINT],[JXG.OBJECT_CLASS_LINE]]],
    midpointFunc: function(){return arguments;},

    mirrorpointOptions: ['mirrorpoint',[[JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_POINT]]],
    mirrorpointFunc: function(){return arguments;},

    normalOptions: ['normal',[[JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_LINE]]],
    normalFunc: function(){return arguments;},

    parallelOptions: ['parallel',[[JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_LINE]]],
    parallelFunc: function(){return arguments;},

    parallelpointOptions: ['parallelpoint',[[JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_POINT]]],
    parallelpointFunc: function(){return arguments;},

    perpendicularOptions: ['perpendicular',[[JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_LINE]]],
    perpendicularFunc: function(){return arguments;},

    perpendicularpointOptions: ['perpendicularpoint',[[JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_LINE]]],
    perpendicularpointFunc: function(){return arguments;},

    reflectionOptions: ['reflection',[[JXG.OBJECT_CLASS_POINT,JXG.OBJECT_CLASS_LINE]]],
    reflectionFunc: function(){return arguments;}
});

// Some shortcuts
JXG.Point.prototype.setPositionX = function (method, x) {
    var y = (method==JXG.COORDS_BY_USER)?this.coords.usrCoords[2]:this.coords.scrCoords[2];
    this.setPosition(method,[x,y]);
};
JXG.Point.prototype.setPositionY = function (method, y) {
    var x = (method==JXG.COORDS_BY_USER)?this.coords.usrCoords[1]:this.coords.scrCoords[1];
    this.setPosition(method,[x,y]);
};

Complex.prototype.conj = function() 
{ return new Complex(this.r, this.i); };

if (!String.prototype.startsWith){
    String.prototype.startsWith = function(s) {
        return this.indexOf(s) === 0;
    };
}

// Invoke f n times:

Number.prototype.times = function(f, context){
    let n = this.valueOf();
    for(let i = 0; i < n; i++) f.call(context, i);
};


function Span(start, span) { if (span >= 0) {
    this.from = start;
    this.to = start + span; } else {
    this.to = start;
    this.from = start + span; }
    }
Span.prototype = Object.create(Range.prototype);
Span.prototype.constructor = Span;
Span.prototype.toString = function() {
    return `(${this.from}... +${this.to - this.from})`; };

// Span.prototype = Object.create(Range.prototype);
// Objects created with Span() inherit from Span.prototype
// But Span.prototype also inherits from Range.prototype
// So Span objs inherit from both


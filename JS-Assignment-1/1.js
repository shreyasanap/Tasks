// Q 1.
function foo() {
    x = 1;
    function x() { }
    var x = '2';
    return x;
}
alert( typeof foo() );
// Answer: String

// Q 2.
function foo() {
    return x;
    x = 1;
    
    function x() { }
    
    var x = '2';
}
console.log( typeof foo() ); 
// Answer: function

// Q 3.
var x = 1;
function foo() {
    x = 10;
    return;
    function x() {}
}
foo();
console.log( x );

// Answer: 1
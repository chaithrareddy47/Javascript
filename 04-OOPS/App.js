/*
 * OOPS (Object oriented programming)
*/

// with functions
function getTriangele(base, height) {
    return (1/2 * base * height)
}

function doubleTriangle(abc , base , height) {
    const x = abc(base, height)
    return x
}

console.log(doubleTriangle(getTriangele, 5, 4));


// using objects

let triangle = {
    a: 3,
    b: 4,
    triangleFunc: function () {
        return this.a * this.b
    }
};
console.log(triangle.triangleFunc());

function print(a, b, c, d) {
    console.log(a + b + c + d)
}

function example(a, b , c , d) {
    print(a, b, c, d)
    print.call(this, a, b, c, d)
    print.apply(this, [a, b, c, d])
    print.apply(this, arguments)
}

example('Hello ', 'node', 'js', '!')

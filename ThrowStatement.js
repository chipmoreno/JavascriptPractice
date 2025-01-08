function factorial(x) {
    if (x < 0) throw new Error("X cannot be negative");
    let f;
    for (f =1; x >1; f*= x, x--)
    return f;
}
factorial(4)


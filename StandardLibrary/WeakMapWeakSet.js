// WeakMap is variant of Map
// Does not prevent its key values from being garbage collected

//WeakMap keys must be objects or arrays, primitive values are not
// subject to garbage collection and cannot be used as keys
// WeakMap not iterable, doesn't define keys(), values(), forEach()
// also doesn't have a size property
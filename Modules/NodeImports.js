const fs = require("fs"); // built in filesystem module
const http = require("http"); // built in HTTP module
const express = require("express");

// Example of file path for imports:

const stats = require('./stats.js');
const BitSet = require('./utils/bitset.js');

// When a module exports 1 function/class, you can require it.
// When moduole exports obj w/ multiple properties, you can import
// entire obj, or import specific properties using destructuring

const stats = require('./stats.js');
let average = stats.mean(data);
let avg = average(data);
const{stddev} = require('./stats.js')
let sd = stddev(data);

// I fmodule only export one value (such as function/class)
// use export default instead of export

export default class BitSet{}

/*
Modules typically define either one default export or 
multiple named exports. It is legal, but somewhat uncommon, 
for a module to use both exportandexport default.
Butwhenamoduledoesthat,youcan import both the default value 
and the named values with an import statement like this:*/


import Histogram, { mean, stddev } from "./histogram-stats.js";

// Importing no-exports module:

import "./analytics.js";

// this runs the first time and only first time it is imported


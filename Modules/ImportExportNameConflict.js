import { render as renderImage } from "./imageutils.js"; 
import { render as renderUI } from "./ui.js";

// Both imageutils and ui define render, we rename them

// Export does expect single identifier before as, not expression.


// Use Case of definining stats.js, /stats/mean.js,
// /stats/stddev.js

// Within stats.js:

export { mean } from "./stats/mean.js"; 
export { stddev } from "./stats/stddev.js";

// Cleaner than:

import { mean } from "./stats/mean.js"; 
import { stddev } from "./stats/stddev.js"; 
export { mean, stdev };

// Or wildcard:

export * from "./stats/mean.js"; 
export * from "./stats/stddev.js";

// Defining another name for a function:

export { mean, mean as average } from "./stats/mean.js";

// If mean and stddev use export default: 

export { default as mean } from "./stats/mean.js"; 
export { default as stddev } from "./stats/stddev.js";

// If you want to re-export as default:

export { mean as default } from "./stats.js"


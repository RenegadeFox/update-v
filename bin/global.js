#!/usr/bin/env node

// {Module} Import the src Module
const update = require('../src/')

// Run the main Module script
update().then((data) => {
  console.log(`+ "${data.name}" -> \x1b[32mv${data.version}\x1b[0m`)
}).catch(err => console.error(err))

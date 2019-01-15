#!/usr/bin/env node

const argv = require('yargs')
  .demandOption(['webhook-url', 'message'])
  .argv
const run = require('./index')

run(argv)
  .then((message) => {
  })
  .catch((e) => {
    console.log(e.message)
  })

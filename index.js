const update = require('./src/')

update().then((data) => {
  console.log(`+ "${data.name}" -> \x1b[32mv${data.version}\x1b[0m`)
}).catch(err => console.error(err))

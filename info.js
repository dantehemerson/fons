const os = require('os')
const packageJs = require('./package.json')

const formatter = (obj) => Object.keys(obj).map(key => console.log(`\t ${key}: ${obj[key]}`))

console.log(`Env: ${process.env}`)
console.log(`Node Version: ${process.version}`)
console.log(`Node Release: ${process.release.name} ${process.release.lts}`)
console.log(`Operating system and Version: ${process.platform} ${os.arch()} ${os.release()} ${os.version()}`)
console.log(`Versions: `)
formatter(process.versions)

console.log('CPUs: ', os.cpus()[0].model, os.cpus()[0].speed, ' x ', os.cpus().length, ' cores')
console.log(`Memory Total: ${os.totalmem()} bytes`)
console.log(`Memory Free: ${os.freemem()} bytes`)

console.log(`Dependances: `)
formatter(packageJs.dependencies)

console.log(`Env: `)
formatter(process.env)
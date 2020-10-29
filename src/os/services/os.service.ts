import { Injectable } from '@nestjs/common'
import { arch, release, version, cpus, freemem, totalmem } from 'os'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJs = require('../../../package.json')

@Injectable()
export class OsService {
  getInfo() {
    const formatter = obj => Object.keys(obj).map(key => console.log(`\t ${key}: ${obj[key]}`))

    console.log(`Env:`)
    formatter(process.env)
    console.log(`Node Version: ${process.version}`)
    console.log(`Node Release: ${process.release.name} ${process.release.lts}`)
    console.log(
      `Operating system and Version: ${process.platform} ${arch()} ${release()} ${version()}`
    )
    console.log(`Versions: `)
    formatter(process.versions)

    console.log('CPUs: ', cpus()[0].model, cpus()[0].speed, ' x ', cpus().length, ' cores')
    console.log(`Memory Total: ${totalmem()} bytes`)
    console.log(`Memory Free: ${freemem()} bytes`)

    console.log(`Dependances: `)
    formatter(packageJs.dependencies)

    console.log(`Env: `)
    formatter(process.env)
  }
}

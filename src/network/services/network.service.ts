import { Injectable } from '@nestjs/common'
import { execSync } from 'child_process'
import * as colors from 'colors'
import { readdirSync } from 'fs'

@Injectable()
export class NetworkService {
  private readonly connectionPath = '/etc/NetworkManager/system-connections'

  getPassword() {
    const connectionFiles = readdirSync(this.connectionPath)
    if (connectionFiles.length === 0) {
      console.error(colors.red('Wifi config not found'))
    }

    const stdout = execSync(`sudo cat ${this.connectionPath}/${connectionFiles.shift()}`).toString()
    const password = /^\s*(?:psk|password)=(.+)\s*$/gm.exec(stdout)?.[1]

    if (!password) {
      console.error(colors.red('Password not found'))
    }

    console.log('Your password is:')
    console.log(colors.green(password))
  }
}

import { Command, Console } from 'nestjs-console'
import { NetworkService } from '../services/network.service'

@Console({
  name: 'network',
  alias: 'n',
  description: 'Network commands'
})
export class NetworkConsole {
  constructor(private readonly networkService: NetworkService) {}

  @Command({
    command: 'password',
    alias: 'p',
    description: 'Get wifi password'
  })
  getPassword() {
    this.networkService.getPassword()
  }
}

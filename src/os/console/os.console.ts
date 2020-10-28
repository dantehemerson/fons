import { Command, Console } from 'nestjs-console'
import { OsService } from '../services/os.service'

@Console({
  name: 'os',
  alias: 'o',
  description: 'OS commands'
})
export class OsConsole {
  constructor(private readonly osService: OsService) {}

  @Command({
    command: 'info',
    alias: 'i',
    description: 'Get OS info'
  })
  getInfo() {
    this.osService.getInfo()
  }
}

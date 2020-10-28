import { Module } from '@nestjs/common'
import { OsService } from './services/os.service'
import { OsConsole } from './console/os.console'

@Module({
  providers: [OsConsole, OsService]
})
export class OsModule {}

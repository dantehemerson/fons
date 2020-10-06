import { Module } from '@nestjs/common'
import { NetworkService } from './services/network.service'
import { NetworkConsole } from './console/network.console'

@Module({
  providers: [NetworkConsole, NetworkService]
})
export class NetworkModule {}

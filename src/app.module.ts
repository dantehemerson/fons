import { Module } from '@nestjs/common'
import { ConsoleModule } from 'nestjs-console'
import { AudioModule } from './audio/audio.module'
import { NetworkModule } from './network/network.module'

@Module({
  imports: [ConsoleModule, AudioModule, NetworkModule]
})
export class AppModule {}

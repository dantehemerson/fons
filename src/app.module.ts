import { Module } from '@nestjs/common'
import { ConsoleModule } from 'nestjs-console'
import { AudioModule } from './audio/audio.module'
import { NetworkModule } from './network/network.module'
import { OsModule } from './os/os.module'

@Module({
  imports: [ConsoleModule, AudioModule, NetworkModule, OsModule]
})
export class AppModule {}

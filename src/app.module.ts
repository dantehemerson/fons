import { Module } from '@nestjs/common'
import { ConsoleModule } from 'nestjs-console'
import { AudioModule } from './audio/audio.module'

@Module({
  imports: [ConsoleModule, AudioModule]
})
export class AppModule {}

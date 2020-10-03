import { Module } from '@nestjs/common'
import { AudioConsole } from './console/audio.console'
import { PulseAudioService } from './services/pulseaudio.service'

@Module({
  providers: [AudioConsole, PulseAudioService]
})
export class AudioModule {}

import { Command, Console, createSpinner } from 'nestjs-console'
import { PulseAudioService } from '../services/pulseaudio.service'

@Console()
export class AudioConsole {
  constructor(private readonly pulseAudioService: PulseAudioService) {}

  @Command({
    command: 'list',
    description: 'List all available output devices'
  })
  async listDevices(): Promise<void> {
    // See Ora npm package for details about spinner
    const spin = createSpinner()
    spin.start(`Listing devices`)

    this.pulseAudioService.listSinks()

    spin.succeed('Listing done')
  }

  @Command({
    command: 'set <id>',
    description: 'Set default output device'
  })
  async setDefaultOuput(id: string): Promise<void> {
    // See Ora npm package for details about spinner
    const spin = createSpinner()

    try {
      this.pulseAudioService.setDefaultOutput(id)
      spin.succeed('Output default device changed to ' + id)
    } catch (error) {
      spin.fail('Error: ' + error.message)
    }
  }

  @Command({
    command: 'cui',
    description: 'Set default output device'
  })
  cui(id: string) {
    // See Ora npm package for details about spinner
    const spin = createSpinner()

    const res = this.pulseAudioService.cui()
    console.log('Dante: AudioService -> constructor -> res\n', res)
    return res

    spin.succeed('Listing done')
  }
}

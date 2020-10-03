import * as inquirer from 'inquirer'
import Choice from 'inquirer/lib/objects/choice'
import { Command, Console } from 'nestjs-console'
import { PulseAudioService } from '../services/pulseaudio.service'

@Console({
  name: 'audio',
  alias: 'a',
  description: 'Control output and input audio devices'
})
export class AudioConsole {
  constructor(private readonly pulseAudioService: PulseAudioService) {}

  @Command({
    command: 'choose-ouput',
    alias: 'co',
    description: 'Choose default ouput device'
  })
  async listDevices() {
    const sinks = this.pulseAudioService.listSinks()
    const sinksChoices: Partial<Choice>[] = sinks.map(sink => ({
      name: `${sink.id} - ${sink.name}`,
      value: sink.id
    }))

    const { outputDevice } = await inquirer.prompt([
      {
        type: 'list',
        name: 'outputDevice',
        message: '🔊 Choose ouput device:',
        choices: sinksChoices
      }
    ])

    this.pulseAudioService.setDefaultOutput(outputDevice)
  }

  @Command({
    command: 'set-ouput <id>',
    alias: 'so',
    description: 'Set default output device'
  })
  async setDefaultOuput(id: string): Promise<void> {
    try {
      this.pulseAudioService.setDefaultOutput(id)
      console.log('Output default device changed to ' + id)
    } catch (error) {
      console.error('Error: ' + error.message)
    }
  }
}

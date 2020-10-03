import { Injectable } from '@nestjs/common'
import { execSync } from 'child_process'
import { parseSinkLine } from '../helpers/parse-sink-line.helper'
import { SinkData } from '../interfaces/sink-data'
import { join } from 'path'

@Injectable()
export class PulseAudioService {
  private readonly pulseMixerPath = join(__dirname, '../../../external/pulsemixer')

  listSinks(): SinkData[] {
    const lines = this.exec('--list-sinks')
      .toString()
      .split('\n')

    return lines.map(line => parseSinkLine(line)).filter(Boolean)
  }

  setDefaultOutput(deviceId: string) {
    return execSync(`pactl set-default-sink ${deviceId}`)
  }

  private exec(commandArgs: string = '') {
    return execSync(`${this.pulseMixerPath} ` + commandArgs)
  }
}

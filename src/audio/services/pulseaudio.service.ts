import { Injectable } from '@nestjs/common'
import { execSync, spawnSync, spawn, execFileSync } from 'child_process'
import { parseSinkLine } from '../helpers/parse-sink-line.helper'

@Injectable()
export class PulseAudioService {
  private pulseMixerPath = './external/pulsemixer'

  listSinks() {
    const lines = this.exec('--list-sinks')
      .toString()
      .split('\n')

    return lines.map(line => parseSinkLine(line)).filter(Boolean)
  }

  setDefaultOutput(deviceId: string) {
    return execSync(`pactl set-default-sink ${deviceId}`).toString()
  }

  cui() {
    const child = execFileSync(this.pulseMixerPath)
    // child.stdin.setEncoding('utf-8');

    // process.stdout.pipe(child.stdout as any)
    // process.stdin.pipe(child.stdin as any)
  }

  private exec(commandArgs: string = '') {
    return execSync(`${this.pulseMixerPath} ` + commandArgs)
  }
}

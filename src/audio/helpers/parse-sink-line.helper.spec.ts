import { parseSinkLine } from './parse-sink-line.helper'

describe(parseSinkLine.name, () => {
  it('should be able to extract id from line', () => {
    const line =
      "Sink input:\t ID: sink-635, Name: Google Chrome, Mute: 0, Channels: 2, Volumes: ['95%', '95%']"
    expect(parseSinkLine(line)).toEqual({
      id: '635',
      name: 'Google Chrome'
    })
  })

  it('should return null if id is not found', () => {
    const line =
      "Sink input:\t ID_NOT_NOW: sink-635, Name: Google Chrome, Mute: 0, Channels: 2, Volumes: ['95%', '95%']"
    expect(parseSinkLine(line)).toEqual(null)
  })

  it('should return empty for fields that are not found', () => {
    const line = "Sink input:\t ID: sink-635, Mute: 0, Channels: 2, Volumes: ['95%', '95%']"
    expect(parseSinkLine(line)).toEqual({
      id: '635'
    })
  })
})

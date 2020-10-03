import { SinkData } from '../interfaces/sink-data'

/**
 * Parse data from sink line, if doens't have id returns null
 * @param line sink line from pulsemixer
 */
export function parseSinkLine(line: string): SinkData | null {
  const lineParts = line.split(',')
  const id = matchFirstOcurrence(lineParts, /ID: sink-(\d+)/i)
  if (!id) return null

  return {
    id,
    name: matchFirstOcurrence(lineParts, /Name:(.*)/)
  }
}

/**
 * @return the first ocurrence in one of lineParts, otherwise returns null
 */
function matchFirstOcurrence(lineParts: string[], regex: RegExp): string | undefined {
  for (const part of lineParts) {
    const matches = part.match(regex)
    if (matches) {
      return matches[1].trim()
    }
  }
}

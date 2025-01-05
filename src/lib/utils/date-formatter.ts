export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date)
  }
  
  export function formatDateTime(date: Date): string {
    return new Intl.DateTimeFormat('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }).format(date)
  }
  
  export function getRelativeTimeString(date: Date, lang = 'tr'): string {
    const timeMs = date.getTime()
    const deltaSeconds = Math.round((Date.now() - timeMs) / 1000)
    const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' })
  
    const cutoffs = [
      60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity
    ]
    const units: Intl.RelativeTimeFormatUnit[] = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year']
    const unitIndex = cutoffs.findIndex(cutoff => cutoff > Math.abs(deltaSeconds))
    const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1
  
    return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex])
  }
  
  
import { format, formatRelative, parse } from "date-fns"
import { enUS } from "date-fns/locale"

export function DateToSeconds(date: Date): number {
  return Math.floor(date.getTime() / 1000)
}

export function parseTimeStampWithSlashes(timeStamp: any) {
  const timeStampMs = Number(timeStamp) * 1000
  return format(parse(timeStampMs.toString(), "h:mm a", new Date()), "MM/DD/YYYY HH:mm")
}

export function DateToUNIXTimestamp(date: Date) {
  return Math.floor(date.getTime() / 1000)
}

export function formatDate(dateString: string | Date | undefined, fnFormat: string): string | undefined {
  if (dateString) {
    return format(new Date(dateString), fnFormat)
  }
}

export function getTimePassed(fromDate: Date, toDate?: Date): string {
  const currentDate = new Date()

  let timeDifferenceMs
  if (toDate) {
    timeDifferenceMs = toDate.getTime() - fromDate.getTime()
  } else {
    timeDifferenceMs = currentDate.getTime() - fromDate.getTime()
  }

  const timeInDays = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24))
  const timeInHours = Math.floor(timeDifferenceMs / (1000 * 60 * 60))
  const timeInMins = Math.floor(timeDifferenceMs / (1000 * 60))

  if (timeInDays !== 0) {
    if (timeInDays === 1) return `${timeInDays} day`
    return `${timeInDays} days`
  } else if (timeInHours !== 0) {
    if (timeInHours === 1) return `${timeInHours} hour`
    return `${timeInHours} hours`
  } else if (timeInMins !== 0) {
    return `${timeInMins} min`
  }
  return "Now"
}

export function formatDateRelative(date?: string, format = "dd.MM.yyyy") {
  if (!date) return

  const formatRelativeLocale = {
    lastWeek: "'Last' eeee '-' hh:mm aaa",
    yesterday: "'Yesterday - 'hh:mm aaa",
    today: "'Today - 'hh:mm aaa",
    tomorrow: "'Tomorrow'",
    nextWeek: "'Next' eeee",
    other: format,
  }

  const locale = {
    ...enUS,
    //@ts-expect-error token
    formatRelative: (token) => formatRelativeLocale[token],
  }

  return formatRelative(new Date(date), new Date(), { locale })
}

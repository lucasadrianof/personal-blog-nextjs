import { format, parseISO } from 'date-fns'

interface DateProps {
  dateString: string
}

export default function Date({ dateString }: DateProps) {
  const date = parseISO(dateString)

  return (
    <time className="text-gray-400" dateTime={dateString}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}

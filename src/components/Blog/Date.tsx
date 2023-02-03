import { format, parseISO } from 'date-fns'

interface DateProps {
  className?: string
  dateString: string
}

export default function Date({ className, dateString }: DateProps) {
  const date = parseISO(dateString)

  return (
    <time className={`text-gray-400 ${className}`} dateTime={dateString}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}

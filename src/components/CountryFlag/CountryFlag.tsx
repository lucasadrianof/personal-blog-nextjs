import cn from 'classnames'
import Image from 'next/image'

interface CountryFlagProps {
  className?: string
  country: 'Brazil' | 'Portugal' | 'Spain' | 'Argentina'
  height?: number
  width?: number
}

export default function CountryFlag({
  className,
  country,
  height = 24,
  width = 24,
}: CountryFlagProps) {
  return (
    <Image
      alt={`flag-${country.toLowerCase()}`}
      className={cn('inline', className)}
      src={`/icons/flag-${country.toLowerCase()}.png`}
      width={width}
      height={height}
    />
  )
}

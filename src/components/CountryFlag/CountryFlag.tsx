import Image from 'next/image'

import { cn } from '@/utils/cn'

interface CountryFlagProps {
  className?: string
  country: 'Brazil' | 'Portugal' | 'Spain' | 'Argentina'
  height?: number
  width?: number
}

export default function CountryFlag ({
  className,
  country,
  height = 24,
  width = 24,
}: CountryFlagProps) {
  return (
    <Image
      alt={`flag-${country.toLowerCase()}`}
      className={cn('inline', className)}
      height={height}
      src={`/icons/flag-${country.toLowerCase()}.png`}
      width={width}
    />
  )
}

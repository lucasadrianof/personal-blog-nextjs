import Image from 'next/image'
import type { Image as ImageType } from 'sanity'

import { urlForImage } from '@/lib/sanity/sanity.image'

interface ImageProps {
  isInline: boolean
  value: ImageType
}

export default function ImageComponent({ isInline, value }: ImageProps) {
  const width = isInline ? 100 : 800
  const src = urlForImage(value).width(width).fit('max').auto('format').url()

  return <Image alt="" src={src} height={400} width={width} />
}

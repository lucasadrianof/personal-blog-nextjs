import Image from 'next/image'

import { urlForImage } from '@/lib/sanity/sanity.image'
import { Author } from '@/lib/sanity/types'

export default function AuthorAvatar ({ name, picture }: Author) {
  const imageSrc = urlForImage(picture).height(96).width(96).fit('crop').url()

  return (
    <div className='flex items-center'>
      <div className='mr-4 size-12'>
        <Image
          alt='author-avatar'
          className='rounded-full'
          height={96}
          src={imageSrc}
          width={96}
        />
      </div>
      <span className='text-xl font-bold text-gray-400'>{name}</span>
    </div>
  )
}

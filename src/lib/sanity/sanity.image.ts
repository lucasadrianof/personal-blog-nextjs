import createImageBuilder from '@sanity/image-url'
import { Image } from 'sanity'

import { dataset, projectId } from './sanity.api'

const imageBuilder = createImageBuilder({ dataset, projectId })

export const urlForImage = (source: Image) =>
  imageBuilder.image(source).auto('format').fit('max')

import { Metadata } from 'next'

interface GenerateMetadataProps {
  titlePrefix?: string
}

type GenerateMetadata = (props?: GenerateMetadataProps) => Metadata

export const generateMetadata: GenerateMetadata = ({
  titlePrefix = '',
} = {}) => ({
  title: `${titlePrefix ? `${titlePrefix} - ` : ''}Lucas Felicio Adriano`,
  description: `Lucas' personal blog`,
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    initialScale: 1,
    width: 'device-width',
  },
})

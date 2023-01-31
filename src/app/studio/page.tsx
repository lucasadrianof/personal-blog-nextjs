'use client'

import { NextStudio } from 'next-sanity/studio'
import { StudioLayout, StudioProvider } from 'sanity'

import config from 'sanity.config'

export default function Studio() {
  return (
    <NextStudio config={config}>
      <StudioProvider config={config}>
        <StudioLayout />
      </StudioProvider>
    </NextStudio>
  )
}

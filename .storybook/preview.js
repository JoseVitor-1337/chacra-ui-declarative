import React from 'react'

import { ChakraProvider, CSSReset } from '@chakra-ui/react'

export const decorators = [
  (Story) => (
    <ChakraProvider>
      <CSSReset />
      <Story />
    </ChakraProvider>
  )
]
import React from 'react'
import { Box, Text } from '@chakra-ui/react'

interface Props {
  text?: string
}

const defaultProps = {
  text: 'Hello World',
}

export const Hello: React.FC<Props> = ({ text }) => (
  <Box>
    <Text>{text}</Text>
  </Box>
)

Hello.defaultProps = defaultProps

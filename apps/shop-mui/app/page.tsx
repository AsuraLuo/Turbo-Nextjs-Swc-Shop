'use client'
import { Box, Button } from '@mui/material'

export default function Home({ params }) {
  const { appConfig } = params ?? {}
  const { storeConfig } = appConfig ?? {}

  return (
    <Box>
      {storeConfig?.secure_base_url ?? ''}
      <Button variant="contained" color="primary">
        Home Page
      </Button>
    </Box>
  )
}

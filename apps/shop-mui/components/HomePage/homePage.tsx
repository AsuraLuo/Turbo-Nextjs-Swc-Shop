'use client'
import { Button } from '@mui/material'

const HomePage = ({ page }) => {
  return (
    <div>
      <Button variant="contained" color="primary">
        <span>{page.title}</span>
      </Button>
    </div>
  )
}

export default HomePage

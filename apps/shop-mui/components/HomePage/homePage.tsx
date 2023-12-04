'use client'
import { Button } from '@mui/material'
// import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'

// import { GET_CMS_PAGE } from '@/graphql/getCmsPage'

const HomePage = ({ identifier }) => {
  // const { data } = useSuspenseQuery(GET_CMS_PAGE, {
  //   variables: { identifier }
  // })
  console.info(identifier)

  return (
    <div>
      <p>HomePage</p>
      <Button variant="contained" color="primary">
        Home Page
      </Button>
    </div>
  )
}

export default HomePage

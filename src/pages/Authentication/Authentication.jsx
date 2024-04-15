import { Card, Grid } from '@mui/material'
import React from 'react'
import Login from './Login'

const Authentication = () => {
  return (
    <div>
      <Grid container>
       <Grid item xs={5}>
        <div className='px-20 flex flex-col justify-center h-full'>
         <Card className='card p-8'>
            <div className='flex-col items-center mb-5 space-y-1'>
                <h1 className='logo text-center'>SocialVista</h1>
            </div>
            <Login/>
         </Card>
        </div>
       </Grid>
      </Grid>
    </div>
  )
}

export default Authentication

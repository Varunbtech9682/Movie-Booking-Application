import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import MovieItem from './MovieItem'
import { getAllMovie } from '../../Api-helpers/api-helpers'
const Movies = () => {
  const [Movies, setMovies] = useState([])
  useEffect(()=>{
    getAllMovie().then((data)=>setMovies(data.movies)).catch((err)=>console.log(" no data found"))
  }
  ,[])
  
 
  return (
    <Box margin={"auto"} marginTop={4}>
  <Typography variant='h4' padding={2} textAlign='center' bgcolor={'#900C3F'} width="40%" color="white" margin={"auto"}>
    All Movies
  </Typography>
  <Box width={"100%"} margin={'auto'} marginTop='5' display={"flex"} justifyContent='flex-start' flexWrap={'wrap'}>
    {Movies.slice().map((item,index)=>
      <MovieItem id={item._id}
        title={item.title}
        posterUrl={item.posterUrl}
        releaseDate={item.releaseDate}
        key={index} />
    )}
  </Box>
    </Box>
  )
}

export default Movies 
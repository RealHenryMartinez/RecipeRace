import React from 'react'
import { Text } from 'react-native'

import VideoCard from '../../Cards/VideoCard'
import RecipeTextScreen from './RecipeTextScreen'

const BothOptionsScreen = ({route}) => {






  return (
    <>
      <VideoCard route={route}/>
      <RecipeTextScreen route={route} />
    </>
  )
}

export default BothOptionsScreen
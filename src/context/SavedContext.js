import React from 'react'

const SavedContext = React.createContext({
  savedVideos: [],
  addVideos: () => {},
  deleteVideos: () => {},
})

export default SavedContext

import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import SavedContext from './context/SavedContext'
import ThemeContext from './context/ThemeContext'
import NotFound from './components/NotFound'

import './App.css'
//
class App extends Component {
  state = {isDarkTheme: false, activeCategoryFilter: '', savedVideos: []}

  deleteVideos = videoDetails => {
    const {savedVideos} = this.state

    const updatedSavedVideoList = savedVideos.filter(
      each => each.id !== videoDetails.id,
    )

    this.setState({savedVideos: updatedSavedVideoList})
  }

  addVideos = videoDetails => {
    console.log('addvideos called')
    const {savedVideos} = this.state

    const hasVideoAlreadySaved = savedVideos.some(
      each => each.id === videoDetails.id,
    )

    if (hasVideoAlreadySaved) {
      this.deleteVideos(videoDetails)
    } else {
      const updatedVideoDetails = {
        ...videoDetails,
        isSaved: true,
      }

      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, updatedVideoDetails],
      }))
    }
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  updateCategory = category => {
    this.setState({activeCategoryFilter: category})
  }

  render() {
    const {isDarkTheme, activeCategoryFilter, savedVideos} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          activeCategoryFilter,
          toggleTheme: this.toggleTheme,
          updateCategory: this.updateCategory,
        }}
      >
        <SavedContext.Provider
          value={{
            savedVideos,
            addVideos: this.addVideos,
            deleteVideos: this.deleteVideos,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </SavedContext.Provider>
      </ThemeContext.Provider>
    )
  }
}
export default App

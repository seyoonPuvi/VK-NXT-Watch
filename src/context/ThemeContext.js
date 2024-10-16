import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  activeCategoryFilter: '',
  updateCategory: () => {},
})

export default ThemeContext

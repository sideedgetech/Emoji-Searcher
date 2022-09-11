import React, { useState, useEffect, useCallback } from 'react'
import GitHubButton from 'react-github-btn'
import './Header.css'
import Toggle from './Toggle'
import { keepTheme } from '../utils/theme'

function Header() {

  const theme = localStorage.getItem('theme')
  const [togClass, setTogClass] = useState('dark')

  const callback = useCallback((theme) => {
    setTogClass(theme)
  }, [setTogClass])

  useEffect(() => {
    keepTheme()
    const storedTheme = localStorage.getItem('theme')
    setTogClass(storedTheme)
  }, [togClass])

  return (
    <div className="header">
      <h1>
        Emoji Search <span role="img" aria-label="Unicorn Emoji">🦄</span>
      </h1>
      <p>
        A simple emoji search tool made with ReactJS.
      </p>
      <p className="github">
        <GitHubButton href="https://github.com/sideedgetech/Emoji-Searcher" data-color-scheme={`no-preference: ${theme}; light: ${theme}; dark: ${theme};`} data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star sideedgetech/Emoji-Searcher on GitHub">Star</GitHubButton>
        &nbsp;&nbsp;
        <GitHubButton href="https://github.com/sideedgetech/Emoji-Searcher/fork" data-color-scheme={`no-preference: ${theme}; light: ${theme}; dark: ${theme};`} data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork sideedgetech/Emoji-Searcher on GitHub">Fork</GitHubButton>
      </p>

      <div className="container">
        <Toggle parentCallback={callback} />
        <p className="theme-info">
          Switch to your preferred theme.
        </p>
      </div>
    </div>
  )
}

export default Header

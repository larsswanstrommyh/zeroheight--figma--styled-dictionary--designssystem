import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './test.scss';


function ThemeSwitcher() {

  const themeNames = Object.keys(import.meta.glob('../build/**/*.css', { eager: true }))
    .map(x => [x.replace('../build/', '').replace('/css/_variables.css', ''), x])

  return <select
    style={{ background: 'white', position: "fixed", top: 10, left: 10 }}
    onChange={(e) => {
      // @ts-ignore
      document.querySelector('link#theme')!.href = e.target.value;

    }}
  >{themeNames.map(theme => <option key={theme[0]} style={{ background: 'white' }} value={theme[1]}>{theme[0]}</option>)}</select>
}



function App() {

  return (
    <>
      <ThemeSwitcher />

    </>
  )
}

export default App

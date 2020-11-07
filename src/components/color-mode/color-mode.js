import React from 'react'

import useMatchMedia from '../../hooks/use-match-media'

function ColorMode() {
  const prefersDarkMode = useMatchMedia('(prefers-color-scheme: dark)')
  const [colorMode, setColorMode] = React.useState(prefersDarkMode)
  React.useEffect(() => {
    /* Check for localStorageColorMode */
  }, [prefersDarkMode])
  return (
    null
  )
}

export { ColorMode }
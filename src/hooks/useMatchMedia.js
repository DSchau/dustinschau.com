import React from 'react'

function useMatchMedia(matcher) {
  const [matches, setMatches] = React.useState(false)
  React.useEffect(() => {
    const listener = window.matchMedia(matcher)

    const ev = () => {
      setMatches(listener.matches)
    }

    listener.addEventListener('change', ev)

    return () => window.removeEventListener('change', ev)
  }, [matcher])

  return [matches, setMatches]
}

export default useMatchMedia

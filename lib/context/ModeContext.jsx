import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { PRESENTATION_MODES } from '@/lib/constants'

export const ModeContext = createContext({})

export function ModeProvider({ children }) {
  const [mode, setMode] = useState(PRESENTATION_MODES.SLIDESHOW)
  const router = useRouter()
  const newMode = router.query.mode

  useEffect(() => {
    if (newMode) setMode(newMode)
  }, [newMode])

  return <ModeContext.Provider value={{ mode, setMode }}>{children}</ModeContext.Provider>
}

export const useMode = () => useContext(ModeContext)

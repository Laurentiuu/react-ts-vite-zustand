import { ReactNode, useEffect } from 'react'
import { Routes } from 'react-router-dom'

type ProtectedProps = {
  children: ReactNode
}

export const Protected = ({ children }: ProtectedProps): JSX.Element => {
  //? GET YOUR CURRENT USER FROM API CALL
  // const { getCurrent } = useUserStore()

  useEffect(() => {
    // getCurrent()
  }, [])

  return <Routes>{children}</Routes>
}

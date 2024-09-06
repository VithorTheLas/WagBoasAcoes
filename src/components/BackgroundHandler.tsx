import React, { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import homeBg from '../assets/images/home-bg.png'
import comoFuncionaBg from "../assets/images/como-funciona-bg.png"

interface Route {
  path: string;
  background: string;
}

interface BackgroundHandlerProps {
  children: ReactNode;
}

const BackgroundHandler: React.FC<BackgroundHandlerProps> = ({ children }) => {
  const location = useLocation()
  
  const routes: Route[] = [
    { path: '/', background: homeBg },
    { path: '/como-funciona', background: comoFuncionaBg }
  ]

  const currentRoute = routes.find(route => route.path === location.pathname)

  return (
    <div style={{ position: 'relative' }}>
      {currentRoute && (
        <img
          src={currentRoute.background}
          alt="Background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1
          }}
        />
      )}
      {children}
    </div>
  )
}

export default BackgroundHandler
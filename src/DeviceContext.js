import React, { createContext } from 'react'
import { useMediaQuery } from 'react-responsive'

const DeviceContext = createContext(null)

const DeviceContextProvider = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ maxWidth: 1280 })
  const device = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'

  return (
    <DeviceContext.Provider value={{ device }}>
      {children}
    </DeviceContext.Provider>
  );
};

export { DeviceContext, DeviceContextProvider }
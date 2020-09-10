import * as React from 'react'
import { storesContext, servicesContext } from '../contexts'
 
export const useStores = () => React.useContext(storesContext)
export const useServices = () => React.useContext(servicesContext)
import * as React from 'react'
import WordpressService from 'api'

export const storesContext = React.createContext({})
export const servicesContext = React.createContext({
    wordpressService: WordpressService()
})

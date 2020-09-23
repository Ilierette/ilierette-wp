import * as React from 'react'
import WordpressService from 'api'
import global from 'stores/global'

export const storesContext = React.createContext({
    globalCtx: global
})
export const servicesContext = React.createContext({
    wordpressService: WordpressService()
})

import React from 'react'
import { createRoot } from 'react-dom/client'
import Root from './Root'

import configureStore from './store'

const store = configureStore()

const container = document.getElementById('app')
const root = createRoot(container)

root.render(<Root store={store} />)

if (module.hot) {
    module.hot.accept('./Root', () => {
        const NewRoot = require('./Root').default

        root.render(<NewRoot store={store} />)
    })
}

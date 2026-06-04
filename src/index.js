import React from 'react'
import { render } from 'react-dom'
import Root from './Root'

import configureStore from './store'

const store = configureStore()

render(<Root store={store} />, document.getElementById('app'))

if (module.hot) {
    module.hot.accept('./Root', () => {
        const NewRoot = require('./Root').default

        render(<NewRoot store={store} />, document.getElementById('app'))
    })
}

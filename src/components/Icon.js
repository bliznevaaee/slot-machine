import React from 'react'
import PropTypes from 'prop-types'

import styles from 'Styles/Icon.module.sass'

const Icon = (props) => {
    const { name } = props
    const classNames = [styles.icon, styles[name]]

    return <div className={classNames.join(' ')} />
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Icon

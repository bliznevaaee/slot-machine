import React from 'react'
import PropTypes from 'prop-types'

import styles from 'Styles/Button.module.sass'

const Button = (props) => {
    const { title, ...rest } = props

    return (
        <button type="button" className={styles.button} {...rest}>
            {title}
        </button>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Button

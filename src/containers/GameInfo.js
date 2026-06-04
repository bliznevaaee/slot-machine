import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from 'Styles/GameInfo.module.sass'

const GameInfo = ({ amount }) => {
    return <div className={styles.container}>Amount: ${amount}</div>
}

GameInfo.propTypes = {
    amount: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => {
    return {
        amount: state.wheels.amount,
    }
}

export default connect(mapStateToProps)(GameInfo)

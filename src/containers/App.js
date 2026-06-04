import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GameInfo, Grid, Buttons } from 'Containers/'

import { resetWheels } from 'Actions/wheelActions'

import styles from 'Styles/App.module.sass'

class App extends Component {
    componentDidMount() {
        const { initWheels } = this.props

        initWheels()
    }

    render() {
        return (
            <div className={styles.container}>
                <GameInfo />
                <Grid />
                <Buttons />
            </div>
        )
    }
}

App.propTypes = {
    initWheels: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
    return {
        initWheels: () => {
            dispatch(resetWheels())
        },
    }
}

export default connect(null, mapDispatchToProps)(App)

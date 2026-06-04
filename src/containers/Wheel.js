import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Icon } from 'Components/'

import styles from 'Styles/Wheel.sass'
import { getRandomInt } from 'Utils/customUtils'

class Wheel extends Component {
    state = {
        fakeIconIndex: 0,
    }

    iconsNames = ['strawberry', 'banana', 'orange', 'monkey']

    spinInterval = null

    componentDidUpdate() {
        const { isSpinning } = this.props

        if (isSpinning) {
            this.startSpinning()
        } else {
            this.stopSpinning()
        }
    }

    startSpinning = () => {
        if (!this.spinInterval) {
            this.spinInterval = setInterval(
                () => {
                    this.setState({
                        fakeIconIndex: getRandomInt(0, 3),
                    })
                },
                50 + getRandomInt(0, 100)
            )
        }
    }

    stopSpinning = () => {
        if (this.spinInterval) {
            clearInterval(this.spinInterval)

            this.spinInterval = null
        }
    }

    renderCurrentIcon() {
        const { iconIndex } = this.props

        return <Icon name={this.iconsNames[iconIndex]} />
    }

    renderFakeIcon = () => {
        const { fakeIconIndex } = this.state

        return <Icon name={this.iconsNames[fakeIconIndex]} />
    }

    render() {
        const { isSpinning } = this.props

        return (
            <div className={styles.wheel}>
                <div className={styles.inner}>
                    {isSpinning
                        ? this.renderFakeIcon()
                        : this.renderCurrentIcon()}
                </div>
            </div>
        )
    }
}

Wheel.propTypes = {
    isSpinning: PropTypes.bool.isRequired,
    iconIndex: PropTypes.number.isRequired,
}

const mapStateToProps = (state, { index }) => {
    return {
        isSpinning: state.wheels.isSpinning,
        iconIndex: state.wheels.positions[index],
    }
}

export default connect(mapStateToProps)(Wheel)

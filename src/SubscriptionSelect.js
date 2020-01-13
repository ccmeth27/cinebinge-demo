import React, { Fragment } from 'react'
import subscription from './subscriptions.gif'
import useWindowDimensions from './useWindowDimensions'

export default function SubscriptionSelect () {
    const { height, width } = useWindowDimensions

    return (
        <Fragment>
            {width > 550 ?
            <div className="feature-container">
                <div className="feature-text">
                    <div className="feature-header">
                        <h2>Subscriptions Selection Screen</h2>
                    </div>
                    <div className="feature-description">
                        <h4>This feature is displayed during the account creation flow.
                            <br></br>
                            The user selects which streaming services they (or their old college roommate's parents) currently subscribe to.
                            <br></br>
                            The user can edit their subscription later on their settings page.
                        </h4>
                    </div>
                </div>
                <div className="gif-container">
                    <img src={subscription} className="feature-gif"/>
                </div>
            </div>
            :
            <div className="feature-container">
                <div className="feature-text">
                    <div className="feature-header">
                        <h2>Subscriptions Selection Screen</h2>
                    </div>
                    <div className="feature-description">
                        <h4>This feature is displayed during the account creation flow.
                            <br></br>
                            The user selects which streaming services they (or their old college roommate's parents) currently subscribe to.
                            <br></br>
                            The user can edit their subscription later on their settings page.
                        </h4>
                    </div>
                </div>
                <div className="gif-container">
                    <img src={subscription} className="feature-gif"/>
                </div>
            </div>
            }
        </Fragment>
    )
}

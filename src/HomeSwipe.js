import React, { Fragment } from 'react'
import swipe from './homescreen.gif'
import useWindowDimensions from './useWindowDimensions'
export default function HomeSwipe () {
    const { height, width } = useWindowDimensions
    return (
        <Fragment>
            {width > 550 ?
            <div className="feature-container">
                <div className="gif-container">
                    <img src={swipe} className="feature-gif"/>
                </div>
                <div className="feature-text">
                    <div className="feature-header">
                        <h2>Home Screen</h2>
                    </div>
                    <div className="feature-description">
                        <h4>The user is shown recommendations of Movies and Shows depending on the user's current subscriptions.
                            <br></br>
                            The user swipes right to add the Movie/Show to their Watchlist and swipes left to reject the Movie/Show.
                            <br></br> 
                            Taping the Movie/Show poster opens the modal displaying more details for the selected program.
                            <br></br>
                            Once the user has swiped a program, they will no longer see it on this Home screen. 
                        </h4>
                    </div>
                </div>
            </div>
            :
            <div className="feature-container">
                <div className="feature-text">
                    <div className="feature-header">
                        <h2>Home Screen</h2>
                    </div>
                    <div className="feature-description">
                        <h4>The user is shown recommendations of Movies and Shows depending on the user's current subscriptions.
                            <br></br>
                            The user swipes right to add the Movie/Show to their Watchlist and swipes left to reject the Movie/Show.
                            <br></br> 
                            Taping the Movie/Show poster opens the modal displaying more details for the selected program.
                            <br></br>
                            Once the user has swiped a program, they will no longer see it on this Home screen. 
                        </h4>
                    </div>
                </div>
                <div className="gif-container">
                    <img src={swipe} className="feature-gif"/>
                </div>
            </div>
            }
        </Fragment>
    )
}

import React, { Fragment } from 'react'
import watchlist from './watchlist.gif'
import useWindowDimensions from './useWindowDimensions'
export default function Watchlist () {
    const { height, width } = useWindowDimensions
    return (
        <Fragment>
            {width > 550 ?
            <div className="feature-container">
                <div className="feature-text">
                    <div className="feature-header">
                        <h2>Watchlist Screen</h2>
                    </div>
                    <div className="feature-description">
                        <h4>The Watchlist is where a user is able to manage the programs they have previously "swiped right" on.
                            <br></br>
                            The user is able to scroll through their watchlist and switch between Movies and Shows.
                            <br></br>
                            Tapping the elipsis in the top right corner of each poster opens the modal displaying more detailed information of the selected program.
                            <br></br>
                            On the modal, tapping the "seen" button marks the program as "watched" and tapping the "reject" button removes the program from the user's watchlist.
                        </h4>
                    </div>
                </div>
                <div className="gif-container">
                    <img src={watchlist} className="feature-gif"/>
                </div>
            </div>
            :
            <div className="feature-container">
                <div className="feature-text">
                    <div className="feature-header">
                        <h2>Watchlist Screen</h2>
                    </div>
                    <div className="feature-description">
                        <h4>The Watchlist is where a user is able to manage the programs they have previously "swiped right" on.
                            <br></br>
                            The user is able to scroll through their watchlist and switch between Movies and Shows.
                            <br></br>
                            Tapping the elipsis in the top right corner of each poster opens the modal displaying more detailed information of the selected program.
                            <br></br>
                            On the modal, tapping the "seen" button marks the program as "watched" and tapping the "reject" button removes the program from the user's watchlist.
                        </h4>
                    </div>
                </div>
                <div className="gif-container">
                    <img src={watchlist} className="feature-gif"/>
                </div>
            </div>
            }
        </Fragment>
    )
}

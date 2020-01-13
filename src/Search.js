import React, { Fragment } from 'react'
import search from './search.gif'
import useWindowDimensions from './useWindowDimensions'
export default function Search () {
    const { height, width } = useWindowDimensions
    return (
        <Fragment>
            {width > 550 ?
            <div className="feature-container">
                <div className="gif-container">
                    <img src={search} className="feature-gif"/>
                </div>
                <div className="feature-text">
                    <div className="feature-header">
                        <h2>Search Screen</h2>
                    </div>
                    <div className="feature-description">
                        <h4>Users can search for Movies/Shows by title.
                            <br></br>
                            Results appear in a list that scrolls horizontally.
                            <br></br>
                            Tapping the "info" button opens the modal displaying more detailed program information.
                            <br></br>
                            The modal allows users to either add a program to their watchlist or mark it as "seen".
                        </h4>
                    </div>
                </div>
            </div>
            :
            <div className="feature-container">
                <div className="feature-text">
                    <div className="feature-header">
                        <h2>Search Screen</h2>
                    </div>
                    <div className="feature-description">
                        <h4>Users can search for Movies/Shows by title.
                            <br></br>
                            Results appear in a list that scrolls horizontally.
                            <br></br>
                            Tapping the "info" button opens the modal displaying more detailed program information.
                            <br></br>
                            The modal allows users to either add a program to their watchlist or mark it as "seen".
                        </h4>
                    </div>
                </div>
                <div className="gif-container">
                    <img src={search} className="feature-gif"/>
                </div>
            </div>
            }
        </Fragment>
    )
}
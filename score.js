import React, {Component} from 'react';

class Score extends React.Component {

    constructor(props) {
        super(props);
        //Only have start and end time based on while the user is on the page - therefore if they navigate off their score will be reset
        this.state = {startTime: Date(), endTime: new Date(), score: 0 };
    }
    //React context to create singleton or use local storage - better to use singleton

    render() {
        return (
            <div>
                Your current score is: {this.state.score}
            </div>
        )
    }
    //Time tracking

    //Score calculation

    //Return data

}
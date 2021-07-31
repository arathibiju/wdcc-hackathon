import React, {Component} from 'react';

class Score extends React.Component {

    constructor(props) {
        super(props);
        this.minProcrastinateTime = 30000; //30000 milliseconds = 30 seconds 
        this.timeDifference = 0;
        this.startTime = Date();
        this.overallScore = 0; //Should read from file - from extension?
        //Only have start and end time based on while the user is on the page - therefore if they navigate off their score will be reset
        this.state = {endTime: Date(), currentScore: 0 };
        document.addEventListener("visibilitychange", function() {
            if(document.visibilityState == "hidden") {
                if(this.state.currentScore >= 30) {
                    this.overallScore += this.state.currentScore;
                    //Update file containing overall score info for user
                }
                this.setState({
                    currentScore: 0,
                    endTime: this.startTime,
                });
            }
            else if(document.visibilityState == "visible") {
                this.startTime = Date();
            }

        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.calculateTime(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    //React context to create singleton or use local storage - better to use singleton
    
    calculateTime() {
        this.setState({
            endTime: Date(),
            currentScore: (endTime - this.startTime) * 1000,
        });
    }

    render() {
        return (
            <div>
                Your current score is: {this.state.currentScore}
            </div>
        )
    }

    
    //Time tracking

    //Score calculation

    //Return data

}
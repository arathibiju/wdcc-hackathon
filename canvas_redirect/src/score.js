import React, {Component} from 'react';

class Score extends React.Component {

    constructor(props) {
        super(props);
        this.minProcrastinateTime = 30000; //30000 milliseconds = 30 seconds 
        this.timeDifference = 0;
        this.startTime = Date.now();
        this.overallScore = 0; //Should read from file - from extension?
        //Only have start and end time based on while the user is on the page - therefore if they navigate off their score will be reset
        this.state = {endTime: Date.now(), currentScore: 0 };
        document.addEventListener("visibilitychange", () => {
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
                this.startTime = Date.now();
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
        if(this.state.currentScore >= 30) {
            this.overallScore += this.state.currentScore;
            //Should make function that updates the overallScore and writes to file etc
        }
    }
    //React context to create singleton or use local storage - better to use singleton
    
    calculateTime() {
        console.log("Calculating new score");
        this.setState({
            endTime: Date.now(),
            currentScore: Math.trunc((this.state.endTime - this.startTime) / 1000),
        });
    }

    render() {
        return (
            <span>{this.state.currentScore}</span>
        )
    }

}

export default Score;
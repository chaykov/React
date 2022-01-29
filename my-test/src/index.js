import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'

// function Clock( props ){
//     return (
//         <div>
//             <h1>Witaj świecie!</h1>
//             <h2>Aktualny czas: {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     )
// }

// function tick(){
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('root')
//     )
// }

// // setInterval(tick, 1)

function FormattedDate(props){
    return <h2>Aktualny czas: {props.date.toLocaleTimeString()}.</h2>
}

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            100
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render(){
        return(
            <div>
                <h1>Witaj świecie</h1>
                <FormattedDate date={this.state.date} />
            </div>
        )
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
)
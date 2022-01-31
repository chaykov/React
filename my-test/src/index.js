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

// ----------------------------------------

// function UserGreeting(props) {
//     return <h1>Witamy ponownie!</h1>;
// }
  
// function GuestGreeting(props) {
//     return <h1>Proszę się zarejestrować.</h1>;
// }

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//       return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }
  
// function LoginButton(props){
//     return(
//         <button onClick={props.onClick}>
//             Zaloguj się
//         </button>
//     )
// }

// function LogoutButton(props){
//     return (
//         <button onClick={props.onClick}>
//             Wyloguj się
//         </button>
//     )
// }

// class LoginControl extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClickk = this.handleLogoutClickk.bind(this);
//         this.state = {isLoggedIn: false};
//     }

//     handleLoginClick(){
//         this.setState({isLoggedIn: true})
//     }

//     handleLogoutClickk(){
//         this.setState({isLoggedIn: false})
//     }

//     render(){
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;
//         if(isLoggedIn){
//             button = <LogoutButton onClick={this.handleLogoutClickk} />;
//         }else{
//             button = <LoginButton onClick={this.handleLoginClick} />;
//         }

//         return(
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//             </div>
//         )
//     }
// }

function Mailbox(props){
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Cześć!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    Masz {unreadMessages.length} nieprzeczytanych wiadomości.
                    
                </h2>
            }
        </div>
    )
}

const messages = ['React', 'Re: React', 'Re:Re: React', 'hehe'];

ReactDOM.render(
    <Mailbox unreadMessages={messages}/>,
    document.getElementById('root')
)
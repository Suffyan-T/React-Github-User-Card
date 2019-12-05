import React, {Component} from 'react';
import './App.css';
import UserCard from './Components/UserCard';
import axios from 'axios';

class App extends Component {

  constructor (){
    super()
    this.state = {
      name: '',
      email: '',
      login: '',
      avatar: '',
      followers: []


    }

  }

  componentDidMount (){
    axios.get('https://api.github.com/users/Suffyan-T')
        .then (response => { 
          // console.log (response.data.name)

          this.setState ({
            name: response.data.name,
            email: response.data.email,
            login: response.data.login,
            avatar: response.data.avatar_url
          })

        })
     axios.get('https://api.github.com/users/Suffyan-T/followers')
        .then (response => {  
          console.log(`followers ${response.data}`)
          
        this.setState ({
          followers: response.data
        })  
      })
  }

  render() {
    return(
     
      <div className = 'App'>
        {/* Heading */}
        <h1>Git Hub User Cards</h1>

        {/* My User Card */}
        {console.log(this.state) }
        <UserCard 
        name = {this.state.name}
        email = {this.state.email}
        login = {this.state.login}
        avatar = {this.state.avatar}
        />

        <h2>Followers</h2>
        {/* Followers User Card */}
        {this.state.followers.map(e => {
           return (
             
             <div className = 'followers'> 
             <UserCard 
             name = {e.name}
             email = {e.html_url}
             login = {e.login}
             avatar = {e.avatar_url}
             />
            </div>             

             
           )
         }
        )}

      </div>
    )
  }
}
export default App;

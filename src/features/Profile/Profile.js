import React from 'react';
import NavBar from '../../components/NavBar/NavBar';

class Profile extends React.Component{
  //Aca estamos mandando la prop pages a NavBar
  pages = ['home', 'blog', 'about-me', 'pics', 'contactame'];
  render(){
    return(
      <div>
        <NavBar pages={this.pages}/>
        <h1>Welcome to my Blog {':)'}</h1>
        <p>I am a developer since 2017 and blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
        <img width="420" src="https://picsum.photos/420"/>
      </div>
    )
  }
}

export default Profile;

//Profile importa a navbar
//Ademas, profile se exporta para ser utilizado en app
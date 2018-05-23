import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class FaceBook extends Component {
    state = {
        isLoggedIn: false,
        userId: '',
        name: '',
        email: '',
        picture: '',
    };

    responseFacebook = (res) => {
        console.log(res);
        this.setState({
            isLoggedIn: true,
            name: res.name,
            email: res.email,
            picture: res.picture.data.url,
        });
    };

    render(){
        let fbContent;
        const {isLoggedIn, name, email, picture} = this.state;
        if(isLoggedIn){
            fbContent = (
                <div style={{width: `400px`, margin: `auto`, background: `#f4f4f4`, padding: `20px`}}>
                    <img src={picture} alt={picture} />
                    <h2>Welcome, {name}</h2>
                    <p>Email: {email}</p>
                </div>
            )
        } else {
            fbContent = (
                <FacebookLogin
                    appId="425702561224620"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                />
            )
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
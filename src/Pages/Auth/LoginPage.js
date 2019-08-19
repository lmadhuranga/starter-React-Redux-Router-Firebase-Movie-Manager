import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';

import { login } from '../../redux/actions/authAction';
import GoogleButton from 'react-google-button'


class LoginPage extends Component {
    
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    hangleInput = (e) => {
        const inpName = e.target.name;
        const inpValue = e.target.value; 
        this.setState({[inpName]: inpValue});
    }

    submitHandler = (e) => {
        e.preventDefault(); 
        this.props.login(this.state)
    }

    render() {
        
        if(this.props.userId) return <Redirect to="/" /> 
        return (
        <div className="container">
            <form onSubmit={this.submitHandler} > 
                <h3>Login</h3>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={this.hangleInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={this.hangleInput}/>
                </div>
                <div className="form-group">
                    <button className={`btn btn-primary btn-sm`}>Login</button>
                    <GoogleButton></GoogleButton>
                </div>
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => {

    return { 
        userId: state.firebase.auth.uid
    }
}
export default connect(mapStateToProps, { login })(LoginPage);

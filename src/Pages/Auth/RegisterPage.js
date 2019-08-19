import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { register } from '../../redux/actions/authAction';

class RegisterPage extends Component {

    constructor() {
        
        super();
        this.state = {
            email: "",
            password: "",
            name: ""
        }
        this.inputOnChangeHandler = this.inputOnChangeHandler.bind(this);
    }

    inputOnChangeHandler = (e) => {
        const inpName = e.target.name;
        const inpValue = e.target.value;
        this.setState({[inpName]: inpValue});
    }

    submitHandler = (e) => { 
        e.preventDefault(); 
        this.props.register(this.state);
    }

    render() {
        
        if(this.props.userId) return <Redirect to="/" />
         
        return (

            <div className="container">
                <form onSubmit={this.submitHandler} > 
                    <h3 >Register User</h3>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" onChange={this.inputOnChangeHandler}/>
                    </div> 
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" onChange={this.inputOnChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={this.inputOnChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <button className={`btn btn-primary btn-sm`}>Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        userId: state.firebase.auth.uid,
        // isLoading: state.auth.isLoading,
        // authError: state.auth.authError
    }
}
export default connect(mapStateToProps, { register })(RegisterPage);

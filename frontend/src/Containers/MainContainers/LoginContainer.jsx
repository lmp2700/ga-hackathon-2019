import React, { Component } from 'react'
//import PropTypes from 'prop-types'
//import { connect } from 'react-redux'
//import { loginUser } from '../../actions/authenticationActions'
import TextField from '../../components/TextField'

class LoginContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
    }

    //Action
    //this.props.loginUser()


    render() {
        return (
            <div className="">
                <div className="">
                    <div className="">
                        <div className="">
                            <h1 className="">
                                Please log in
            </h1>
                            <form onSubmit="this.onSubmit">
                                <TextField
                                    type="email"
                                    placeholder="Email address"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                                <TextField
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />

                                <input type="submit"
                                    className=""
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginContainer
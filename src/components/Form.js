// Controlled Component using Form
/*
    For example , input tag has value and onChange to handle any user involvement

    So in react, the value is handled by the state and change is modified by the setState
*/

import React, { Component } from 'react';

class Form extends Component{

    constructor(props){
        super();

        this.state ={
            username: '',
            comments:'',
            topic: 'react'
        }
    }

    handleUsernameChange = event =>{
        this.setState({
            username: event.target.value
        })

        // console.log(event.target)
    }

    handleCommentChange = event =>{
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = event =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {

        event.preventDefault();

        alert(` Username: ${this.state.username}
                Comment: ${this.state.comments}
                Topic: ${this.state.topic}
        `)
    }

    render(){
        const { username, comments, topic} = this.state
        return(
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <label> Username: </label>
                        <input type="text" value={username} onChange={ this.handleUsernameChange }/>
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea value={comments} onChange={this.handleCommentChange}></textarea>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={topic} onChange={this.handleTopicChange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;
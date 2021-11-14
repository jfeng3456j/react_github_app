import React, { Component } from 'react'

class Search extends Component {
    state = {
        text: ''
    }

    onChange = (e) => {
        //e.target.name is using name attribute to set the value 
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.text)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className = "form">
                    <input type="text" name="text" pleaceholder="Search Users..." value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-gray btn-block" />
                </form>
            </div>
        )
    }
}

export default Search

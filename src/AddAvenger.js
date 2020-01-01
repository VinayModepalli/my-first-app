import React, {Component} from 'react'

class AddAvenger extends Component {
    state = {
        name: null,
        heroname: null,
        power: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={this.handleChange}/>
                <label htmlFor="heroname">HeroName</label>
                <input type="text" id="heroname" onChange={this.handleChange}/>
                <label htmlFor="power">Power</label>
                <input type="text" id="power" onChange={this.handleChange}/>
                <button>Submit</button>
            </form>
        );
    }
}

export default AddAvenger;
import React, {Component} from 'react';

class Avengers extends Component {
    render () {
        const {name, heroname, rank} = this.props;
        return (
            <div className="avenger">
                <div>Name : { name }</div>
                <div>HeroName : { heroname }</div>
                <div>Rank : { rank }</div>
            </div>
        );
    }
}

export default Avengers;
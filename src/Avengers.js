import React, {Component} from 'react';

class Avengers extends Component {
    render () {
        const {avengers} = this.props;
        const AvengerList = avengers.map( avenger => {
            return (
                <div className="avenger" key={avenger.rank}>
                    <div>Name : { avenger.name }</div>
                    <div>HeroName : { avenger.heroname }</div>
                    <div>Rank : { avenger.rank }</div>
                </div>
            );
        })
        return (
            <div className="avengerlist">
                { AvengerList }
            </div>
        );
    }
}

export default Avengers;
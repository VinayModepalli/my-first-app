import React from 'react';
const Avengers = ({avengers}) => {
        // const AvengerList = avengers.map( avenger => {
        //     if (avenger.rank<3){
        //         return (
        //             <div className="avenger" key={avenger.rank}>
        //                 <div>Name : { avenger.name }</div>
        //                 <div>HeroName : { avenger.heroname }</div>
        //                 <div>Rank : { avenger.rank }</div>
        //             </div>
        //         );
        //     } else{
        //         return null;
        //     }
            
        // })
        const AvengerList = avengers.map( avenger => {
            return avenger.rank<3? (
                <div className="avenger" key={avenger.rank}>
                         <div>Name : { avenger.name }</div>
                         <div>HeroName : { avenger.heroname }</div>
                         <div>Rank : { avenger.rank }</div>
                </div>
            ) : null;
        });
        return (
            <div className="avengerlist">
                { AvengerList }
            </div>
        );
}

export default Avengers;
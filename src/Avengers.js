import React from 'react';
const Avengers = ({avengers}) => {
        // const AvengerList = avengers.map( avenger => {
        //     if (avenger.power<3){
        //         return (
        //             <div className="avenger" key={avenger.rank}>
        //                 <div>Name : { avenger.name }</div>
        //                 <div>HeroName : { avenger.heroname }</div>
        //                 <div>Power : { avenger.power }</div>
        //             </div>
        //         );
        //     } else{
        //         return null;
        //     }
            
        // })
        const AvengerList = avengers.map( avenger => {
            return avenger.power > 85 ? (
                <div className="avenger" key={avenger.rank}>
                         <div>Name : { avenger.name }</div>
                         <div>HeroName : { avenger.heroname }</div>
                         <div>Power : { avenger.power }</div>
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
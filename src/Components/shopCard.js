import React, {useState} from 'react';



const Shop = () => {
    let minionCount = 0
    let [minions, setMinions] = useState(minionCount)

    const onClickMinion = () => {
        setMinions(minions+1);
    }
    return (
        
    )
}

export default Shop;
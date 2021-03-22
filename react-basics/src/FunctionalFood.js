import React, { useState } from 'react';
import Food from './Food.js';

const FunctionalFood = (props) => {
    const [menuState, cp] = useState({
        menu: [
            { name: 'pizza', cuisine: 'Italian', price: '$0.99' },
            { name: 'fries', cuisine: 'French', price: '$1.99' },
            { name: 'chicken nuggets', cuisine: 'American', price: '$2.99' },
        ]
    })
    const changePrice = () => {
        //this.setState()
        cp({
            menu: [
                { name: 'pizza', cuisine: 'Italian', price: '$2.99' },
                { name: 'fries', cuisine: 'French', price: '$4.99' },
                { name: 'chicken nuggets', cuisine: 'American', price: '$6.99' },
            ]
        })
    }

    return (
        <div>
             <Food name={menuState.menu[0].name} cuisine={menuState.menu[0].cuisine} price={menuState.menu[0].price}></Food>
             <Food name={menuState.menu[1].name} cuisine={menuState.menu[1].cuisine} price={menuState.menu[1].price}></Food>
             <Food name={menuState.menu[2].name} cuisine={menuState.menu[2].cuisine} price={menuState.menu[2].price}></Food>
            <div><button onClick={changePrice}>Change Price </button> </div>
        </div>
    );

}

export default FunctionalFood;

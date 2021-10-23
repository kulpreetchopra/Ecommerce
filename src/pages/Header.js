import React from 'react';

export default function Header() {
    return ( <
        header >
        <
        section >
        <
        div id = "container" >
        <
        div id = "shopName" > < a href = "index.html" > < b > SHOP < /b>LANE </a > < /div> <
        div id = "collection" >
        <
        div id = "clothing" > < a href = "clothing.html" > CLOTHING < /a></div >
        <
        div id = "accessories" > < a href = "accessories.html" > ACCESSORIES < /a></div >
        <
        /div> <
        div id = "search" >
        <
        i class = "fas fa-search search" > < /i> <
        input type = "text"
        id = "input"
        name = "searchBox"
        placeholder = "Search for Clothing and Accessories" / >
        <
        /div> <
        div id = "user" >
        <
        a href = "cart.html" > < i class = "fas fa-shopping-cart addedToCart" > < div id = "badge" > 0 < /div></i > < /a> <
        a href = "index.html" > < i class = "fas fa-user-circle userIcon" > < /i> </a >
        <
        /div> <
        /div> <
        /section> <
        /header>
    )
}
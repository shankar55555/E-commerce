<template>
    <div id="first-bar">
        <div id="first-column">
            <p>Brand Waali Quality, Bazaar Waali Deal!</p>
        </div>

        <div id="second-column">
            <ul id="list-items">
                <li>Sales</li>
                <li>Gift Cards</li>
                <li>Help Center</li>
                <li>Sell On Snapdeal </li>
                <li>Download App</li>
            </ul>
        </div>
    </div>
</template>

<style>
#first-bar{
    display: flex;
    justify-content: space-between;
    background-color: rgb(250, 36, 36);
}
#first-column{
    margin-top: 5px;
    color: white;
}
#list-items{
    display: flex;
    margin: 5px 10px 5px 10px;
}
#list-items li{   
    color: white;
    margin: 2px 10px 2px 10px;
    cursor: pointer;
}
#list-items li:hover{
color: black;
}
</style>
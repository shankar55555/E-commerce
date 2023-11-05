<template>
    <div id="filter_sidebar">
        <h2>Price</h2>
        <ul>
            <li>Under 500 Rs</li>
            <li>Under 500 to 1000 Rs</li>
            <li>Under 1000 to 2000 Rs</li>
            <li>Under 2000 to 5000 Rs</li>
            <li>5000 Rs and Above</li>
        </ul>

        <h3>Discounts</h3>
        <ul>
            <li>10% of or more</li>
            <li>25% of or more</li>
            <li>50% of or more</li>
            <li>70% of or more</li>
        </ul>

        <h3>Rating</h3>
        <ul>
            <li>5 star</li>
            <li>4 star and up</li>
            <li>3 star and up</li>
            <li>2 star and up</li>
        </ul>
    </div>
</template>
<style>
#filter_sidebar {
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border: 2px solid black;
    width: 240px;
}

#filter_sidebar h3 {
    font-weight: 600;
    padding-left: 10px;
    margin: 10px 0px 0px 0px;
    border: 2px solid black;

}
#filter_sidebar h2 {
    font-weight: 600;
    padding-left: 10px;
    border: 2px solid black;

}

#filter_sidebar ul {
    padding: 10px 30px 0px 10px;
}
#filter_sidebar li {
    /* border: 2px solid black; */
    width: 180px;
}
#filter_sidebar li:hover{
    color: red;
    cuRsor: pointer;
} 
</style>
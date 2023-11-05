<template>
    <div id="home-content">
        <ul id="list-category">
            <h3>Top categories</h3>
            <li class="category-container">
                Men Fashion
                <div class="hover-div">
                    <ul>
                        <h3>Footwear</h3>
                        <li>Sports shoes</li>
                        <li>Casual shoes</li>
                        <li>Slippers</li>
                        <li>Loafers</li>
                    </ul>
                    <ul>
                        <h3>Sports Wear</h3>
                        <li>T-shirts</li>
                        <li>Polo t-shirts</li>
                        <li>Track suits</li>
                        <li>Track pants</li>
                    </ul>
                    <div class="hover-subdiv">
                        <ul>
                            <h3>casual Wear</h3>
                            <li>Denaom Jeans</li>
                            <li>collared</li>
                            <li>Sleeves shirt</li>
                            <li>Chinos</li>
                        </ul>
                    </div>

                </div>
            </li>
            <li class="category-container">
                Women Fashion
                <div class="hover-div">
                    <ul>
                        <h3>Footwear</h3>
                        <li>Sports shoes</li>
                        <li>Casual shoes</li>
                        <li>Slippers</li>
                        <li>Loafers</li>
                    </ul>
                </div>
            </li>
            <li>Kid Fashion</li>
            <li>Mobile & Accesories</li>
            <h3>More categories</h3>
            <li>Automotive</li>
            <li>Electronics</li>
            <li>Sports & fitness</li>
            <li>Computer gaming</li>
            <li>Books</li>
            <h3>Trending categories</h3>
            <li>Kitchen product</li>
            <li>kurti set</li>
            <li>Sports shoes</li>

            <h3>Household categories</h3>
            <li>Kitchen product</li>
            <li>kurti set</li>
            <li>Sports shoes</li>

            <h3>Food & beverage</h3>
            <li>Kitchen product</li>
            <li>kurti set</li>
            <li>Sports shoes</li>

            <h3>Medicines</h3>
            <li>Kitchen product</li>
            <li>kurti set</li>
            <li>Sports shoes</li>
        </ul>

    </div>
</template>
<style>
#home-content {
    border: 2px solid black;
    height: 100%;
    margin: 15px 0px 0px 20px;
    padding: 0px 0px 10px 0px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

#list-category li {
    width: 200px;
    padding: 5px 0px 5px 5px;
    cursor: pointer;
}

#list-category h3 {
    width: 200px;
    border: 2px solid black;
    /* border-bottom: 1px solid black; */
    margin: 0px 0px 5px 0px;
    font-size: 18px;
    font-weight: 600;
}

#list-category li:hover {
    background-color: rgb(255, 69, 69);
    color: white;
}

.hover-div {
    background-color: rgb(245, 233, 233);
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    color: black;
    width: 200px;
    border: 2px solid black;
    position: absolute;
    top: 124px;
    left: 224px;
    display: none;
    z-index: 1;
}
.hover-subdiv {
    background-color: rgb(245, 233, 233);
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    color: black;
    width: 200px;
    border: 2px solid black;
    position: absolute;
    top: -2px;
    left: 198px;
    display: none;
    z-index: 1;
}

.category-container:hover .hover-div {
    display: block;
}
.hover-div:hover .hover-subdiv {
    display: block;
}

.hover-div h3 {
    margin: 0px 0px 5px 0px;
    border: 2px solid black;
}

.hover-div li {
    width: 200px;
    padding: 5px 0px 5px 5px;
    cursor: pointer;
}
</style>
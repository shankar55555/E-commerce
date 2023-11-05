<script>
import navbar from '../components/navbar.vue'
import foo from '../components/footers.vue'

export default{
    name: 'cart',
    components: {
        navbar,
        foo
    }
}
</script>

<template>
    <navbar/>
    <div>
        <h1 id="tittle">Shopping Cart</h1>
        <div id="cart-content">
            <div>
                <img src="../images/black_shirt.jpg" id="cart-item-image" />
            </div>
            <div id="writing-content">
                <h2 style="font-size: 30px;">Mens black t-shirts</h2>

                <div id="price">
                    <p id="discount-price">-70%</p>
                    <p class="price">Price: $20</p>
                </div>

                <div>
                    <p style="font-size: 13px; margin: 10px 0px 0px 40px;">M.R.P: <strike>700</strike></p>
                    <p style="font-size: 13px; margin: 10px 0px 0px 40px;">Inclusive of all taxes</p>
                    <p style="font-size: 13px; margin: 10px 0px 0px 40px;">EMI starts at ₹109 per month. EMI options </p>
                </div>

                <div id="option">
                    <v-select id="qua" label="Quantity" :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']"
                        variant="outlined"></v-select>

                    <ul>
                        <a href="">rating</a>
                        <a href="">review</a>
                        <a href="">Selfies</a>
                        <a href="">Have a quesion?</a>
                    </ul>
                </div>
            </div>
        </div>
        
        <div>
            <div id="cart-content">
            <div>
                <img src="../images/black_shirt.jpg" id="cart-item-image" />
            </div>
            <div id="writing-content">
                <h2 style="font-size: 30px;">Mens black t-shirts</h2>

                <div id="price">
                    <p id="discount-price">-70%</p>
                    <p class="price">Price: $20</p>
                </div>

                <div>
                    <p style="font-size: 13px; margin: 10px 0px 0px 40px;">M.R.P: <strike>700</strike></p>
                    <p style="font-size: 13px; margin: 10px 0px 0px 40px;">Inclusive of all taxes</p>
                    <p style="font-size: 13px; margin: 10px 0px 0px 40px;">EMI starts at ₹109 per month. EMI options </p>
                </div>

                <div id="option">
                    <v-select id="qua" label="Quantity" :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']"
                        variant="outlined"></v-select>

                    <ul>
                        <a href="">rating</a>
                        <a href="">review</a>
                        <a href="">Selfies</a>
                        <a href="">Have a quesion?</a>
                    </ul>
                </div>
            </div>
        </div>
        </div>

        <div>
            <div id="cart-content">
            <div>
                <img src="../images/black_shirt.jpg" id="cart-item-image" />
            </div>
            <div id="writing-content">
                <h2 style="font-size: 30px;">Mens black t-shirts</h2>

                <div id="price">
                    <p id="discount-price">-70%</p>
                    <p class="price">Price: $20</p>
                </div>

                <div>
                    <p style="font-size: 13px; margin: 10px 0px 0px 40px;">M.R.P: <strike>700</strike></p>
                    <p style="font-size: 13px; margin: 10px 0px 0px 40px;">Inclusive of all taxes</p>
                    <p style="font-size: 13px; margin: 10px 0px 0px 40px;">EMI starts at ₹109 per month. EMI options </p>
                </div>

                <div id="option">
                    <v-select id="qua" label="Quantity" :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']"
                        variant="outlined"></v-select>

                    <ul>
                        <a href="">rating</a>
                        <a href="">review</a>
                        <a href="">Selfies</a>
                        <a href="">Have a quesion?</a>
                    </ul>
                </div>
            </div>
        </div>
        </div>

        
    </div>
    <div style="border: 2px solid black"></div>
    <div id="total">
        <h1>Subtotal (0 items): 0.00</h1>
    </div>
<foo/>
</template>

<style>
#cart-item-image {
    width: 269px;
    margin: 0px 0px 0px 50px;
}

#tittle {
    font-size: 40px;
    margin: 20px 0px 20px 20px;
    border-bottom: 2px solid black;
}

#cart-content {
    display: flex;
    margin: 0px 0px 30px 0px;
}

#writing-content {
    border: 2px solid black;
    width: 70%;
    margin-left: 10px;
    padding: 0px 0px 0px 30px;

}

#writing-content h2 {
    margin: 30px 0px 0px 40px;
}

#option a {
    border-right: 2px solid black;
    margin: 5px 10px 0px 0px;
    padding: 0px 5px 0px 5px;
}

#option {
    margin: 5px 10px 0px 34px;

}

#qua {
    width: 200px;
}

#total {
    display: flex;
    justify-content: end;
    margin: 10px 85px 0px 0px;
    font-size: 30px;
}
</style>
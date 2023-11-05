<script>
import navbar from '../components/navbar.vue'
import firstbar from '../components/firstbar.vue'
import cart_dilog from '../components/cart-dilog.vue'
import trend_product from '../components/trend_product.vue'
import foo from '../components/footers.vue'

export default {
    components: {
        navbar,
        firstbar,
        cart_dilog,
        trend_product,
        foo,
    },
    data() {
        return {
            product: 'Men T-shirt',
        }
    }
}
</script>

<template>
    <navbar></navbar>
    <firstbar></firstbar>
    <div id="product-view-content">
        <img src="../images/black_shirt.jpg" id="product-image">

        <div id="product-detail">
            <p style="margin: 20px 0px -30px 30px;">STPL Exclusive Online</p>
            <h1 class="product-name">{{ product }}</h1>
            <div id="rating">
                <img src="../images/rating.png" width="100px">
                <p>(4.2)</p>
                <ul>
                    <a href="">rating</a>
                    <a href="">review</a>
                    <a href="">Selfies</a>
                    <a href="">Have a quesion?</a>
                </ul>
            </div>
            <div id="price">
                <p id="discount-price">-70%</p>
                <p class="price">Price: $20</p>
            </div>

            <div>
                <p style="font-size: 13px; margin: 10px 0px 0px 40px;">M.R.P: <strike>700</strike></p>
                <p style="font-size: 13px; margin: 10px 0px 0px 40px;">Inclusive of all taxes</p>
                <p style="font-size: 13px; margin: 10px 0px 0px 40px;">EMI starts at ₹109 per month. EMI options </p>
            </div>
            <div id="choose">
                <v-select label="Choose size" :items="['XL', 'S', 'M', 'L', '2XL', '3XL']" variant="outlined"></v-select>

                <v-select label="Choose color" :items="['Red', 'Blue', 'Green', 'White', 'Pink', 'black']"
                    variant="outlined"></v-select>
            </div>

            <div id="offers">
                <div class="offer-div">
                    <h2>Partner offer</h2>
                    <p>Buy one get second free</p>
                </div>

                <div class="offer-div">
                    <h2>Bank offer</h2>
                    <p>Upto 5,000 discount on sbi card.</p>
                </div>
            </div>
        </div>
        <div id="delivery-box">
            <p style="font-weight: 600;">Delivery instruction</p>
            <p class="info">Free delivery Friday, 23 october. Deatails</p>
            <h3 class="info">In stocks</h3>
            <p style="font-weight: 600;">Retail store information.</p>
            <p class="info">Sold by STPL Exclusive Online and Fulfilled by Amazon.</p>
            <div id="qua">
                <v-select label="Quantity" :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']"
                    variant="outlined"></v-select>
            </div>
            <div style="display: flex; justify-content: center;">
                <v-btn id="add-to-cart-btn" variant="">
                    <cart_dilog />
                </v-btn>
            </div>

            <div style="display: flex; justify-content: center;">
                <v-btn class="buy-cart" variant="outlined" id="buy-now-btn"><router-link to="/product-view/oders">Buy now</router-link></v-btn>
            </div>

            <p style="margin-bottom: 10px; color: rgb(98, 98, 255); cursor: pointer;">Secure transcation</p>
            <div style="display: flex;">
                <input type="checkbox" />
                <p style="margin-left: 10px;">Add gift option.</p>
            </div>
        </div>
    </div>

    <div id="detail-description">
        <h1>Product details</h1>
        <table>
            <tr>
                <th>Material Composition</th>
                <th>60% Cotton, 40% Polyester</th>
            </tr>
            <tr>
                <th>Pattern</th>
                <th>Solid</th>
            </tr>
            <tr>
                <th>Fit Type</th>
                <th>Regular Fit</th>
            </tr>
            <tr>
                <th>Sleeve Type</th>
                <th>Half Sleeve</th>
            </tr>
            <tr>
                <th>Collar Style</th>
                <th>Button Down</th>
            </tr>
        </table>
        <h1 id="brand-name">Top Brand American crew</h1>
        <div style="display: flex; justify-content: space-around; margin: 0px 0px 100px 0px;">
            <div id="brand-description">
                <p>83% positive ratings from 50K+ customers</p>
                <p>10K+ recent orders from this brand</p>
                <p>9+ years on Amazon</p>
            </div>
            <div>
                <p>Highly rated by customers for</p>
                <div id="brand-rating-description">
                    <p>comphertable product</p>
                    <p>value for money</p>
                    <p>good fit</p>
                </div>
            </div>
        </div>
    </div>
    <div style="border: 2px solid black;">
        <foo/>
    </div>

</template>
<style>
#product-image {
    width: 40%;
    height: 500px;
}

#product-view-content {
    display: flex;
    margin: 30px 0px 0px 30px;
}

#product-detail h1 {
    font-size: 50px;
    margin: 21px 0px 0px 30px;
}

#price {
    display: flex;
    font-size: 20px;
    margin: 0px 0px 0px 30px;
}

#discount-price {
    color: red;
}

#price p {
    margin: 0px 10px 0px 10px;
}

#rating {
    display: flex;
    align-items: center;
    margin-left: 30px;
}

#offers {
    display: flex;
    margin: 20px 0px 0px 30px;

}

#rating p {
    margin-left: 9px;
}

#rating a {
    border-right: 2px solid black;
    padding: 0px 5px 0px 10px;
}

#rating a:hover {
    color: rgb(98, 98, 255);
}

#add-to-cart-btn {
    background-color: rgb(255, 109, 109);
}

#add-to-cart-btn:hover {
    width: 150px;
}

#buy-now-btn {
    margin: 20px 0px 20px 0px;
    background-color: rgb(255, 109, 109);
}


#buy-now-btn:hover {
    width: 150px;
}

#qua {
    margin-top: 20px;
    width: 100%;
}

#delivery-box {
    border: 2px solid black;
    padding: 10px 15px 0px 15px;
    margin: 0px 0px 0px 20px;
}

#choose {
    display: flex;
    margin: 20px 5px 10px 25px;

}

#detail-description h1 {
    font-size: 24px;
    margin: 20px 0px 0px 30px;
}

/* #detail-description {
border: 2px solid black;
} */

#brand-description p {
    padding: 10px 0px 0px 0px;
}

#brand-rating-description {
    display: flex;
}

#brand-rating-description p {
    padding: 10px 10px 0px 0px;
    border-right: 2px solid black;
    margin-right: 10px;
}

h1#brand-name {
    margin: 80px 0px 0px 170px;
}

th {
    padding: 0px 20px 0px 30px;
    text-align: left;
}

.offer-div {
    border: 2px solid black;
    padding: 30px 10px 30px 20px;
    margin: 0px 20px 0px 0px;
    border-radius: 7px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}

.offer-div h2 {
    font-size: 600;
}

.info {
    margin: 5px 30px 0px 20px;
}

#detail-description {
    margin: 0px 0px 0px 30px;
}
</style>
<script>
import cartdilog from '../components/cart-dilog.vue'

export default {
    name: 'trend_product',
    components: {
        cartdilog,
    },

    data() {
        return {
            product_name: {
                first_product: 'Black Men T-shirts',
                second_product: 'Coat and t-shirt',
                third_product: 'Coat and kurti',
                fourth_product: 'Mens White t-shirts',
                fifth_product: 'Bluetooth headphone',
                sixth_product: 'wireless earbud',
                seven_product: 'Iphone',
                eight_product: 'laptop',
            },
        };
    },
};

</script>


<template>
    <div id="section">
        <div id="heading">
            <h2>Trending products</h2>
            <v-btn id="view"><router-link to="/view_all.vue">View all</router-link></v-btn>
        </div>

        <div id="trending-content">
            <v-carousel hide-delimiters show-arrows="hover" id="carousel">
                <v-carousel-item>
                    <div id="product-column">
                        <div class="columns">
                            <router-link to="/product-view" class="columns">
                                <div @click="select_product">
                                    <img src="../images/black_shirt.jpg" class="image-1" />
                                    <p class="product-name">{{ product_name.first_product }}</p>
                                </div>
                            </router-link>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <img src="../images/rating.png" class="rating-img" />
                                <div>
                                    <cartdilog></cartdilog>
                                </div>
                            </div>

                            <div style="display: flex;">
                                <p>Rs 250</p>
                                <p class="discount">60% OFF</p>
                            </div>
                        </div>

                        <div class="columns">
                            <router-link to="/product-view.vue" class="columns">
                                <div @click="select_product">
                                    <img src="../images/test.jpg" class="image-2" />
                                    <p class="product-name">{{ product_name.second_product }}</p>
                                </div>
                            </router-link>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <img src="../images/rating.png" class="rating-img" />
                                <div>
                                    <cartdilog></cartdilog>
                                </div>
                            </div>
                            <div style="display: flex;">
                                <p>Rs 400</p>
                                <p class="discount">60% OFF</p>
                            </div>
                        </div>

                        <div class="columns">
                            <router-link to="/product-view.vue" class="columns">
                                <img src="../images/fashioncl.jpg" class="image-3" />
                                <p class="product-name">{{ product_name.third_product }}</p>
                            </router-link>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <img src="../images/rating.png" class="rating-img" />
                                <div>
                                    <cartdilog></cartdilog>
                                </div>
                            </div>
                            <div style="display: flex;">
                                <p>Rs 300</p>
                                <p class="discount">60% OFF</p>
                            </div>
                        </div>

                        <div class="columns">
                            <router-link to="/product-view.vue" class="columns">
                                <img src="../images/fashionol.jpg" class="image-4" />
                                <p class="product-name">{{ product_name.fourth_product }}</p>
                            </router-link>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <img src="../images/rating.png" class="rating-img" />
                                <div>
                                    <cartdilog></cartdilog>
                                </div>
                            </div>
                            <div style="display: flex;">
                                <p>Rs 200</p>
                                <p class="discount">60% OFF</p>
                            </div>
                        </div>
                    </div>
                </v-carousel-item>

                <v-carousel-item>
                    <div id="second-row">
                        <div class="columns">
                            <router-link to="/product-view.vue" class="columns">
                                <img src="../images/headphone.jpg" class="image-4" />
                                <p class="product-name">{{ product_name.fifth_product }}</p>
                            </router-link>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <img src="../images/rating.png" class="rating-img" />
                                <div>
                                    <cartdilog></cartdilog>
                                </div>
                            </div>
                            <div style="display: flex;">
                                <p>Rs 200</p>
                                <p class="discount">60% OFF</p>
                            </div>
                        </div>

                        <div class="columns">
                            <router-link to="/product-view.vue" class="columns">
                                <img src="../images/earbud.jpg" class="image-4" />
                                <p class="product-name">{{ product_name.sixth_product }}</p>
                            </router-link>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <img src="../images/rating.png" class="rating-img" />
                                <div>
                                    <cartdilog></cartdilog>
                                </div>
                            </div>
                            <div style="display: flex;">
                                <p>Rs 200</p>
                                <p class="discount">60% OFF</p>
                            </div>
                        </div>

                        <div class="columns">
                            <router-link to="/product-view.vue" class="columns">
                                <img src="../images/iphone.jpg" class="image-4" />
                                <p class="product-name">{{ product_name.seven_product }}</p>
                            </router-link>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <img src="../images/rating.png" class="rating-img" />
                                <div>
                                    <cartdilog></cartdilog>
                                </div>
                            </div>
                            <div style="display: flex;">
                                <p>Rs 200</p>
                                <p class="discount">60% OFF</p>
                            </div>
                        </div>

                        <div class="columns">
                            <router-link to="/product-view.vue" class="columns">
                                <img src="../images/laptop1.jpg" class="image-4" />
                                <p class="product-name">{{ product_name.eight_product }}</p>
                            </router-link>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <img src="../images/rating.png" class="rating-img" />
                                <div>
                                    <cartdilog></cartdilog>
                                </div>
                            </div>
                            <div style="display: flex;">
                                <p>Rs 200</p>
                                <p class="discount">60% OFF</p>
                            </div>
                        </div>
                    </div>
                </v-carousel-item>

                <v-carousel-item>
                    <div id="third-row">
                        <div class="columns">
                            <router-link to="/product-view.vue" class="columns">
                                <img src="../images/black_shirt.jpg" class="image-4" />
                                <p class="product-name">{{ product_name.first_product }}</p>
                            </router-link>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <img src="../images/rating.png" class="rating-img" />
                                <div>
                                    <cartdilog></cartdilog>
                                </div>
                            </div>
                            <div style="display: flex;">
                                <p>Rs 200</p>
                                <p class="discount">60% OFF</p>
                            </div>
                        </div>

                        <div class="columns">
                            <router-link to="/product-view.vue" class="columns">
                                <img src="../images/test.jpg" class="image-4" />
                                <p class="product-name">{{ product_name.second_product }}</p>
                            </router-link>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <img src="../images/rating.png" class="rating-img" />
                                <div>
                                    <cartdilog></cartdilog>
                                </div>
                            </div>
                            <div style="display: flex;">
                                <p>Rs 200</p>
                                <p class="discount">60% OFF</p>
                            </div>
                        </div>

                        <div class="columns">
                            <router-link to="/product-view.vue" class="columns">
                                <img src="../images/fashioncl.jpg" class="image-4" />
                                <p class="product-name">{{ product_name.third_product }}</p>
                            </router-link>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <img src="../images/rating.png" class="rating-img" />
                                <div>
                                    <cartdilog></cartdilog>
                                </div>
                            </div>
                            <div style="display: flex;">
                                <p>Rs 200</p>
                                <p class="discount">60% OFF</p>
                            </div>
                        </div>

                        <div class="columns">
                            <router-link to="/product-view.vue" class="columns">
                                <img src="../images/fashionol.jpg" class="image-4" />
                                <p class="product-name">{{ product_name.fourth_product }}</p>
                            </router-link>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <img src="../images/rating.png" class="rating-img" />
                                <div>
                                    <cartdilog></cartdilog>
                                </div>
                            </div>
                            <div style="display: flex;">
                                <p>Rs 200</p>
                                <p class="discount">60% OFF</p>
                            </div>
                        </div>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </div>








    </div>
</template>
<style>
#carousel .v-icon{
    color: black;
}
#second-row{
    display: flex;
}
#third-row{
    display: flex;
}
#carousel{
    height: 570px !important;
}
#section {
    margin-top: 50px;
}

#trending-content {
    border: 2px solid black;
    height: 600px;
}

#product-column {
    display: flex;
    margin: 0px 25px 0px 0px;
}

#heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    margin: 50px 0px 30px 0px;
}

#view {
    background-color: rgb(255, 98, 98);
    margin: 0px 20px 0px 0px;
}

.discount {
    margin: -5px 10px 0px 20px;
    padding: 5px 10px 5px 10px;
    border: 2px solid black;
}

.columns {
    margin: 0px 0px 0px 20px;
    padding: 10px 0px 10px 10px;
    width: 30%;
    cursor: pointer;
}

.columns:hover {
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.product-name {
    margin: 10px 0px 0px 0px;
    font-weight: 600;

}

.image-1 {
    width: 100%;
}

.image-2 {
    width: 100%;
}

.rating-img {
    width: 60px;
}</style>
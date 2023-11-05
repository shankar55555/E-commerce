<script>
import navbar from '../components/navbar.vue'
import cartdilog from '../components/cart-dilog.vue'
import filter_sidebar from '../components/filter_sidebar.vue'
import foo from '../components/footers.vue'

export default {
    name: 'view_all',
    components: {
        navbar,
        filter_sidebar,
        cartdilog,
        foo
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
            image: {
                headphone: "../images/headphone.jpg",
                erabud: "../images/earbud.jpg",
                iphone: "../images/iphone.jpg",
                laptop: "../images/laptop1.jpg"


            }
        };
    },
};

</script>

<template>
    <navbar />
    <div id="full-section">
        <div id="filter-side">
            <filter_sidebar />
        </div>

        <div id="content-section">
            <div id="section">
                <div id="heading">
                    <h2>Trending products</h2>
                    <div style="border: 1px solid black"></div>
                </div>

                <div id="product-column">

                    <div class="columns">
                        <router-link to="/product-view.vue" class="columns">
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

                <div id="third-row">
                    <div class="columns">
                        <router-link to="/product-view.vue" class="columns">
                            <img src="../images/black_shirt.jpg" class="image-4" />
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
                            <img src="../images/test.jpg" class="image-4" />
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
                            <img src="../images/fashioncl.jpg" class="image-4" />
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
                            <img src="../images/fashionol.jpg" class="image-4" />
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
            </div>
        </div>

    </div>
    <foo/>
</template>
<style scoped>
#full-section {
    display: flex;
    margin-bottom: 20px;
}

#filter-side {
    margin: 60px 0px 0px 10px;
}

#section {
    margin-right: 20px;
}

#heading {
    margin: -30px 0px -10px 28px;
    display: block;
}

#product-column {
    margin: 0px 0px 0px 0px !important;
    border: none;
}

#second-row {
    display: flex;
    margin: 20px 0px 20px 0px;
}

#third-row {
    display: flex;
}
</style>
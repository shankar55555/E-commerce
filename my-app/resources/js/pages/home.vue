<script>
import navbar from '../components/navbar.vue'
import firstbar from '../components/firstbar.vue'
import sidebar from '../components/sidebar.vue'
import slider from '../components/slider.vue'
import trend_product from '../components/trend_product.vue'
import contact from '../components/contact.vue'
import foo from '../components/footers.vue'
import login from '../components/login.vue'
import filter_sidebar from '../components/filter_sidebar.vue'

export default {
    components: {
        navbar,
        firstbar,
        sidebar,
        slider,
        trend_product,
        contact,
        foo,
        login,
        filter_sidebar,
    }
}
</script>
<template>
    <navbar />
    <firstbar />
    <div id="first-page-content">
        <div>
            <div style="display: flex; gap: 30px;">
                <div>
                    <sidebar />
                </div>
                <div>
                    <slider />
                    <trend_product />
                </div>

            </div>
            <div>
                <contact />
                <foo />
            </div>
        </div>
    </div>
</template>
<style scoped>
#first-page-content {
    display: flex;
}

#next-content {
    display: block;
}

#slider {
    /* border: 2px solid black; */
    margin-left: 50px;
    height: max-content;
}
</style>
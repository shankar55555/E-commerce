<script>
import login from '../components/login.vue';
// import Navbar from '../layouts/navbar.vue';

export default {
    name: 'Navbar',
    components: {
    login,
    }
}

</script>
<template>
    <div id="navbar">
        <div id="logo-name">
            <h1>Snapdeal</h1>
        </div>

        <div id="serch-div">
            <input type="text" placeholder="Searchbar..." id="search-bar">
          
            <button type="submit" id="search-btn">search</button>
        </div>

        <section id="navbar-section">
            <ul id="list-item">
                <li><router-link to="/cart">Cart</router-link></li>
                <li><login></login></li>
            </ul>
        </section>
        <router-view></router-view>
    </div>
</template>

<style scoped>
#login{
    margin-right: 10px; 
}
#navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid black;
    height: 70px;
    background-color: rgb(247, 74, 74);
}

#logo-name {
    font-size: 30px;
    margin: 5px 0px 0px 15px;
    color: white;
}

#serch-div {
    display: flex;

}

#search-btn {
    padding: 3px 10px 3px 10px;
    margin-top: 9px;
    font-size: 24px;
    position: relative;
    left: -90px;
    background-color: black;
    color: red;
    border-radius: 7px;
}

#search-bar {
    margin-top: 8px;
    border: 2px solid red;
    width: 500px;
    height: 47px;
    border-radius: 7px;
    padding-left: 10px;
}

#navbar-section {
    height: 50px;
    align-items: center;
    display: flex;
    justify-content: flex-end;
}

#list-item li {
    display: inline;
    color: pink;
    margin: 10px 20px 10px 20px;
    padding: 10px 20px 10px 20px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 800;
}

#list-item li:hover {
    color: black;
}
</style>

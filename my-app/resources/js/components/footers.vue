
<template>
    <div id="footer">
        <div id="list-ite">
            <div class="list">
                <ul class="unorder-list">
                    <h3>Policy info</h3>
                    <li>Privacy Policy</li>
                    <li>Terms of Sale</li>
                    <li>Terms of Use</li>
                    <li>FAQ</li>
                </ul>
            </div>

            <div class="list">
                <ul class="unorder-list">
                    <h3>Company</h3>
                    <li>Impact@Snapdeal</li>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div class="list">
                <ul class="unorder-list">
                    <h3>Snapdeal business</h3>
                    <li>Shopping App</li>
                    <li>Sell on Snapdeal</li>
                    <li>Media Enquiries</li>
                </ul>
            </div>

            <div class="list">
                <ul class="unorder-list">
                    <h3>Popular links</h3>
                    <li>Lehenga</li>
                    <li>Sarees</li>
                    <li>Kid's Clothing</li>
                    <li>Winter Wear</li>
                </ul>
            </div>
        </div>

        <div id="news-letter">
            <h1 id="subscribe">Subscribe</h1>
            <input type="email" id="input-email" placeholder="Your email address">
            <button id="submit-btn">submit</button>
        </div>

    </div>
</template>
<style scoped>
#footer {
    display: flex;
    justify-content: space-between;
    background-color: #f63a06;
    color: white;
    height: 300px;
}

#list-ite {
    display: flex;
    margin-left: 70px;
}

#list-ite h3 {
    font-weight: 600;
}

#list-ite li {
    cursor: pointer;
    margin: 5px 0px 5px 0px;
}

#list-ite li:hover {
    color: black;
}

#news-letter {
    background-color: #f63a06;
    padding: 90px 50px 0px 100px;
}

.list {
    margin: 90px 20px 0px 20px;
}

.unorder-list h3 {
    font-size: 20px;
}

#input-email {
    border: 2px solid black;
    border-radius: 7px;
    padding-left: 10px;
    height: 40px;
    width: 210px;
}

#subscribe {
    margin: 0px 0px 20px 0px;
    font-weight: 800;
    font-size: 25px;
}

#submit-btn {
    border: 2px solid black;
    height: 40px;
    padding: 0px 10px 0px 10px;
    border-radius: 7px;
}

#submit-btn:hover {
    background-color: black;
    color: white;
}
</style>
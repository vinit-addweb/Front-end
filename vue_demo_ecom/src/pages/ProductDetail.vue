<template>
    <section>
    <!--Header Start-->
        <the-header></the-header>
    <!--Header End-->

    <!-- Product Details Section Begin -->
    <section class="product-details spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="product__details__pic">
                        <div class="product__details__pic__left product__thumb nice-scroll">
                            <a class="pt active" href="#product-1">
                                <img src="img/product/details/thumb-1.jpg" alt="">
                            </a>
                            <a class="pt" href="#product-2">
                                <img src="img/product/details/thumb-2.jpg" alt="">
                            </a>
                            <a class="pt" href="#product-3">
                                <img src="img/product/details/thumb-3.jpg" alt="">
                            </a>
                            <a class="pt" href="#product-4">
                                <img src="img/product/details/thumb-4.jpg" alt="">
                            </a>
                        </div>
                        <div class="product__details__slider__content">
                            <div class="product__details__pic__slider owl-carousel">
                                <img data-hash="product-1" class="product__big__img" src="img/product/details/product-1.jpg" alt="">
                                <img data-hash="product-2" class="product__big__img" src="img/product/details/product-3.jpg" alt="">
                                <img data-hash="product-3" class="product__big__img" src="img/product/details/product-2.jpg" alt="">
                                <img data-hash="product-4" class="product__big__img" src="img/product/details/product-4.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="product__details__text">
                        <h3>Essential structured blazer</h3>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <span>( 138 reviews )</span>
                        </div>
                        <div class="product__details__price">$ 75.0 <span>$ 83.0</span></div>
                        <p>Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur
                        magni lores eos qui ratione voluptatem sequi nesciunt.</p>
                        <div class="product__details__button">
                            <div class="quantity">
                                <span>Quantity:</span>
                                <div class="pro-qty">
                                    <input type="text" value="1">
                                </div>
                            </div>
                            <a href="#" class="cart-btn"><span class="icon_bag_alt"></span> Add to cart</a>
                            <ul>
                                <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                                <li><a href="#"><span class="icon_adjust-horiz"></span></a></li>
                            </ul>
                        </div>
                        <div class="product__details__widget">
                            <ul>
                                <li>
                                    <span>Availability:</span>
                                    <div class="stock__checkbox">
                                        <label for="stockin">
                                            In Stock
                                            <input type="checkbox" id="stockin">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </li>
                                <!-- <li>
                                    <span>Available color:</span>
                                    <div class="color__checkbox">
                                        <label for="red">
                                            <input type="radio" name="color__radio" id="red" checked>
                                            <span class="checkmark"></span>
                                        </label>
                                        <label for="black">
                                            <input type="radio" name="color__radio" id="black">
                                            <span class="checkmark black-bg"></span>
                                        </label>
                                        <label for="grey">
                                            <input type="radio" name="color__radio" id="grey">
                                            <span class="checkmark grey-bg"></span>
                                        </label>
                                    </div>
                                </li> -->
                                <!-- <li>
                                    <span>Available size:</span>
                                    <div class="size__btn">
                                        <label for="xs-btn" class="active">
                                            <input type="radio" id="xs-btn">
                                            xs
                                        </label>
                                        <label for="s-btn">
                                            <input type="radio" id="s-btn">
                                            s
                                        </label>
                                        <label for="m-btn">
                                            <input type="radio" id="m-btn">
                                            m
                                        </label>
                                        <label for="l-btn">
                                            <input type="radio" id="l-btn">
                                            l
                                        </label>
                                    </div>
                                </li> -->
                                <li>
                                    <span>Promotions:</span>
                                    <p>Free shipping</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-lg-12">
                    <div class="product__details__tab">
                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Description</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Specification</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Reviews ( 2 )</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                <h6>Description</h6>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                    quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                    Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                consequat massa quis enim.</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                quis, sem.</p>
                            </div>
                            <div class="tab-pane" id="tabs-2" role="tabpanel">
                                <h6>Specification</h6>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                    quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                    Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                consequat massa quis enim.</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                quis, sem.</p>
                            </div>
                            <div class="tab-pane" id="tabs-3" role="tabpanel">
                                <h6>Reviews ( 2 )</h6>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                    quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                    Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                consequat massa quis enim.</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                quis, sem.</p>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="related__title">
                        <h5>RELATED PRODUCTS</h5>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg="img/product/related/rp-1.jpg">
                            <div class="label new">New</div>
                            <ul class="product__hover">
                                <li><a href="img/product/related/rp-1.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
                                <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                                <li><a href="#"><span class="icon_bag_alt"></span></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6><a href="#">Buttons tweed blazer</a></h6>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="product__price">$ 59.0</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg="img/product/related/rp-2.jpg">
                            <ul class="product__hover">
                                <li><a href="img/product/related/rp-2.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
                                <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                                <li><a href="#"><span class="icon_bag_alt"></span></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6><a href="#">Flowy striped skirt</a></h6>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="product__price">$ 49.0</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg="img/product/related/rp-3.jpg">
                            <div class="label stockout">out of stock</div>
                            <ul class="product__hover">
                                <li><a href="img/product/related/rp-3.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
                                <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                                <li><a href="#"><span class="icon_bag_alt"></span></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6><a href="#">Cotton T-Shirt</a></h6>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="product__price">$ 59.0</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg="img/product/related/rp-4.jpg">
                            <ul class="product__hover">
                                <li><a href="img/product/related/rp-4.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
                                <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                                <li><a href="#"><span class="icon_bag_alt"></span></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6><a href="#">Slim striped pocket shirt</a></h6>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="product__price">$ 59.0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Product Details Section End -->

    <!--Footer Start-->
        <the-footer></the-footer>
    <!--Footer End-->

    </section>
</template>

<script>
import TheHeader from '../components/layouts/TheHeader.vue';
import TheFooter from '../components/layouts/TheFooter.vue';

export default{
  components: {  TheHeader,TheFooter },
    name:'ProductDetail'
}
</script>

<style scoped>

/*---------------------
  Product Details
-----------------------*/

.product-details {
	padding-top: 70px;
	padding-bottom: 50px;
}

.product__details__pic {
	overflow: hidden;
}

.product__details__pic__left {
	width: 22%;
	max-height: 574px;
	float: left;
	overflow-y: auto;
}

.product__details__pic__left .pt {
	display: block;
	margin-bottom: 20px;
	cursor: pointer;
	position: relative;
}

.product__details__pic__left .pt::after {
	content: "";
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background: #000;
	opacity: 0;
	-webkit-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
	-moz-transition: all 0.3s;
	-ms-transition: all 0.3s;
}

.product__details__pic__left .pt.active::after {
	opacity: 0.3;
}

.product__details__pic__left .pt:last-child {
	margin-bottom: 0;
}

.product__details__pic__left .pt img {
	min-width: 100%;
}

.product__details__slider__content {
	width: calc(78% - 20px);
	float: left;
	margin-left: 20px;
}

.product__details__pic__slider.owl-carousel .owl-nav button {
	position: absolute;
	left: 10px;
	top: 50%;
	font-size: 22px;
	color: #111111;
	width: 40px;
	height: 40px;
	background: rgba(255, 255, 255, 0.7);
	border-radius: 50%;
	line-height: 44px;
	text-align: center;
	margin-top: -20px;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	-ms-border-radius: 50%;
	-o-border-radius: 50%;
}

.product__details__pic__slider.owl-carousel .owl-nav button.owl-next {
	left: auto;
	right: 10px;
}

.product__details__text{
    text-align: start;
}

.product__details__text h3 {
	color: #111111;
	font-weight: 600;
	text-transform: uppercase;
	margin-bottom: 12px;
}

.product__details__text h3 span {
	display: block;
	font-size: 14px;
	color: #444444;
	text-transform: none;
	font-weight: 400;
	margin-top: 5px;
}

.product__details__text .rating {
	margin-bottom: 16px;
}

.product__details__text .rating i {
	font-size: 12px;
	color: #e3c01c;
	margin-right: 1px;
}

.product__details__text .rating span {
	font-size: 12px;
	color: #666666;
	margin-left: 5px;
}

.product__details__text p {
	color: #444444;
	margin-bottom: 28px;
}

.product__details__price {
	font-size: 30px;
	font-weight: 600;
	color: #ca1515;
	margin-bottom: 30px;
}

.product__details__price span {
	font-size: 18px;
	color: #b1b0b0;
	text-decoration: line-through;
	margin-left: 10px;
	display: inline-block;
}

.quantity {
	float: left;
	margin-right: 10px;
	margin-bottom: 10px;
}

.quantity>span {
	font-size: 14px;
	color: #111111;
	font-weight: 600;
	float: left;
	margin-top: 14px;
	margin-right: 15px;
}

.pro-qty {
	height: 50px;
	width: 150px;
	border: 1px solid #ebebeb;
	border-radius: 50px;
	padding: 0 20px;
	overflow: hidden;
	display: inline-block;
	-webkit-border-radius: 50px;
	-moz-border-radius: 50px;
	-ms-border-radius: 50px;
	-o-border-radius: 50px;
}

.pro-qty .qtybtn {
	font-size: 14px;
	color: #666666;
	cursor: pointer;
	float: left;
	width: 12px;
	line-height: 46px;
}

.pro-qty input {
	font-size: 14px;
	color: #666666;
	font-weight: 500;
	border: none;
	float: left;
	width: 84px;
	text-align: center;
	height: 48px;
}

.product__details__button {
	overflow: hidden;
	margin-bottom: 25px;
}

.product__details__button .cart-btn {
	display: inline-block;
	font-size: 14px;
	color: #ffffff;
	background: #ca1515;
	font-weight: 600;
	text-transform: uppercase;
	padding: 14px 30px 15px;
	border-radius: 50px;
	float: left;
	margin-right: 10px;
	margin-bottom: 10px;
	-webkit-border-radius: 50px;
	-moz-border-radius: 50px;
	-ms-border-radius: 50px;
	-o-border-radius: 50px;
}

.product__details__button ul {
	float: left;
}

.product__details__button ul li {
	list-style: none;
	display: inline-block;
	margin-right: 5px;
}

.product__details__button ul li:last-child {
	margin-right: 0;
}

.product__details__button ul li a {
	display: inline-block;
	height: 50px;
	width: 50px;
	border: 1px solid #ebebeb;
	border-radius: 50%;
	line-height: 50px;
	text-align: center;
	padding-top: 1px;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	-ms-border-radius: 50%;
	-o-border-radius: 50%;
}

.product__details__button ul li a span {
	font-size: 18px;
	color: #666666;
}

.product__details__widget {
	border-top: 1px solid #ebebeb;
	padding-top: 35px;
}

.product__details__widget ul li {
	list-style: none;
	margin-bottom: 10px;
}

.product__details__widget ul li:last-child {
	margin-bottom: 0;
}

.product__details__widget ul li span {
	display: inline-block;
	font-size: 14px;
	font-weight: 600;
	color: #111111;
	width: 150px;
	float: left;
}

.product__details__widget ul li .stock__checkbox {
	overflow: hidden;
}

.product__details__widget ul li .stock__checkbox label {
	display: block;
	padding-left: 20px;
	font-size: 14px;
	color: #666666;
	position: relative;
	cursor: pointer;
}

.product__details__widget ul li .stock__checkbox label input {
	position: absolute;
	visibility: hidden;
}

.product__details__widget ul li .stock__checkbox label input:checked~.checkmark {
	border-color: #ca1515;
}

.product__details__widget ul li .stock__checkbox label input:checked~.checkmark:after {
	border-color: #ca1515;
	opacity: 1;
}

.product__details__widget ul li .stock__checkbox label .checkmark {
	position: absolute;
	left: 0;
	top: 5px;
	height: 10px;
	width: 10px;
	border: 1px solid #444444;
	border-radius: 2px;
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
	-ms-border-radius: 2px;
	-o-border-radius: 2px;
}

.product__details__widget ul li .stock__checkbox label .checkmark:after {
	position: absolute;
	left: 0px;
	top: -2px;
	width: 11px;
	height: 5px;
	border: solid #ffffff;
	border-width: 1.5px 1.5px 0px 0px;
	-webkit-transform: rotate(127deg);
	-ms-transform: rotate(127deg);
	transform: rotate(127deg);
	opacity: 0;
	content: "";
	-moz-transform: rotate(127deg);
	-o-transform: rotate(127deg);
}

.product__details__widget ul li .color__checkbox label {
	display: inline-block;
	cursor: pointer;
	position: relative;
	margin-right: 20px;
}

.product__details__widget ul li .color__checkbox label.active input~.checkmark:after {
	border-color: #ffffff;
	opacity: 1;
}

.product__details__widget ul li .color__checkbox label:last-child {
	margin-right: 0;
}

.product__details__widget ul li .color__checkbox label input {
	position: absolute;
	visibility: hidden;
}

.product__details__widget ul li .color__checkbox label input:checked~.checkmark:after {
	border-color: #ffffff;
	opacity: 1;
}

.product__details__widget ul li .color__checkbox label .checkmark {
	position: absolute;
	left: 0;
	top: -10px;
	height: 20px;
	width: 20px;
	background: #e31e2f;
	border-radius: 50%;
	content: "";
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	-ms-border-radius: 50%;
	-o-border-radius: 50%;
}

.product__details__widget ul li .color__checkbox label .checkmark.black-bg {
	background: #111111;
}

.product__details__widget ul li .color__checkbox label .checkmark.grey-bg {
	background: #e4aa8b;
}

.product__details__widget ul li .color__checkbox label .checkmark:after {
	position: absolute;
	left: 3px;
	top: 5px;
	width: 13px;
	height: 6px;
	border: solid #ffffff;
	border-width: 1.5px 1.5px 0px 0px;
	-webkit-transform: rotate(127deg);
	-ms-transform: rotate(127deg);
	transform: rotate(127deg);
	opacity: 0;
	content: "";
	-moz-transform: rotate(127deg);
	-o-transform: rotate(127deg);
}

.product__details__widget ul li .size__btn label {
	font-size: 14px;
	color: #666666;
	text-transform: uppercase;
	cursor: pointer;
	margin-right: 10px;
	display: inline-block;
	margin-bottom: 0;
}

.product__details__widget ul li .size__btn label:last-child {
	margin-right: 0;
}

.product__details__widget ul li .size__btn label.active {
	color: #ca1515;
}

.product__details__widget ul li .size__btn label input {
	position: absolute;
	visibility: hidden;
}

.product__details__widget ul li p {
	margin-bottom: 0;
	color: #666666;
}

.product__details__tab {
	padding-top: 80px;
	margin-bottom: 65px;
}

.nav {
	border-bottom: none;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	position: relative;
	margin-bottom: 40px;
}

.nav::before {
	position: absolute;
	left: 0;
	top: 13px;
	height: 1px;
	width: 335px;
	background: #e1e1e1;
	content: "";
}

.nav::after {
	position: absolute;
	right: 0;
	top: 13px;
	height: 1px;
	width: 335px;
	background: #e1e1e1;
	content: "";
}

.nav-item {
	margin-right: 46px;
}

.nav-item:last-child {
	margin-right: 0;
}

.nav-item .nav-link {
	font-size: 18px;
	color: #666666;
	font-weight: 600;
	border: none;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	padding: 0;
}

.nav-item .nav-link.active {
	color: #111111;
}

.tab-content .tab-pane h6 {
	color: #666666;
	font-weight: 600;
	margin-bottom: 24px;
}

.tab-content .tab-pane p:last-child {
	margin-bottom: 0;
}

.related__title h5 {
	font-size: 20px;
	color: #111111;
	font-weight: 600;
	text-transform: uppercase;
	margin-bottom: 35px;
}

/* css */
/*---------------------
  Product
-----------------------*/

.product {
	padding-top: 60px;
	padding-bottom: 50px;
}

.filter__controls {
	text-align: right;
	margin-bottom: 50px;
}

.filter__controls li {
	font-size: 14px;
	list-style: none;
	display: inline-block;
	color: #111111;
	margin-right: 35px;
	position: relative;
	cursor: pointer;
}

.filter__controls li.active:after {
	opacity: 1;
}

.filter__controls li:after {
	position: absolute;
	left: 0;
	bottom: -4px;
	height: 2px;
	width: 100%;
	background: #ca1515;
	content: "";
	opacity: 0;
}

.filter__controls li:last-child {
	margin-right: 0;
}

.product__item {
	margin-bottom: 35px;
}

.product__item:hover .product__hover li {
	opacity: 1;
	top: 0;
}

.product__item.sale .product__item__pic .label {
	background: #ca1515;
}

.product__item.sale .product__item__text .product__price {
	color: #ca1515;
}

.product__item__pic {
	height: 360px;
	position: relative;
	overflow: hidden;
}

.product__item__pic .label {
	font-size: 12px;
	color: #ffffff;
	font-weight: 500;
	display: inline-block;
	padding: 2px 8px;
	text-transform: uppercase;
	position: absolute;
	left: 10px;
	top: 10px;
}

.product__item__pic .label.new {
	background: #36a300;
}

.product__item__pic .label.stockout {
	background: #111111;
}

.product__item__pic .label.stockblue {
	background: #0066bd !important;
}

.product__item__pic .label.sale {
	background: #ca1515;
}

.product__hover {
	position: absolute;
	left: 0;
	width: 100%;
	bottom: 30px;
	text-align: center;
}

.product__hover li {
	list-style: none;
	display: inline-block;
	margin-right: 10px;
	position: relative;
	top: 100px;
	opacity: 0;
}

.product__hover li:nth-child(1) {
	-webkit-transition: all 0.4s ease 0.1s;
	-o-transition: all 0.4s ease 0.1s;
	transition: all 0.4s ease 0.1s;
	-moz-transition: all 0.4s ease 0.1s;
	-ms-transition: all 0.4s ease 0.1s;
}

.product__hover li:nth-child(2) {
	-webkit-transition: all 0.4s ease 0.15s;
	-o-transition: all 0.4s ease 0.15s;
	transition: all 0.4s ease 0.15s;
	-moz-transition: all 0.4s ease 0.15s;
	-ms-transition: all 0.4s ease 0.15s;
}

.product__hover li:nth-child(3) {
	-webkit-transition: all 0.4s ease 0.2s;
	-o-transition: all 0.4s ease 0.2s;
	transition: all 0.4s ease 0.2s;
	-moz-transition: all 0.4s ease 0.2s;
	-ms-transition: all 0.4s ease 0.2s;
}

.product__hover li:last-child {
	margin-right: 0;
}

.product__hover li:hover a {
	background: #ca1515;
}

.product__hover li:hover a span {
	color: #ffffff;
	-webkit-transform: rotate(360deg);
	-ms-transform: rotate(360deg);
	transform: rotate(360deg);
	-moz-transform: rotate(360deg);
	-o-transform: rotate(360deg);
}

.product__hover li a {
	font-size: 18px;
	color: #111111;
	display: block;
	height: 45px;
	width: 45px;
	background: #ffffff;
	line-height: 48px;
	text-align: center;
	border-radius: 50%;
	-webkit-transition: all, 0.5s;
	-o-transition: all, 0.5s;
	transition: all, 0.5s;
	-moz-transition: all, 0.5s;
	-ms-transition: all, 0.5s;
}

.product__hover li a span {
	position: relative;
	-webkit-transform: rotate(0);
	-ms-transform: rotate(0);
	transform: rotate(0);
	-webkit-transition: all, 0.3s;
	-o-transition: all, 0.3s;
	transition: all, 0.3s;
	display: inline-block;
	-moz-transition: all, 0.3s;
	-ms-transition: all, 0.3s;
	-moz-transform: rotate(0);
	-o-transform: rotate(0);
}

.product__item__text {
	text-align: center;
	padding-top: 22px;
}

.product__item__text h6 a {
	font-size: 14px;
	color: #111111;
}

.product__item__text .rating {
	line-height: 18px;
	margin-bottom: 5px;
}

.product__item__text .rating i {
	font-size: 10px;
	color: #e3c01c;
	margin-right: -4px;
}

.product__item__text .rating i:last-child {
	margin-right: 0;
}

.product__item__text .product__price {
	color: #111111;
	font-weight: 600;
}

.product__item__text .product__price span {
	font-size: 14px;
	color: #b1b0b0;
	text-decoration: line-through;
	margin-left: 4px;
}
</style>

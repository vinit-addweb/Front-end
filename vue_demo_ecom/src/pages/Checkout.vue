<template>
    <!--Header start-->
        <the-header></the-header>
     <!--Header start-->
    
     <!-- Checkout Section Begin -->
    <section class="checkout spad">
        <div class="container">
            <form action="#" class="checkout__form">
                <div class="row">
                    <div class="col-lg-12">
                        <h5>Billing detail</h5>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="checkout__form__input">
                                    <p>First Name <span>*</span></p>
                                    <input type="text">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="checkout__form__input">
                                    <p>Last Name <span>*</span></p>
                                    <input type="text">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="checkout__form__input">
                                    <p>Country <span>*</span></p>
                                    <input type="text">
                                </div>
                                <div class="checkout__form__input">
                                    <p>Address <span>*</span></p>
                                    <input type="text" placeholder="Street Address">
                                    <input type="text" placeholder="Apartment. suite, unite ect ( optinal )">
                                </div>
                                <div class="checkout__form__input">
                                    <p>Town/City <span>*</span></p>
                                    <input type="text">
                                </div>
                                <div class="checkout__form__input">
                                    <p>Country/State <span>*</span></p>
                                    <input type="text">
                                </div>
                                <div class="checkout__form__input">
                                    <p>Postcode/Zip <span>*</span></p>
                                    <input type="text">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="checkout__form__input">
                                    <p>Phone <span>*</span></p>
                                    <input type="text">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="checkout__form__input">
                                    <p>Email <span>*</span></p>
                                    <input type="text">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                    <div class="checkout__form__input">
                                        <p>Account Password <span>*</span></p>
                                        <input type="text">
                                    </div>
                                    <div class="checkout__form__input">
                                        <p>Oder notes <span>*</span></p>
                                        <input type="text"
                                        placeholder="Note about your order, e.g, special noe for delivery">
                                    </div>
                                </div>
                            </div>
                            <div class="cart__btn">
                                <a href="#">Place Order</a>
                            </div>
                        </div>
                        <!-- <div class="col-lg-4">
                            
                        </div> -->
                    </div>
                </form>
            </div>
        </section>
        <!-- Checkout Section End -->

     <!--Footer start-->
    <the-footer></the-footer>
     <!--Footer start-->
</template>

<script>
import TheHeader from '../components/layouts/TheHeader.vue';
import TheFooter from '../components/layouts/TheFooter.vue';

export default {
  components: { TheHeader, TheFooter },
  name: 'Home',
  TheHeader,
  TheFooter,
}
</script>

<style scoped>

/*---------------------
  Checkout
-----------------------*/

.cart__btn a {
	font-size: 14px;
	color: #111111;
	font-weight: 600;
	text-transform: uppercase;
	display: inline-block;
	padding: 14px 30px 12px;
	background: #f5f5f5;
    background-color:#f6931d;
    border-radius: 5px;
}


.checkout {
	padding-top: 10px;
	padding-bottom: 70px;
}

.coupon__link {
	font-size: 14px;
	color: #444444;
	padding: 14px 0;
	background: #f5f5f5;
	border-top: 2px solid #ca1515;
	text-align: center;
	margin-bottom: 50px;
}

.coupon__link a {
	font-size: 14px;
	color: #444444;
}

.coupon__link span {
	font-size: 14px;
	color: #ca1515;
}

.checkout__form h5 {
	color: #111111;
	font-weight: 600;
	text-transform: uppercase;
	border-bottom: 1px solid #f6931d;
	padding-bottom: 20px;
    padding-top: 20px;
	margin-bottom: 25px;
    border-top: 2px solid #f6931d;
    background: #f5f5f5;
}

.checkout__form .checkout__form__input p {
	color: #444444;
	font-weight: 500;
	margin-bottom: 10px;
    text-align: start;
}

.checkout__form .checkout__form__input p span {
	color: #ca1515;
}

.checkout__form .checkout__form__input input {
	height: 50px;
	width: 100%;
	border: 1px solid #e1e1e1;
	border-radius: 2px;
	margin-bottom: 25px;
	font-size: 14px;
	padding-left: 20px;
	color: #666666;
}

.checkout__form .checkout__form__input input::-webkit-input-placeholder {
	color: #666666;
}

.checkout__form .checkout__form__input input::-moz-placeholder {
	color: #666666;
}

.checkout__form .checkout__form__input input:-ms-input-placeholder {
	color: #666666;
}

.checkout__form .checkout__form__input input::-ms-input-placeholder {
	color: #666666;
}

.checkout__form .checkout__form__input input::placeholder {
	color: #666666;
}

.checkout__form .checkout__form__checkbox {
	margin-bottom: 20px;
}

.checkout__form .checkout__form__checkbox label {
	display: block;
	padding-left: 24px;
	font-size: 14px;
	color: #444444;
	font-weight: 500;
	position: relative;
	cursor: pointer;
	margin-bottom: 16px;
}

.checkout__form .checkout__form__checkbox label input {
	position: absolute;
	visibility: hidden;
}

.checkout__form .checkout__form__checkbox label input:checked~.checkmark {
	border-color: #ca1515;
}

.checkout__form .checkout__form__checkbox label input:checked~.checkmark:after {
	border-color: #ca1515;
	opacity: 1;
}

.checkout__form .checkout__form__checkbox label .checkmark {
	position: absolute;
	left: 0;
	top: 4px;
	height: 10px;
	width: 10px;
	border: 1px solid #444444;
	border-radius: 2px;
}

.checkout__form .checkout__form__checkbox label .checkmark:after {
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
}

.checkout__form .checkout__form__checkbox p {
	margin-bottom: 0;
}

.checkout__order {
	background: #f5f5f5;
	padding: 30px;
}

.checkout__order h5 {
	border-bottom: 1px solid #d7d7d7;
	margin-bottom: 18px;
}

.checkout__order .site-btn {
	width: 100%;
}

.checkout__order__product {
	border-bottom: 1px solid #d7d7d7;
	padding-bottom: 22px;
}

.checkout__order__product ul li {
	list-style: none;
	font-size: 14px;
	color: #444444;
	font-weight: 500;
	overflow: hidden;
	margin-bottom: 14px;
	line-height: 24px;
}

.checkout__order__product ul li:last-child {
	margin-bottom: 0;
}

.checkout__order__product ul li span {
	font-size: 14px;
	color: #111111;
	font-weight: 600;
	float: right;
}

.checkout__order__product ul li .top__text {
	font-size: 16px;
	color: #111111;
	font-weight: 600;
	float: left;
}

.checkout__order__product ul li .top__text__right {
	font-size: 16px;
	color: #111111;
	font-weight: 600;
	float: right;
}

.checkout__order__total {
	padding-top: 12px;
	border-bottom: 1px solid #d7d7d7;
	padding-bottom: 10px;
	margin-bottom: 25px;
}

.checkout__order__total ul li {
	list-style: none;
	font-size: 16px;
	color: #111111;
	font-weight: 600;
	overflow: hidden;
	line-height: 40px;
}

.checkout__order__total ul li span {
	color: #ca1515;
	float: right;
}

.checkout__order__widget {
	padding-bottom: 10px;
}

.checkout__order__widget label {
	display: block;
	padding-left: 25px;
	font-size: 14px;
	font-weight: 500;
	color: #111111;
	position: relative;
	cursor: pointer;
	margin-bottom: 14px;
}

.checkout__order__widget label input {
	position: absolute;
	visibility: hidden;
}

.checkout__order__widget label input:checked~.checkmark {
	border-color: #ca1515;
}

.checkout__order__widget label input:checked~.checkmark:after {
	border-color: #ca1515;
	opacity: 1;
}

.checkout__order__widget label .checkmark {
	position: absolute;
	left: 0;
	top: 4px;
	height: 10px;
	width: 10px;
	border: 1px solid #444444;
	border-radius: 2px;
}

.checkout__order__widget label .checkmark:after {
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
}

</style>
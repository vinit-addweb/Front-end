<template>
<button @click="loadMob">click</button>
 <div class="tab-pane fade show active" id="man" role="tabpanel">
                <div class="tab-single">
                  <div class="row">
                    <div
                      class="col-xl-3 col-lg-4 col-md-4 col-12"
                      v-for="item in mobile"
                      :key="item.id"
                    >
                      <div class="single-product">
                        <div class="product-img">
                          <router-link to="/productdetail">
                            <img
                              class="default-img"
                              v-bind:src="item.image"
                              alt="#"
                            />
                          </router-link>
                          <div class="button-head">
                            <div class="product-action">
                              <a
                                data-toggle="modal"
                                data-target="#exampleModal"
                                title="Quick View"
                                href="#"
                                ><i class="ti-eye"></i
                                ><span>Quick Shop</span></a
                              >
                              <a title="Wishlist" href="#"
                                ><i class="ti-heart"></i
                                ><span>Add to Wishlist</span></a
                              >
                              <a title="Compare" href="#"
                                ><i class="ti-bar-chart-alt"></i
                                ><span>Add to Compare</span></a
                              >
                            </div>
                            <div class="product-action-2">
                              <router-link title="Shop" to="/productdetail"
                                >Shop</router-link
                              >
                            </div>
                          </div>
                        </div>
                        <div class="product-content">
                          <h3>
                            <a href="#">{{ item.title }}</a>
                          </h3>
                          <div class="product-price">
                            <span>₹ {{ item.price }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                      </div>
                      </div>
                    </div>
</template>
<script>
export default {
  name: "Mobile",
  data() {
    return {
      mobile: [],
    };
  },
  methods: {
    loadMob() 
    {
      fetch("https://9e1f8a98-a440-4b20-9455-b1662ca5a2a5.mock.pstmn.io")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then( (data) => {
          for (let i in data) {
            if (data[i].category == "Mobile") {
              this.mobile.push(data[i]);
              console.log(data[i]);
            }
          }
            console.log(this.mobile);
          
        });
    },
  },
 
};
</script>
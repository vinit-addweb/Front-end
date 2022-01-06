<template>
<div class="breadcrumb-option">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb__links">
            <router-link to="/home"><i class="fa fa-home"></i> Home</router-link>
            <span>All Products</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*---------------------
  Breadcrumb
-----------------------*/

.breadcrumb-option {
  padding-top: 35px;
}

.breadcrumb__links {
  text-align: start;
}

.breadcrumb__links a {
  font-size: 15px;
  font-weight: 500;
  color: #111111;
  margin-right: 18px;
  display: inline-block;
  position: relative;
}

.breadcrumb__links a:after {
  position: absolute;
  right: -14px;
  top: 0;
  content: "";
  font-family: "FontAwesome";
}

.breadcrumb__links a i {
  margin-right: 5px;
}

.breadcrumb__links span {
  font-size: 15px;
  font-weight: 500;
  color: #888888;
  display: inline-block;
}

</style>
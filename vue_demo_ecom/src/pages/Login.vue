<template>
<!-- <router-view>   </router-view> -->
  <div class="login">
    <!-- Modal -->
    
     <div class="login-form">
    <div
      class="modal fade modal-dialog-centered "
      id="login"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" >
        <div class="modal-content">
          <div class="modal-header">
          
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <!-- <navigation></navigation> -->
          </div>

        
          
           <div class="modal-body signin_modal">
               <div class="tab-content signin_tab" id="myTabContent">

                  <!-- tabs -->
          <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#signup" role="tab" aria-controls="home" aria-selected="true">Sign Up</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="profile" aria-selected="false">Sign In</a>
  </li>
  
</ul>

  
          <!-- tabs ends -->
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  <!-- form starts -->
              <form action="/examples/actions/confirmation.php" method="post">
                <h4 class="text-center">Sign in</h4>
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon"
                      ><i class="fa fa-user"></i
                    ></span>
                    <input
                      type="text"
                      class="form-control"
                      name="username"
                      placeholder="Username"
                      required="required"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <span class="input-group-addon"
                      ><i class="fa fa-lock"></i
                    ></span>
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      placeholder="Password"
                      required="required"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-primary login-btn btn-block"
                  >
                    Sign in
                  </button>
                </div>
                <div class="clearfix">
                  <label class="pull-left checkbox-inline"
                    ><input type="checkbox" /> Remember me</label
                  >
                  <a href="#" class="pull-right">Forgot Password?</a>
                </div>
                <div class="or-seperator"><i>or</i></div>
                <p class="text-center">Login with your social media account</p>
                <div class="text-center social-btn">
                  <a href="#" class="btn btn-primary"
                    ><i class="fa fa-facebook"></i>&nbsp; Facebook</a
                  >
                  <a href="#" class="btn btn-info"
                    ><i class="fa fa-twitter"></i>&nbsp; Twitter</a
                  >
                  <a href="#" class="btn btn-danger"
                    ><i class="fa fa-google"></i>&nbsp; Google</a
                  >
                </div>
              </form>
          <!-- form ends -->

  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
          
              <!-- <p class="text-center text-muted small">
                Don't have an account? <a href="#">Sign up here!</a>
              </p> -->
           </div>
       
            </div>
          </div>
      </div>
        </div>
      </div>
    </div>
  
</template>
<script>
// import Navigation from './Navigation.vue';
export default {
  name: "Login",
  props: {
    msg: String,
  },
  components: {
    // Navigation
  },
};
</script>

<style  scoped>
.login-form {
  width: 30%;
  margin: 30px auto;
}
.login-form form {
  margin-bottom: 15px;
  background: #f7f7f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.login-form h2 {
  margin: 0 0 15px;
}
.form-control,
.login-btn {
  min-height: 38px;
  border-radius: 2px;
}
.input-group-addon .fa {
  font-size: 18px;
}
.login-btn {
  font-size: 15px;
  font-weight: bold;
}
.social-btn .btn {
  border: none;
  margin: 10px 3px 0;
  opacity: 1;
}
.social-btn .btn:hover {
  opacity: 0.9;
}
.social-btn .btn-primary {
  background: #507cc0;
}
.social-btn .btn-info {
  background: #64ccf1;
}
.social-btn .btn-danger {
  background: #df4930;
}
.or-seperator {
  margin-top: 20px;
  text-align: center;
  border-top: 1px solid #ccc;
}
.or-seperator i {
  padding: 0 10px;
  background: #f7f7f7;
  position: relative;
  top: -11px;
  z-index: 1;
}

.signin_modal .nav-tabs .nav-link {

background-color: #e5e5e5;
border-radius:0 ;
font-weight: 600;
border-color:#fff;

}
.signin_modal .nav-tabs .nav-link.active{
background-color: #fff;
}

.signin_modal .nav-tabs .nav-item{
text-align: center;
width: 50%;
margin-bottom: 2rem;
}
.signin_modal .nav-tabs{
border-bottom:none;
}
.signin_tab{
padding: 0 3rem;
}
.signin_tab input.form-control{
font-size: 12px;
color:#8c8c8c;}
</style> 
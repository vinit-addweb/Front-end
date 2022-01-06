<template>
  <router-view> </router-view>
  
  <div class="login">
    <!-- Modal -->

    <div class="login-form">
      <div
        class="modal fade modal-dialog-centered"
        id="login"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
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
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#signin"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                      >Sign In</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#signup"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                      >Sign Up</a
                    >
                  </li>
                </ul>

                <!-- tabs ends -->
                <div
                  class="tab-pane fade show active"
                  id="signin"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <!-- login form starts -->
                  <form
                    action="/examples/actions/confirmation.php"
                    method="post"
                    @submit.prevent="submitform"
                  >
                    <h4 class="text-center">Sign in</h4>
                    <div class="form-group">
                      <div class="input-group">
                        <span class="input-group-addon"
                          ><i class="fa fa-user"></i
                        ></span>
                        <input
                          type="email"
                          class="form-control"
                          
                          placeholder="Email"
                          id="email"
                          v-model.trim="email"
                        >
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
                          
                         v-model.trim="password">
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
                    <p class="text-center">
                      Login with your social media account
                    </p>
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
                  <p v-if="!form">Please enter a Valid email and password</p>
                  <!-- form ends -->
                </div>
                <!-- sign up page start -->
                <div
                  class="tab-pane fade"
                  id="signup"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  
                    <!-- <div class="signup-form"> -->
                      <form
                        action="/examples/actions/confirmation.php"
                        method="post"
                      >
                        <h4>Sign Up</h4>
                        <p>Please fill in this form to create an account!</p>
                        <hr />
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
                              ><i class="fa fa-paper-plane"></i
                            ></span>
                            <input
                              type="email"
                              class="form-control"
                              name="email"
                              placeholder="Email Address"
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
                              type="text"
                              class="form-control"
                              name="password"
                              placeholder="Password"
                              required="required"
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="input-group">
                            <span class="input-group-addon">
                              <i class="fa fa-lock"></i>
                              <i class="fa fa-check"></i>
                            </span>
                            <input
                              type="text"
                              class="form-control"
                              name="confirm_password"
                              placeholder="Confirm Password"
                              required="required"
                            />
                          </div>
                        </div>
                        <!-- <div class="form-group">
                          <label class="checkbox-inline"
                            ><input type="checkbox" required="required" /> I
                            accept the <a href="#">Terms of Use</a> &amp;
                            <a href="#">Privacy Policy</a></label
                          >
                        </div> -->
                        <div class="form-group">
                      <button
                        type="submit"
                        class="btn btn-primary login-btn btn-block"
                      >
                        Sign Up
                      </button>
                    </div>
                        <!-- <div class="form-group">
                          <button type="submit" class="btn btn-primary btn-lg">
                            Sign Up
                          </button>
                          
                        </div> -->
                      </form>
                      <!-- <div class="text-center">
                        Already have an account? <a href="#">Login here</a>
                      </div> -->
                    <!-- </div> -->
                  
                </div>
                <!-- sign up page ends -->

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
  data(){
    return{
      email:'',
      password:'',
      form:true
      
    }
  },
  methods:{
    submitform()
     {
       this.form = true
      if(this.email=== ''|| !this.email.includes('@')){
        this.form=false
        return;
      }
    }
    
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
  border-radius: 0;
  font-weight: 600;
  border-color: #fff;
}
.signin_modal .nav-tabs .nav-link.active {
  background-color: #fff;
}

.signin_modal .nav-tabs .nav-item {
  text-align: center;
  width: 50%;
  margin-bottom: 0.5rem;
}
.signin_modal .nav-tabs {
  border-bottom: none;
}
.signin_tab {
  padding: 0 3rem;
}
.signin_tab input.form-control {
  font-size: 12px;
  color: #8c8c8c;
  height: 40px;
}

 
.form-control,
.form-control:focus,
.input-group-addon {
  border-color: #e1e1e1;
}
.form-control,
.btn {
  border-radius: 3px;
}
.signup-form {
  width: 390px;
  margin: 0 auto;
  padding: 30px 0;
}
.signup-form form {
  color: #999;
  border-radius: 3px;
  margin-bottom: 10px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.signup-form h4 {
  color: #333;
  font-weight: bold;
  margin-top: 0;
}
.signup-form hr {
  margin: 0 -30px 20px;
}
.signup-form .form-group {
  margin-bottom: 10px;
}
.signup-form label {
  font-weight: normal;
  font-size: 13px;
}
.signup-form .form-control {
  min-height: 38px;
  box-shadow: none !important;
}
.signup-form .input-group-addon {
  max-width: 42px;
  text-align: center;
}
.signup-form input[type="checkbox"] {
  margin-top: 1px;
}
.signup-form .btn {
  font-size: 16px;
  font-weight: bold;
  background: #19aa8d;
  border: none;
  min-width: 140px;
}
.signup-form .btn:hover,
.signup-form .btn:focus {
  background: #179b81;
  outline: none;
}
.signup-form a {
  color: #fff;
  text-decoration: underline;
}
.signup-form a:hover {
  text-decoration: none;
}
.signup-form form a {
  color: #19aa8d;
  text-decoration: none;
}
.signup-form form a:hover {
  text-decoration: underline;
}
.signup-form .fa {
  font-size: 21px;
}
.signup-form .fa-paper-plane {
  font-size: 18px;
}
.signup-form .fa-check {
  color: #fff;
  left: 17px;
  top: 18px;
  font-size: 7px;
  position: absolute;
}
</style> 
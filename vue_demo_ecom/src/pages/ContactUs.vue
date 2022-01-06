<template>
    <section>
        <!--Header Start-->
            <the-header></the-header>
        <!--Header End-->
        
        <!-- Breadcrumb Begin -->
        <bread-crumb></bread-crumb>
      <!-- Breadcrumb End -->
<div class="container">
    <div class="row">
        <div class="col">
            <p style="font-size:40px;">Contact Us</p>
        </div>
    </div>
</div>
<div class="container">
  <form action="action_page.php">

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." >

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">India</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
    <br>
    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <input type="submit" value="Submit">

  </form>
</div>
<div class="mt-5">
</div> 

        <!--Footer Start-->
            <the-footer></the-footer>
        <!--Footer End-->
    </section>
</template>

<script>
import TheHeader from "../components/layouts/TheHeader.vue";
import TheFooter from "../components/layouts/TheFooter.vue";
import BreadCrumb from '../pages/BreadCrumb.vue'

export default {
  components: { TheHeader, TheFooter,BreadCrumb },
  name: "Home",
  TheHeader,
  TheFooter,
};
</script>

<style scoped>
/*---------------------
  Breadcrumb
-----------------------*/

.breadcrumb-option {
	padding-top: 35px;
}

.breadcrumb__links{
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

 /* Style inputs with type="text", select elements and textareas */
input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #fba300;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type=submit]:hover {
  background-color: #a3a3a3;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #ffffff;
  padding: 20px;
} 

label{
    font-size: 25px;
    float: left;
    color: orange;
}
</style>

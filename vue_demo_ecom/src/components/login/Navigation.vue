<template>
  <header>
    <nav>
      <ul>
        <li>
          <!-- <button @click="setActivePage('teams-list')">Teams</button> -->
          <router-link to="/Signin">Sign in</router-link>
        </li>
        <li>
          <!-- <button @click="setActivePage('users-list')">Users</button> -->
          <router-link to="/users">Sign up</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>



<style scoped>
header {
  width: 100%;
  height: 5rem;
 
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

li {
  margin: 0 2rem;
  
  
}

a {
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: black;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  text-decoration: none;
}

a:hover,
a:active,
a.active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>
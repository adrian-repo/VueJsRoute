<template>
    <div class="container-fluid">
      <div id="app">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
              </button>
              
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                      <li class="nav-item active">
                        <router-link class="nav-link" :to="'/'">Home</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" :to="'/posts'">Posts Page</router-link>
                      </li>
                    </ul>
              </div>
        </nav>
    </div>
     <div class="container">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import PostsPage from './components/PostsPage'
import HomePage from './components/HomePage'

export default {
  name: 'App',
  components: {
    HomePage,
    PostsPage
  }
}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
.container-fuid {
  margin:0px;
  padding: 0px;
}
</style>

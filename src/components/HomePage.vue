<template>
 
  
    <div class="jumbotron">
        <h1>{{title}}</h1>
        <hr>
        <p>{{msg1}}</p>
        <p>{{msg2}}</p>
    </div>

</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      title: 'HomePage',
      msg1: 'This is a simple example of routing in Vue Js',
      msg2: 'Also, how to get and display data from a REST API like https://jsonplaceholder.typicode.com/users beautiful with Bootstrap ...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

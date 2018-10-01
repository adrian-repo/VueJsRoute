<template>

    <div class="container">
      <h1 class="text-center">{{title}}</h1>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="element in users" :key="element.id">
            <th scope="row">{{element.id}}</th>
           
            <td>{{element.name}}</td>
            <td>{{element.email}}</td>
            <td>{{element.address.city}}</td>
          </tr>
        
        </tbody>
      </table>
    </div>

</template>

<script>
export default {
  name: 'PostsPage',
  data () {
    return {
      title: 'Info Page',
      users: [],
    }
  },

  created: function(){
            this.$http.get('https://jsonplaceholder.typicode.com/users')
            .then(function(response){
                this.users = response.data;
                console.log(this.users.data)

            });

    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container h1 {
      padding:20px;
}

tr:hover {
 color: red;
}

</style>

<template>
<div>
      <Header />
</div>
  <div class="customers">
    <h1>All Customers</h1>
    <br>
    <table>
      <thead>
        <tr>
          <td><input @click="checkAll" v-model="allChecked" type="checkbox" /></td>
          <td>ID</td>
          <td>NAME</td>
          <td> ADDRESS</td>
          <td>CONTACT</td>
          <td>CITY</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in customers" :key="person.id">
          <td><input type="checkbox" :value="person.id" v-model="checkBoxes" /></td>
          <td>{{person.id}}</td>
          <td>{{person.name}}</td>
          <td>{{person.address}}</td>
          <td>{{person.contact}}</td>
          <td>{{person.city}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  name:"Customer",
  data(){
    return{
      allChecked:false,
      checkBoxes:[],
    }
  },
  computed:{
    customers(){
      return this.$store.state.customers
    }
  },
  components:{
    Header,
  },
  methods:{
    checkAll(){
      this.checkBoxes = []
      if(!this.allChecked){
        for(var i in this.customers ){
          this.checkBoxes.push(this.customers[i].id)
        }
      }
    }
  }
}
</script>

<style scoped>
table{
   box-shadow: 2px 3px rgba(179, 177, 177, 0.3) ;
   border-collapse: collapse;
}
td{
   border-collapse: collapse;
   padding:10px 40px
}
tbody tr:hover{
    background:rgba(179, 177, 177, 0.3)
}
thead tr td{
  color:grey;
  font-weight: bold;
}
.customers{
  margin-left: 3.5cm;
  margin-top: -18cm;
}
</style>
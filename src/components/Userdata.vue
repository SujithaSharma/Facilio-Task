<template>
<div>
      <Header />
      <Profile style="display:none" />
</div>
  <div class="user">
      <div class="details"> 
          <h2>Your Details</h2>
          <br>
          <label>Firstname
          <input :value="firstname" @input="firstnameChanged" placeholder="Firstname" />
          </label>
          <br><br>
           <label style="margin-left:2px">Lastname
          <input :value="lastname" @input="lastnameChanged" placeholder="Lastname" />
          </label>
          <br><br>
           <label style="margin-left:12px">Position
          <input :value="position" placeholder="Position" />
          </label>
          <br><br>
          <label style="margin-left:30px">Email
          <input :value="email" @input="emailChanged" placeholder="Email" />
          </label>
          <br><br>
          <label style="margin-left:31px">D.O.J
          <input type="date" placeholder="DOJ" />
          </label>
          <br><br>
          <label style="margin-left:11px">Contact
          <input :value="contact" placeholder="Contact" />
          </label>
          <br><br>
          <label>Profile Pic
          <input  type="file" @change="changed" style="border:none"/>
          <br>
          </label>
      </div>
      <div class="id"> 
          <h2>ID Card</h2>
          <br>
          <div class="idimage"><h5>FACILIO TECHNOLOGY</h5>
              <img :src="profilepic"/>
              <h5  style="margin-left:0.5cm">STUDENT INTERN</h5>
          </div>
          <div class="iddetail">
              <h6>NAME: {{firstname}} {{lastname}}</h6>
              <h6>POSITION: {{position}}</h6>
              <h6>EMPLOYEE ID: 84738DHD</h6>
              <h6>EMAIL: {{email}}</h6>
              <h6>CONTACT: {{contact}}</h6>
          </div>
      </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import Profile from './Profile.vue'
import {mapState} from 'vuex'
export default {
    name:'Userdata',
    computed:{
        ...mapState([
            'firstname',
            'lastname',
            'position',
            'email',
            'contact',
            'profilepic'
        ])
    },
    methods:{
        changed(event){
            const image = event.target.files[0];
            this.$store.state.profilepic = URL.createObjectURL(image);
        },
        firstnameChanged(event){
            this.$store.state.firstname = event.target.value
        },
        lastnameChanged(event){
            this.$store.state.lastname = event.target.value
        },
        emailChanged(event){
            this.$store.state.email = event.target.value
        }
    },
    components:{
    Header,
    Profile
  }
}
</script>

<style scoped>
.user{
    display:flex;
    flex-direction: row;
    margin-left: 3.5cm;
    margin-top: -17cm;
    width:max-content;
    box-shadow: 2px 3px rgba(179, 177, 177, 0.3) ;
}
input{
    width:300px;
    height:30px;
    border:1px solid rgb(0,0,49);
    outline: none;
    border-radius:4px;
}
.details{
    border:1px solid black;
    padding:20px 30px;
}
.id{
    border:1px solid black;
    padding:20px 30px;
}
.iddetail{
    border:1px solid black;
    padding:20px 30px;
    box-shadow: 3px black solid;
    font-weight: bold;
}
img{
    border-radius:50%;
    max-width:100px;
    max-height:100px;
    margin-left:1.2cm;
    padding:10px;
}
.idimage{
    border:1px solid black;
    padding:20px 30px;
    background:coral
}
button{
     margin-left:3cm;
     margin-top:20px
}
</style>
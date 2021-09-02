<template>
    <link
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    rel="stylesheet"/>
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"/>
<div class="title">
<div class="logo">
    <img id="logo" src="https://image4.owler.com/logo/facilio_owler_20180719_213054_original.png">
 </div>
 <div class="header">
   <span class="fas fa-plus-circle"></span>
    <span class="fas fa-bell" ></span>
    <img @click ="showProfile=true" src="https://www.w3schools.com/howto/img_avatar.png" class="img" />
</div>
</div>
<Profile v-show="showProfile" class="profile" />
<div class="sidebar">
    <div><div @click="customer" class="grey fas fa-user-tie">
    <div class="tool">Customer</div></div></div>
    <div><div @click="invoice" id="invoice" class="grey fas fa-file-alt">
      <div class="tool">Invoice</div></div>
   </div>
    <div><div @click="userdata" id="userdata" class="grey fas fa-user">
       <div class="tool">Userdata</div>
    </div>
   </div>
</div>
</template>
<script>
import Profile from './Profile.vue'
export default {
  name : 'Header',
  methods:{
    customer(){
      this.$router.push({name:'Customer'})
    },
    invoice(){
      this.$router.push({name:'Invoice'})
    },
    userdata(){
      this.$router.push({name:'Userdata'})
    },
  },
  components:{
     Profile
  },
  data(){
    return{
      showProfile:false,
    }
  }
}
</script>
<style scoped>
.fas{
    color:white;
    font-size: 22px;
}
.img{
    width:28px;
    border-radius:50%
}
.title{
  background: rgb(34, 34, 70);
  padding:11px;
  display:flex;
  flex-direction: row;
  position:relative;
}
.profile{
  position:absolute;
}
.logo{
 flex-basis:85%;
}
.header{
  display:flex;
  flex-direction: row;
  flex-basis:15%;
  justify-content: space-evenly;
  align-self: auto;
}
#logo{
  width:2cm;
  margin-left:0.5cm;
  background:white;
}
.sidebar{
   display:inline-flex;
   flex-direction: column;
    border:1px solid white;
    box-shadow: 1px 3px rgba(116, 116, 116, 0.5);
    width:fit-content;
    height:18.7cm;
}
.grey{
    font-size: 18px;
    padding:20px 20px;
    color:grey;
     position:relative;
}
.grey:hover{
    background:rgba(165, 207, 241,0.4);
    color:violet;
}
.grey:hover .tool{
  opacity: 1;
}
.tool{
  position:absolute;
  top:0.8rem;
  left:3.8rem;
  padding:8px 10px;
  background: black;
  color:white;
  border-radius: 8%;
  opacity:0;
  font-weight: 300;
  transition:1s
}
.tool::before{
  content:"";
  position:absolute;
  top:0.3em;
  width:10px;
  height:10px;
  background: black;
  transform:rotate(45deg);
  margin-left: -0.9rem;
  margin-top: 0.4rem;
}
</style>

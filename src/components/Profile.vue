<template>
  <div class="profile">
    <img :src="profilepic"/>
    <h6>{{firstname}}.{{lastname}}</h6>
    <h6>{{email}}</h6>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Profile",
  computed:{
        ...mapState([
            'firstname',
            'lastname',
            'email',
            'profilepic'
        ])
    },
};
</script>

<style scoped>
.profile {
  margin-left: 35cm;
  border: 1px solid black;
  padding:10px 20px;
  display:flex;
  flex-direction: column;
  place-items: center;
  background:rgba(179, 177, 177, 0.3);
  position:relative
}
.fas{
  position: absolute;
  margin-right:-4cm
}
img {
  border-radius: 50%;
  max-width: 150px;
  max-height: 150px;
  padding:10px 20px;
}
</style>
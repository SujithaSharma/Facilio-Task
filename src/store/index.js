import { createStore } from 'vuex'

export default createStore({
  state: {
    customers:[
      {id:1,name:"Sujitha",contact:9482239226,address:"425/38 A1 Street",city:"Coimbatore",no:1002,item:"HP laptop", price:67000},
      {id:2,name:"Vishnu",contact:9485839226,address:"445/38 A2 Street",city:"Chennai",no:383,item:"ASUS laptop", price:40000},
      {id:3,name:"Shiva",contact:9482235916,address:"425/38 A3 Street",city:"Erode",no:829,item:"DELL laptop", price:30000},
      {id:4,name:"Surya",contact:9482839243,address:"415/48 B1 Street",city:"Salem",no:781,item:"MACBook", price:120000},
      {id:5,name:"Gowtham",contact:9482248226,address:"875/38 B3 Street",city:"Namakkal",no:975,item:"Lenovo", price:50000},
      {id:6,name:"Anush",contact:9232235926,address:"335/38 C3 Street",city:"Chennai",no:763,item:"ASUS laptop", price:40000},
      {id:7,name:"Ashwin",contact:9482235906,address:"543/38 C2 Street",city:"Trivandrum",no:291,item:"MACBook", price:120000},
      {id:8,name:"Vaibhav",contact:9482232926,address:"836/38 A2 Street",city:"Erode",no:234,item:"HP laptop", price:67000},
      {id:9,name:"Swetha",contact:9482635896,address:"637/38 B1 Street",city:"Thanjore",no:456,item:"ASUS laptop", price:40000},
      {id:10,name:"Barghav",contact:9482235945,address:"482/38 B3 Street",city:"Dharmapuri",no:383,item:"DELL laptop", price:50000},
  ],
            firstname:'Sujitha',
            lastname:'V',
            position:'FrontEnd Devoper',
            email:'sujithav@facilio.com',
            contact:'9095088446',
            profilepic:"https://www.w3schools.com/howto/img_avatar.png",
  },
  mutations: {

  },
  actions: {
  },
  modules: {
  }
})

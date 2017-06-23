
Vue.component('news-item', {
  props: ['item'],
    template: '\
      <li v-bind:class="item.place">{{ item.text }}\
        <span v-bind:class="item.iplace">\
        <a v-bind:href="item.url" target="_blank">\
	  <img v-bind:src="item.image" class="img-circle"/></a>\
	</span>\<br/>\
	<span class="font-small text-muted">{{item.posted}}</span>\
       </li>'
})

new Vue({
  el: '#news-items',
  data: {
        news: [
	
	      { text: "Cars 3",image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzU2OTYyN15BMl5BanBnXkFtZTgwMTkwOTg2MTI@._V1_UY67_CR0,0,45,67_AL_.jpg",posted:"Brian Fee (dir.), Owen Wilson, Cristela Alonzo",place:"",iplace:"",url:"" }
        
          ,
        
	
	      { text: "Wonder Woman",image:"https://images-na.ssl-images-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UY67_CR0,0,45,67_AL_.jpg",posted:"Patty Jenkins (dir.), Gal Gadot, Chris Pine",place:"",iplace:"",url:"" }
        
          ,
        
	
	      { text: "All Eyez on Me",image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5NzQ4NzU4OF5BMl5BanBnXkFtZTgwNTkxMzE0MjI@._V1_UX45_CR0,0,45,67_AL_.jpg",posted:"Benny Boom (dir.), Demetrius Shipp Jr., Danai Gurira",place:"",iplace:"",url:"" }
        
          ,
        
	
	      { text: "The Mummy",image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5NzM5NTgxN15BMl5BanBnXkFtZTgwNDEyNTk4MTI@._V1_UX45_CR0,0,45,67_AL_.jpg",posted:"Alex Kurtzman (dir.), Tom Cruise, Sofia Boutella",place:"",iplace:"",url:"" }
        
          ,
        
	
	      { text: "47 Meters Down",image:"https://images-na.ssl-images-amazon.com/images/M/MV5BOGJlNDJkZmEtMjUwNS00ZWViLWIyZGEtN2Y5ZjZlNDE1NWJkXkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_UY67_CR0,0,45,67_AL_.jpg",posted:"Johannes Roberts (dir.), Mandy Moore, Claire Holt",place:"",iplace:"",url:"" }
        
          ,
        
	
	      { text: "Pirates of the Caribbean: Dead Men Tell No Tales",image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYyMTcxNzc5M15BMl5BanBnXkFtZTgwOTg2ODE2MTI@._V1_UY67_CR0,0,45,67_AL_.jpg",posted:"Joachim Rnning (dir.), Johnny Depp, Geoffrey Rush",place:"",iplace:"",url:"" }
        
          ,
        
	
	      { text: "Rough Night",image:"https://images-na.ssl-images-amazon.com/images/M/MV5BODY1NDUzNzY4MV5BMl5BanBnXkFtZTgwNzc3NzcyMjI@._V1_UY67_CR0,0,45,67_AL_.jpg",posted:"Lucia Aniello (dir.), Scarlett Johansson, Kate McKinnon",place:"",iplace:"",url:"" }
        
          ,
        
	
	      { text: "Captain Underpants: The First Epic Movie",image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MzM2NzgzNV5BMl5BanBnXkFtZTgwODU3NTI0MTI@._V1_UY67_CR0,0,45,67_AL_.jpg",posted:"David Soren (dir.), Kevin Hart, Thomas Middleditch",place:"",iplace:"",url:"" }
        
          ,
        
	
	      { text: "Guardians of the Galaxy Vol. 2",image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_UY67_CR0,0,45,67_AL_.jpg",posted:"James Gunn (dir.), Chris Pratt, Zoe Saldana",place:"",iplace:"",url:"" }
        
          ,
        
	
	      { text: "It Comes at Night",image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ3MDA0ODA2N15BMl5BanBnXkFtZTgwNzg0NzgwMjI@._V1_UY67_CR0,0,45,67_AL_.jpg",posted:"Trey Edward Shults (dir.), Joel Edgerton, Christopher Abbott",place:"",iplace:"",url:"" }
        
	
        ]
  }
})
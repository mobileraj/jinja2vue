
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
	
	      { text: "A day that will always live in infamy https://t.co/NyZSRkBgeE",image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzU2OTYyN15BMl5BanBnXkFtZTgwMTkwOTg2MTI@._V1_UY67_CR0,0,45,67_AL_.jpg",posted:"2016-11-27",place:"left clearfix",iplace:"chat-img pull-left",url:"https://twitter.com/GalvNews/status/802742569876779012" }
        
          ,
        
	
	      { text: "Shoppers notice light Black Friday crowds #Galvnews https://t.co/bt2r9ndQH1",image:"https://images-na.ssl-images-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UY67_CR0,0,45,67_AL_.jpg",posted:"2016-11-26",place:"right clearfix",iplace:"chat-img pull-right",url:"https://twitter.com/GalvNews/status/802384028934533120" }
        
	
        ]
  }
})
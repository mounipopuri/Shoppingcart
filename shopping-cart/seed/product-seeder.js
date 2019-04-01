var Product =require('../models/product');
var mongoose =require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });
var products = [
	new Product({
		imagePath:'./images/pens.jpg',
		title:'Pens',
		description:'Space Pen Bullet Chrome Finish',
		price: 2
		}),
	new Product({
		imagePath:'./images/book.jpg',
		title:'Books',
		description:'The Cartoon Guide to Physics',
		price: 2
		}),
	new Product({
		imagePath:'./images/marker.jpg',
		title:'Markers',
		description:'Camlin Permanent Marker Black',
		price: 2
		}),
	new Product({
		imagePath:'./images/pens.jpg',
		title:'Pens',
		description:'Space Pen Bullet Chrome Finish',
		price: 2
		}),
	new Product({
		imagePath:'./images/book.jpg',
		title:'Books',
		description:'The Cartoon Guide to Physics',
		price: 2
		}),
	new Product({
		imagePath:'./images/marker.jpg',
		title:'Markers',
		description:'Camlin Permanent Marker Black',
		price: 2
		}),
];
var done=0;
for (var i= 0; i< products.length; i++){
	products[i].save(function(err,result){
		done++;
		if(done === products.length){
			exit();
		}
	});
}
function exit(){
	mongoose.disconnect();
}
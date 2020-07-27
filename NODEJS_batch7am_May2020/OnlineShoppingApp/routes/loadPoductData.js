var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var data = [
		{name:'Laptop', price: '$3000', manu: 'Sony', discount: '12%', image:'https://i.dell.com/sites/csimages/Video_Imagery/all/xps_7590_touch.png'},
		{name:'Mobile', price: '$200', manu: 'Iphone', discount: '6%', image:'https://images-na.ssl-images-amazon.com/images/I/71YC1181G3L._SL1200_.jpg'},
		{name:'Pen', price: '$15', manu: 'Reynolds', discount: '2%', image:'https://pyxis.nymag.com/v1/imgs/f73/f8c/e3355aa4ea6c1ce7e72b20fc56dfc50630-Pentel-Tradio-Pen-.2x.rhorizontal.w600.jpg'},
		{name:'Hard disk', price: '$1200', manu: 'ScanDisk', discount: '5%', image:'https://previews.123rf.com/images/supparsorn/supparsorn1807/supparsorn180700024/106448798-external-hard-drive-or-hard-disk-hdd-isolated-on-white-background.jpg'},
		{name:'Charger', price: '$45', manu: 'Samsung', discount: '11%', image:'https://rukminim1.flixcart.com/image/352/352/k5si2kw0/battery-charger/d/6/d/vooy-compatible-nxt-generation-charger-original-imafnxgjzmfahfhs.jpeg?q=70'},
		{name:'Desktop', price: '$4000', manu: 'Dell', discount: '22%', image:'https://5.imimg.com/data5/EF/RQ/MY-3030942/lenovo-desktop-computer-500x500.jpg'},
	];

	data = JSON.stringify(data);

	res.send(data);
});

module.exports = router;

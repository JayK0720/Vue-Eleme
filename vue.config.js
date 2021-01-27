const data = require('./data.json');
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpack = require('webpack');

function resolve(dir){
	return path.join(__dirname,dir);
}

module.exports = {
	productionSourceMap:false,
	devServer:{
		before:function(app){
			app.get("/api/goods",function(req,res) {
				res.json({
					code:0,
					data:data.goods
				})
			})
			app.get('/api/seller',function(req,res){
				res.json({
					code:0,
					data:data.seller
				})
			})
			app.get("/api/ratings",function(req,res){
				res.json({
					code:0,
					data:data.ratings
				})
			})
		}
	},
	chainWebpack(config){
		config.resolve.alias.set('@ant-design/icons/lib/dist$',resolve('src/common/js/icon.js'))
		config.plugin('context')
		.use(webpack.ContextReplacementPlugin,[/moment[/\\]locale$/,/zh-cn/])
	}
}
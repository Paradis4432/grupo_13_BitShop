const product = require("../models/product");
module.exports = {
	index: (req, res) => res.render("products/list", {style: "productList", title: "Product | List", product: product.all()}),
	detail: (req, res) => res.render("products/detail", {style: "productDetail", title: "Product | Detail", product: product.one(req.params.id)}),
	create: (req, res) => res.render("products/create", {style: "create", title: "Product | Create"}),
	edit: (req, res) => res.render("products/edit", {style: "edit", title: "Product | Edit", product: product.one(req.params.id)}),
    cart: (req, res) => res.render("products/cart", {style: "productCart", title: "Product | Cart"}),
	save: (req,res) => {
		/* return res.send({data: req.body, file: req.file && req.file.length > 0 ? req.file : {url:"/image/default.png"}}); */
		let saved = product.create(req.body.id); // product.new(req.body,req.file); ?
		return saved == true ? res.redirect("/"+saved.id) : res.status(500).send("Error al cargar la informacion") 
	},
	edit: (req,res) => res.render("product/edit",{product:product.one(req.params.id),colors: color.all(),brands:brand.all()}),
	update: (req,res) =>{
		let updated = product.edit(req.body,req.file,req.params.id)
		return updated == true ? res.redirect("/"+updated.id) : res.status(500).send("Error al cargar la informacion") 
	},
	delete: (req,res) => {
		let deleted = product.delete(req.params.id); // req.body.id ?
		return deleted == true ? res.redirect("/") : res.status(500).send("Error al cargar la informacion") 
	} 
}


/* puede ir res.redirect("/"+updates.id) : res.status(500).send("Error al cargar la informacion") */ 
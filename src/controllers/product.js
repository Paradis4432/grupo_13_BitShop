module.exports = {
	index: (req, res) => res.render("products/list", {style: "productList", title: "Product | List"}),
	detail: (req, res) => res.render("products/detail", {style: "productDetail", title: "Product | Detail"}),
	create: (req, res) => res.render("products/create", {style: "", title: "Product | Create"}),
	edit: (req, res) => res.render("products/edit", {style: "", title: "Product | Edit"}),
    cart: (req, res) => res.render("products/cart", {style: "productCart", title: "Product | Cart"})
}


const app= new Vue({
    el: "#app",
    data: {
        mensaje: "hola mundo con vue",
        products: [
            {
                id: 1,
                name: "AMD RYZEN 3 4100",
                img:"imagenes/pc1.png",
                descripcion1: " 8gb de ram",
                descripcion2: " SSD 240gb",
                price: "20000",
                moneda: "$",
            },
            {
                id: 2,
                name: "Intel Core i5 10400",
                img:"imagenes/pc2.png",
                descripcion1: " 8gb de ram",
                descripcion2: " SSD 960gb",
                price: "80000",
                moneda: "$",
            },
            {
                id: 3,
                name: "Intel Core i3 10100F",
                img:"imagenes/pc3.png",
                descripcion1: " 16gb de ram",
                descripcion2: " SSD 480gb",
                price: "50000",
                moneda: "$",
            }
        ],
            
        cart: [],
    
    },

    created(){
        
        this.fetchApi();
    },


   methods: {
    /*Agrega elemento al carrito */
        addCart(product){
            const itemCart=this.cart.filter((item) => item.id == product.id)[0]
            if(itemCart != undefined){
                itemCart.cant++;
            }else{
                const itemCart = {
                    id:product.id,
                    name:product.name,
                    price:product.price,
                    moneda:product.moneda,
                    cant:1,
                } 
                this.cart.push(itemCart);
            }
    },

    /*Elimina elemento del carrito */
    removeCart(product){
        const itemCart = this.products.filter((item) => item.id == product.id)[0];
        let indiceProduct = 0;
        this.cart.forEach((item, i) =>
        item.id == product.id ? (indiceProduct = i): null
        );
        this.cart.splice(indiceProduct,1);
    },

    /*Limpia carrito */
    cleanCart (){
        this.cart =[];
    },

},

computed: {
    cantProductsInCart(){
        return this.cart.reduce((acc, item) => acc + item.cant, 0);
    },
    totalPriceCart(){
        return this.cart.reduce((acc, item) => acc + item.cant * item.price, 0);
    
    },
},

});

console.log("JS Loaded!!!");

let product_container = document.getElementById("product_container");
async function getProducts(){
    try{

        await fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => {
            console.log(data.products);
            
            data.products.forEach(item => {
                console.log(item.title);

                product_container.innerHTML +=`<div class="col">
                    <div class="card">
                        <img src=${item.images[0]} class="card-img-top product_img" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">${item.price+"$"}</p>
                            <p>Category: ${item.category}</p>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>`;
                
            });

        })

    }catch (error) {
            
        console.error("Fetch error:", error);
    }



}

getProducts();

let modal_box_add = document.getElementById("modal_box_add_products");
let button_add = document.getElementById("button_add");

button_add.addEventListener("click", () => {
    console.log("Add button clicked");
        
    modal_box_add.style.display = 'block';
});


let button_close = document.getElementById("button_close");

button_close.addEventListener("click", () => {
    modal_box_add.style.display = 'none';
});

let button_close_top = document.getElementById("button_close_top");

button_close_top.addEventListener("click", () => {
    modal_box_add.style.display = 'none';
});

let button_save = document.getElementById("button_save");

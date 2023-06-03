const URI = 'https://fakestoreapi.com/products';
const getAllProducts = async () => {
    const respone = await fetch (URI);
    const data = await respone.json();
    console.log (data);
    let display = '';
    data.map((product) =>{
        display += `
        <div class="card" style="width: 18rem;">
        <img src="${product.image}" class="card-img-top"  alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.description}</p>
          <a href="#" class="btn btn-primary">$ ${product.price}</a>
        </div>
        </div>
        `;
    })
    document.getElementById('product').innerHTML = display;
}

getAllProducts();
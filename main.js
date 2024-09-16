const url = 'https://fakestoreapi.com/products';

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

        data.map((item) => {
            
            let imgContainer = document.createElement('div');
            imgContainer.classList.add('img-container'); 

       
            let text = document.createElement('p');
            text.textContent = item.title;
            imgContainer.appendChild(text);

           
            let img = document.createElement('img');
            img.src = item.image;
            img.alt = item.title; 
            imgContainer.appendChild(img);

         
            let price = document.createElement('h3');
            price.textContent = `$${item.price.toFixed(2)}`; 
            imgContainer.appendChild(price);

            
            let container = document.getElementById('container');
            container.appendChild(imgContainer);
            let button = document.createElement('button');
            button.textContent = 'Add to Cart'; 
            button.onclick = () => {
                alert(`${item.title} added to cart!`); 
            };
            imgContainer.appendChild(button);


        });
    })
   
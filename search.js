const searchButton = () =>{
    const item = document.getElementById('searchItem').value.toLowerCase().trim();
    const productList=document.querySelectorAll('.productList');
    if (!item) {
        alert('Please enter an item to search for.');
        return;
    }
    console.log(`Searching for: ${item}`);
    let found = false;
    productList.forEach((product) => {
        const productName = product.textContent.toLowerCase();
        if (productName.includes(item)) {
            product.style.display = 'block';
            found = true;
            alert('Your product has been found');
        } else {
            product.style.display = 'none';
        }
    });



}
document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchItem");
  const products = document.querySelectorAll("#productList .product");

  const filterProducts = () => {
    //session 13 here
    const query = searchInput.value.trim().toLowerCase();
    let anyVisible = false;

    products.forEach(product => {
      const text = product.textContent.trim().toLowerCase();
      if (text.includes(query)) {
        product.style.display = "";
        anyVisible = true;
      } else {
        product.style.display = "none";
      }
    });

    const root = document.getElementById("root");
    if (!anyVisible) {
      root.textContent = "No results found.";
    } else {
      root.textContent = "";
    }
  };

  // Prevent default form submission and filter products
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    filterProducts();
  });

  // Optional: filter live as user types
  searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") filterProducts();
  });
});
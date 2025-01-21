const grid = document.querySelector("#product-grid");
const url = "./data.json";
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok: " + response.statusText);
    }
    return response.json();
  })
  .then((data) => fecthdata(data))
  .catch((error) => console.error("Error fetching data:", error));
function fecthdata(data) {
  grid.innerHTML = "";
  data.forEach((item) => {
    // console.log(item.id);
    const layer = `<div
          class="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg  transition-shadow duration-300"
        >
          <img
            src="${item.image}"
            alt="Product Image"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h2 class="text-lg text-center font-semibold text-gray-800 truncate">
              ${item.name}
            </h2>
            <p class="text-gray-600 mt-2 text-center">$${item.price}</p>
            <button
              class="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>`;
    grid.innerHTML += layer;
  });
}

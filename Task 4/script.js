const API_URL = 'http://localhost:3000/api/vehicles'; // Replace if backend URL changes
const form = document.getElementById('vehicleForm');
const list = document.getElementById('vehicleList');

// Fetch and display all vehicles
async function fetchVehicles() {
  const res = await fetch(API_URL);
  const data = await res.json();
  list.innerHTML = '';
  data.forEach(vehicle => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${vehicle.vehicleName}</h3>
      <p><strong>Brand:</strong> ${vehicle.brand}</p>
      <img src="${vehicle.image}" alt="Vehicle Image" />
      <p><strong>Price:</strong> ₹${vehicle.price}</p>
      <p>${vehicle.desc}</p>
      <button onclick="deleteVehicle(${vehicle.id})">Delete</button>
    `;
    list.appendChild(card);
  });
}

// Add a new vehicle
form.addEventListener('submit', async function(e) {
  e.preventDefault();
  const vehicle = {
    vehicleName: form.vehicleName.value,
    price: form.price.value,
    image: form.image.value,
    desc: form.desc.value,
    brand: form.brand.value
  };
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(vehicle)
  });
  form.reset();
  fetchVehicles();
});

// Delete a vehicle
async function deleteVehicle(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  fetchVehicles();
}

// Load vehicles on page load
fetchVehicles();

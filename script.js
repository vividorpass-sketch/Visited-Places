// 1. Get references to the HTML elements
const tripForm = document.getElementById('new-place-form');
const tripList = document.getElementById('place-list');
const detailsSection = document.getElementById('place-details');

// 2. This array will hold all our trip data as objects
let trips = [];

// 3. Handle the form submission
tripForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevents the page from refreshing

  // Capture values from the inputs
  const tripData = {
    location: document.getElementById('new-location').value,
    landmarks: document.getElementById('new-landmarks').value,
    time: document.getElementById('new-time').value,
    notes: document.getElementById('new-notes').value
  };

  // Save the trip and update the UI
  trips.push(tripData);
  updateList();
  tripForm.reset();
});

// 4. Function to display the list of trip names
function updateList() {
  tripList.innerHTML = ''; // Clear the list before rebuilding it

  trips.forEach((trip, index) => {
    const li = document.createElement('li');
    li.textContent = trip.location;
    li.className = "clickable-item"; // You can style this in CSS
    
    // When a location is clicked, show its specific details
    li.addEventListener('click', function () {
      showTripDetails(index);
    });

    tripList.appendChild(li);
  });
}

// 5. Function to show the details in the right-hand column
function showTripDetails(index) {
  const selectedTrip = trips[index];

  // Remove the 'hidden' class so the details card appears
  detailsSection.classList.remove('hidden');

  // Fill in the spans with the trip data
  detailsSection.querySelector('.show-location').textContent = selectedTrip.location;
  detailsSection.querySelector('.show-landmarks').textContent = selectedTrip.landmarks;
  detailsSection.querySelector('.show-time').textContent = selectedTrip.time;
  detailsSection.querySelector('.show-notes').textContent = selectedTrip.notes;
}
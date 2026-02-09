const tripForm = document.getElementById('new-place-form');
const tripList = document.getElementById('place-list');
const detailsSection = document.getElementById('place-details');

let trips = [];

tripForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const tripData = {
    location: document.getElementById('new-location').value,
    landmarks: document.getElementById('new-landmarks').value,
    time: document.getElementById('new-time').value,
    notes: document.getElementById('new-notes').value
  };

  trips.push(tripData);
  updateList();
  tripForm.reset();
});


function updateList() {
  tripList.innerHTML = '';

  trips.forEach((trip, index) => {
    const li = document.createElement('li');
    li.textContent = trip.location;
    li.className = "clickable-item";
    
    
    li.addEventListener('click', function () {
      showTripDetails(index);
    });

    tripList.appendChild(li);
  });
}

function showTripDetails(index) {
  const selectedTrip = trips[index];
  
  detailsSection.classList.remove('hidden');
  
  detailsSection.querySelector('.show-location').textContent = selectedTrip.location;
  detailsSection.querySelector('.show-landmarks').textContent = selectedTrip.landmarks;
  detailsSection.querySelector('.show-time').textContent = selectedTrip.time;
  detailsSection.querySelector('.show-notes').textContent = selectedTrip.notes;

}

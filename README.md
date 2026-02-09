# Visited-Places
# Places You've Been

#### An application to track travel destinations using Object-Oriented JavaScript, February 2026

#### By **[Your Name Here]**

## Description
This project is a personal travel log that allows users to input details about places they have visited. It utilizes JavaScript constructors and prototypes to manage data objects. Users can add a location, landmarks, the time of year visited, and personal notes. Clicking on a destination in the list will display the specific details for that trip.


## Technologies Used
* HTML
* CSS
* JavaScript 
  

---

## Tests (TDD Process)

### Describe: Place()
**Test:** "It should create a Place object with location, landmarks, time of year, and notes."  
**Code:** `const myTrip = new Place("Tokyo", "Shibuya Crossing", "Spring", "Great food!");`  
**Expected Output:** `Place { location: "Tokyo", landmarks: "Shibuya Crossing", timeOfYear: "Spring", notes: "Great food!" }`

### Describe: TravelLog()
**Test:** "It should create a TravelLog object with an empty places object and an initial ID of 0."  
**Code:** `const myLog = new TravelLog();`  
**Expected Output:** `TravelLog { places: {}, currentId: 0 }`

### Describe: TravelLog.prototype.addPlace()
**Test:** "It should add a Place object to the TravelLog and assign it a unique ID."  
**Code:** `let myLog = new TravelLog();`  
`let myTrip = new Place("Paris");`  
`myLog.addPlace(myTrip);`  
**Expected Output:** `myLog.places[1].location === "Paris"`

### Describe: TravelLog.prototype.findPlace()
**Test:** "It should return a specific Place object based on its unique ID."  
**Code:** `let myLog = new TravelLog();`  
`let myTrip = new Place("Nairobi");`  
`myLog.addPlace(myTrip);`  
`myLog.findPlace(1);`  
**Expected Output:** `Place { location: "Nairobi", ... }`

---

## Warm-Up Questions
1. **Difference between Literal Notation and Constructors:** Literal notation (`{}`) is used for one-off objects. Constructors (`function Place()`) act as blueprints to create many similar objects efficiently.
2. **Why use Prototypes?** Prototypes allow methods to be shared across all instances of an object type, saving memory and keeping code "DRY" (Don't Repeat Yourself).

## License
MIT License. Copyright (c) 2026 **[Your Name]**

var app = angular.module('myApp', []);
app.controller('myController', function($scope) {
    // Load saved entries from local storage on initialization
    $scope.entries = JSON.parse(localStorage.getItem('entries')) || [];

    // Function to add a new entry to the list and local storage
    $scope.addEntry = function() {
        if ($scope.newEntry) {
            $scope.entries.push($scope.newEntry);
            $scope.saveEntries(); // Save to local storage
            $scope.newEntry = ''; // Clear the input field
        }
    };

    // Function to delete an entry from the list and local storage
    $scope.deleteEntry = function(index) {
        $scope.entries.splice(index, 1); // Remove entry from array
        $scope.saveEntries(); // Update local storage
    };

    // Function to save entries to local storage
    $scope.saveEntries = function() {
        localStorage.setItem('entries', JSON.stringify($scope.entries));
    };
});

// Progress Bars JavaScript
window.onload = function () {
    const container = document.getElementById("container");  // Use the #container div

    const currentYear = new Date().getFullYear();

    for (let year = 2020; year <= currentYear; year++) {
        // Set up start and end dates for each year
        const startDate = new Date(`${year}-01-01`).getTime();
        const endDate = new Date(`${year}-12-31`).getTime();
        const curDate = Date.now();

        // Calculate progress for the year
        let progress = ((curDate - startDate) / (endDate - startDate)) * 100;
        if (progress > 100) progress = 100;

        // Create year container
        const yearContainer = document.createElement("div");
        yearContainer.id = `Year${year}`;
        yearContainer.className = "year-container";  // Added class for consistency with CSS

        // Create and style the header
        const yearHeader = document.createElement("h1");
        yearHeader.className = "h1";
        yearHeader.textContent = `Progress Bar ${year}`;
        yearContainer.appendChild(yearHeader);

        // Create progress meter container
        const progressMeter = document.createElement("div");
        progressMeter.className = "row meter";
        progressMeter.id = `firstdiv-${year}`;

        // Create the progress bar
        const progressBar = document.createElement("div");
        progressBar.className = "progress-bar progress-bar-striped active";
        progressBar.setAttribute("role", "progressbar");
        progressBar.setAttribute("aria-valuenow", progress);
        progressBar.setAttribute("aria-valuemin", "0");
        progressBar.setAttribute("aria-valuemax", "100");
        progressBar.id = `seconddiv-${year}`;
        progressBar.style.width = `${progress}%`;

        // Append progress bar to the meter container, then to the year container
        progressMeter.appendChild(progressBar);
        yearContainer.appendChild(progressMeter);

        // Add the completed year container to the #container div
        container.appendChild(yearContainer);

        // Add hover effects
        $(`#firstdiv-${year}`).hover(
            function () {
                $(this).css("background-color", "white");
            },
            function () {
                $(this).css("background-color", "#555");
            }
        );

        $(`#seconddiv-${year}`).hover(
            function () {
                $(this).css("background-color", "green");
            },
            function () {
                $(this).css("background-color", "red");
            }
        );
    }
};
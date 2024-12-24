// Function to save the state of the checkboxes to localStorage
function saveCheckboxState() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkboxStates = [];

    checkboxes.forEach((checkbox, index) => {
        checkboxStates[index] = checkbox.checked;
    });

    localStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));
}

// Function to load the state of the checkboxes from localStorage
function loadCheckboxState() {
    const checkboxStates = JSON.parse(localStorage.getItem('checkboxStates'));

    if (checkboxStates) {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox, index) => {
            checkbox.checked = checkboxStates[index];
        });
    }
}

// Function to navigate between pages
function navigate(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.add('hidden')); // Hide all pages

    const selectedPage = document.getElementById(page);
    selectedPage.classList.remove('hidden'); // Show the selected page

    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => link.classList.remove('active')); // Remove active class from all links

    const activeLink = document.querySelector(`a[href="#${page}"]`);
    activeLink.classList.add('active'); // Add active class to the selected link
}
// Function to show workout details based on the selected day
function showWorkout(workout) {
    // Hide all workout content
    const allWorkouts = document.querySelectorAll('.workout-content');
    allWorkouts.forEach(workoutContent => {
        workoutContent.classList.remove('active');
    });

    // Show the selected workout content
    const selectedWorkout = document.getElementById(workout);
    selectedWorkout.classList.add('active');
}

// Initialize page on load
document.addEventListener("DOMContentLoaded", () => {
    navigate('main-page');
    loadCheckboxState(); // Load the checkbox state on page load
});

// Save the checkbox state whenever a checkbox is changed
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', saveCheckboxState);
});

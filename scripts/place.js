// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
    }
    return "N/A";
}

// DOMContentLoaded event to ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Set current year
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // Set last modified date
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;

    // Static values for temperature and wind speed
    const temperature = parseFloat(document.getElementById('temperature').textContent);
    const windSpeed = parseFloat(document.getElementById('wind-speed').textContent);

    // Calculate and display wind chill
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('wind-chill').textContent = windChill;
});

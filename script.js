// Simple Tab System
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.add("hidden");
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("border-primary", "text-primary");
    }
    document.getElementById(tabName).classList.remove("hidden");
    evt.currentTarget.classList.add("border-primary", "text-primary");
}

// Simulated Mentor Notification
document.addEventListener('DOMContentLoaded', () => {
    console.log("ShikhaBondhon Platform Initialized");
    // You can add logic here to fetch tutor status from an API later
});

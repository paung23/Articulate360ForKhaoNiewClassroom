// Define a function to change the text of an HTML element with the specified ID
function changeText() {
    // Find the HTML element with the ID "targetElement"
    var element = document.getElementById("targetElement");

    // Check if the element exists
    if (element) {
        // Change the text of the element
        element.innerText = "Text changed by JavaScript!";
    } else {
        // If the element does not exist, log an error message
        console.error("Element with ID 'targetElement' not found!");
    }
}

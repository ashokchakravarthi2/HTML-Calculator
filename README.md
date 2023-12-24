# HTML-Calculator
Implementation and designing of Calculator using HTML,CSS and JavaScript
The implementation of the calculator using the provided code involves a combination of HTML, CSS, and JavaScript to create a functional and visually appealing user interface. Let's break down the key aspects of the implementation:

### HTML Structure (`index.html`):
1. **Document Structure:**
   - The HTML document follows a standard structure with the inclusion of the `<head>` and `<body>` elements.
   - The document includes links to external stylesheets (`styles.css`) for styling and an external script (`script.js`) for JavaScript functionality.

2. **Calculator Container:**
   - The calculator is enclosed within a `<div>` element with the class `calculator`.
   - It includes a header section with the calculator name ("Ashok Calculator") and options like "History" and "Instructions."

3. **History and Instructions Containers:**
   - The history and instructions sections are contained within `<div>` elements with the classes `history-container` and `instructions-container`, respectively.
   - These sections include `<h2>` headings for clear identification.

4. **User Input and Display:**
   - The user input and display elements are defined using `<div>` elements with the IDs `userInput` and `display`.
   - The user input area shows the current expression being entered, while the display area shows the result.

5. **Buttons:**
   - Numeric buttons (`<button>` elements) from 0 to 9 are provided for entering numbers.
   - Operator buttons for addition, subtraction, multiplication, and division are included.
   - Special function buttons for clearing the display (`C`), calculating logarithms (`log`), and trigonometric functions (`sin`, `cos`, `tan`) are present.

6. **Instructions Section:**
   - An instructions section provides guidance on how to use the calculator, including basic operations, clearing the display, checking history, and exploring additional functions.

### CSS Styling (`styles.css`):
1. **General Styles:**
   - The CSS file defines styles for the body, calculator, header, and options sections, ensuring a clean and visually appealing layout.

2. **Link Styling:**
   - The styles for the "History" and "Instructions" links include a margin, font size, bold text, and a green color for emphasis.

3. **History and Instructions Containers:**
   - These sections are styled with a margin, green color for headings, and bold text for improved visibility.

4. **Delete Button:**
   - The "Delete History" button has a red background color for distinction and white text.

5. **User Input and Display Styles:**
   - Styling for the user input and display areas includes text alignment, padding, font size, and color.

6. **Button Styles:**
   - Numeric and operator buttons have a consistent style with padding, font size, cursor style, border, and background color changes on hover.
   - The equal button (`=`) has a distinct green background color.

### JavaScript Functionality (`script.js`):
1. **Calculator Logic:**
   - The JavaScript file contains functions for handling numeric input, operators, result calculation, clearing the display, and additional functions like logarithms and trigonometry.

2. **History Tracking:**
   - A history array is used to store past calculations, and functions are provided to display the history and clear it.

3. **Toggle Functions:**
   - Functions are implemented to toggle the visibility of the history and instructions sections.

4. **Dynamic Display Updates:**
   - Functions are defined to dynamically update the user input display based on user actions.

### Functionality Overview:
- Users can input numbers, perform basic arithmetic operations, and explore additional functions like logarithms and trigonometry.
- The display shows the ongoing expression and the final result.
- The history section keeps track of past calculations, and users can clear the history when needed.
- Instructions guide users on using the calculator effectively.

This implementation results in a fully functional and customizable calculator with a user-friendly interface. Users can perform a variety of calculations while having access to helpful instructions and a history feature for reference. The styling enhances the visual appeal and usability of the calculator.

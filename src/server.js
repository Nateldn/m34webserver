const express = require("express"); // calls the npm library Express.js
const app = express(); 
const port = 5001;  // Creates an integer value which we can associate with the port to listen

app.use("/static", express.static("public")); // Static is a Express method allows the app to use static files. This line accesses the public folder and

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}); // A controller is a function that runs a function on the application
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var email = document.getElementById("email").value;
    var healthReport = document.getElementById("healthReport").files[0];
  
    // Display form values
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Weight: " + weight);
    console.log("Email: " + email);
    console.log("Health Report: " + healthReport.name);
  

  });
  
    
    fetch("navigate.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navigate").innerHTML = data;
      });
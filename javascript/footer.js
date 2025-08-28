// <!-- Javascript Get footer from footer.html -->
    
    fetch("footer.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer").innerHTML = data;
      });

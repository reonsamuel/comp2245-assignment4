document.getElementById("searchBtn").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value;

    fetch(`superheroes.php?query=${encodeURIComponent(query)}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("result").innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
});

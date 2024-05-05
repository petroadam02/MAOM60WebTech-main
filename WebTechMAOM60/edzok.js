// Betöltjük az edzők adatait a JSON fájlból
fetch('edzok.json')
    .then(response => response.json())
    .then(data => {
        // Létrehozzuk a táblázatot
        let table = document.createElement('table');

        // Minden edzőnél...
        data.forEach(edzo => {
            // Létrehozzuk a sorokat és cellákat a táblázatban
            let row = table.insertRow();
            let cell = row.insertCell();

            // Kép hozzáadása a cellához
            let img = document.createElement('img');
            img.src = edzo.image;
            img.alt = edzo.name;
            img.style.maxWidth = '100px'; // Állítsd az igényeidnek megfelelően
            img.style.maxHeight = '100px'; // Állítsd az igényeidnek megfelelően
            cell.appendChild(img);

            // Név hozzáadása a cellához
            let name = document.createElement('div');
            name.textContent = edzo.name;
            cell.appendChild(name);
        });

        // Táblázat hozzáadása a dokumentumhoz
        document.body.appendChild(table);
    })
    .catch(error => console.error('Hiba történt:', error));

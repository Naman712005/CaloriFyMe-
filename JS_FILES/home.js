document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Duplicate the first slide and append it to the end of the track
    const firstSlideClone = slides[0].cloneNode(true);
    track.appendChild(firstSlideClone);

    let currentIndex = 0;

    setInterval(() => {
        currentIndex++;
        track.style.transition = 'transform 1s linear';
        track.style.transform = `translateX(-${100 * currentIndex}vw)`;

        // Reset to real first slide after the duplicate slide is reached
        if (currentIndex === slides.length) {
            setTimeout(() => {
                track.style.transition = 'none'; // Temporarily disable transition
                track.style.transform = `translateX(0)`;
                currentIndex = 0; // Reset to the actual first slide
            }, 1000); // Match this timeout to the transition duration (1s)
        }
    }, 3000); // Slides every 3 seconds
});


// Nutrition API functionality
document.getElementById('getNutrition').addEventListener('click', function() {
    const query = document.getElementById('searchBar').value;

    fetch(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'X308h931MeZF/3d8iheNIg==B71kQI2Xr7dVk4LO',
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const resultTable = document.getElementById('nutritionTable');
        const resultDiv = document.getElementById('nutritionData');
        resultDiv.innerHTML = ''; 

        // Check if any items are returned
        if (data.items && data.items.length > 0) {
            resultTable.style.display = 'table'; 

            data.items.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.serving_size_g} g</td>
                    <td>${item.calories} kcal</td>
                    <td>${item.fat_total_g} g</td>
                    <td>${item.cholesterol_mg} mg</td>
                    <td>${item.sodium_mg} mg</td>
                    <td>${item.carbohydrates_total_g} g</td>
                    <td>${item.fiber_g} g</td>
                    <td>${item.sugar_g} g</td>
                    <td>${item.protein_g} g</td>
                `;
                resultDiv.appendChild(row);
            });
        } else {
            resultTable.style.display = 'none'; // Hide the table if no data is found
            resultDiv.innerHTML = `<p>No data found for "${query}".</p>`;
        }
    })
    .catch(error => {
        console.error('Error:', error.message);
        document.getElementById('nutritionTable').style.display = 'none';
        document.getElementById('nutritionData').innerHTML = `<p>Error fetching data. Please try again.</p>`;
    });
});

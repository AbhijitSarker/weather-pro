const API_KEY = `8cab8d0091799a36232ab361fcb50f08`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}


const displayTemperature = data => {

    const temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp;

}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;

    document.getElementById('city').innerText = city
    loadTemperature(city);
})

loadTemperature();
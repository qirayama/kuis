//Dalam contoh berikut, kita akan menggunakan fetch, yang mengembalikan Promise, untuk mengambil 
//data cuaca dari sebuah API. Kita akan menggunakan async/await 
//untuk menangani operasi ini secara asynchronous.
async function getWeather(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
    if (!response.ok) {
      throw new Error('Gagal mengambil data cuaca');
    }
    const weatherData = await response.json();
    console.log(`Cuaca di ${city}: ${weatherData.weather[0].description}`);
  } catch (error) {
    console.error(error);
  }
}

// Panggil fungsi untuk mendapatkan cuaca di Jakarta
getWeather('Jakarta');


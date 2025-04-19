const form = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const imageResults = document.getElementById('image-results');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (!query) return;

  const apiKey = '49811714-e03faaec1c5944602202ca367';
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&pretty=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    imageResults.innerHTML = ''; 

    if (data.hits.length === 0) {
      imageResults.innerHTML = '<p>No images found.</p>';
      return;
    }

    data.hits.forEach((hit) => {
      const img = document.createElement('img');
      img.src = hit.webformatURL;
      img.alt = hit.tags;
      imageResults.appendChild(img);
    });

  } catch (error) {
    console.error('Error fetching images:', error);
    imageResults.innerHTML = '<p>Error loading images. Please try again later.</p>';
  }
});

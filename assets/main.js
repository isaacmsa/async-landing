const API = 'https://free-football-soccer-videos1.p.rapidapi.com/v1/'

const content = null || document.getElementById('content')

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7e1d45d5a3msh433a46ab68fafbbp1bbed9jsn4fe7fc6506fe',
    'X-RapidAPI-Host': 'free-football-soccer-videos1.p.rapidapi.com',
  },
}

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options)
  const data = await response.json()
  return data
}

// anonymous function auto-exceute
;(async () => {
  try {
    const videos = await fetchData(API)
    let view = `
    ${videos
      .map(
        (video) => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.thumbnail}" alt="${video.title}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.title}
                    </h3>
                </div>
            </div>  
        `
      )
      .slice(0, 4)
      .join('')}
    `
    content.innerHTML = view
  } catch (error) {
    console.log(error)
  }
})()

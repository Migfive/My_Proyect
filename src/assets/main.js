const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UChdIhrfSOnZY4o-fXa4kPlA&part=snippet%2Cid&order=date&maxResults=5';
const content = document.getElementById('content')
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '767289ef75msh88379097efc8d4fp128486jsn3828a450a2f6',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

async function fetchData(url){
    const response = await fetch(url, options);
    return await response.json();
}

(async () => {
    try {
        const videos = await fetchData(url);
        content.innerHTML = `
            ${videos.items.map(i => `
            <div class="group relative">
              <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${i.snippet.thumbnails.high.url}" alt="${i.snippet.description}"  class="w-full h-full object-center object-cover lg:w-full lg:h-full">
              </div>
              <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  ${i.snippet.title}
                </h3>
              </div>
            </div>
            `).slice(0, 4).join('')}  
        `;
    }catch (error){
        console.error(error);
    }
})()
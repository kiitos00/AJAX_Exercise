const $gif = $("#gif");
const $search = $("#search");

function newGif(res) {
  let dataLength = res.data.length;
  if(dataLength) {
    // Get random index to retrive random gif from requested data array
  let randomIndex = Math.floor(Math.random() * dataLength);
  let $div = $("<div>");
  let $requestedGif = $("<img>", {
    src: res.data[randomIndex].images.original.url,
  });
    $div.append($requestedGif);
    $gif.append($div);
  }
}

$("form").on("submit", async function(e) {
  e.preventDefault();
  let searchVal = $search.val();
  $search.val("");
  
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: 'Q8gFsaZqQyg4eYWXk1xShiYJiN4Zupu2',
      q: searchVal
    }
  });
  newGif(res.data)
})
  
$("#remove").on("click", function(){
  $gif.empty();
})






console.log("Let's get this party started!");
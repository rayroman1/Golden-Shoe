let shoes = [];
fetch(`${ENDPOINT}/products`)
.then(response => {
   return response.json();
})
.then(data => {shoes = data.products; init();});
function init(){
    shoes.forEach(shoe => {console.log(shoe)})
}
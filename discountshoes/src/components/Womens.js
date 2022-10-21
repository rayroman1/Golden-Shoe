function Womens() {
  function sayHello() {
    alert('You clicked me!');
  }
  var data =localStorage.getItem('my-key');


    return <><h2>Womens Shoes  {data}</h2> <button onClick={sayHello}>Add to Cart</button></>;
  }
  
  export default Womens;
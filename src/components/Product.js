function Product(props) {
  console.log(props);
  return (
    <div>
      <h4>{props.name}</h4>
      <img className="fish" src={props.image} alt={props.name} />
      <center>${props.price.toFixed(2)}</center>
      <button
        onClick={function () {
          props.onFishChosen(props.id);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;

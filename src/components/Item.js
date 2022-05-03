import './Item.css';

const Item = ({ name, id, items, setItems }) => {
  return(
    <div className="todo__item">
      <p>{name}</p>
      <button onClick={() => setItems(items.filter(item => item.id !== id))}>-</button>
    </div>
  );
}

export default Item;
function ListItems(props){
const items = props.item;
const listItems = items.map(item => <li>{item.name}</li>)
return(<>
        <ul>{listItems}</ul>
        </>);
}
export default ListItems;
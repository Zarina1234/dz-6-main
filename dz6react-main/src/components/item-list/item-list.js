
import React, { useState, useEffect } from 'react';
import './item-list.css';
// import SwapiService from '../../services/swapi-service';
import { Consumer } from '../swapi-context';




const ItemList = ({setItemId, swapi})=> {
  const [state, setState] = useState({data: []})
  // const swapi = new SwapiService()
  // const swapi = useContext(Consumer)


  useEffect(() => {
  swapi.getAllPeople()
  .then(data => setState({data: data}))
  }, [])

  const content = state.data.map(item => {
    return(
      <li key={item.id} onClick={() => setItemId(item.id)} className="list-group-item">{item.name}</li>
    )
  })
  return(
    <ul className="item-list list-group">
      {content}
        
       </ul>
  )

}
export default ItemList;



// export default class ItemList extends Component {

//   render() {
//     return (
//       <ul className="item-list list-group">
//         <li className="list-group-item">
//           Luke Skywalker
//         </li>
//         <li className="list-group-item">
//           Darth Vader
//         </li>
//         <li className="list-group-item">
//           R2-D2
//         </li>
//       </ul>
//     );
//   }
// }
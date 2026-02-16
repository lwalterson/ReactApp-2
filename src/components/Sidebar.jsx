import { useState, useCallback, useEffect } from "react"


export default function Sidebar({initialMenuItems}) {
  let [newMenuItem, setNewMenuItem] = useState("")
 let [menuItems, setMenuItems] = useState(initialMenuItems)
  let [filter, setFilter] = useState("")
  let [filtered, setFiltered] =useState(menuItems)


  let addMenuItem = useCallback((event) => {
    setMenuItems([...menuItems, newMenuItem]);
          setNewMenuItem("")
    console.log("Added menu item")
  }, [menuItems, newMenuItem])




  useEffect(() => {
    var v=[]


for (let i=0; i<menuItems.length; i++){
  var a = filter.toLowerCase()
    if(menuItems[i].toLowerCase().includes(a)===true)(
    v.push(menuItems[i])


    )
  }
  setFiltered(v)
   console.log (filtered)
},[filter, menuItems]);


  return (
    <div>


      <ul>
       {filtered.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
      </ul>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => {setNewMenuItem(event.target.value)
        }
        }
      ></input>
      <br />
      <button
        onClick= {addMenuItem}
      >
        Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)
        }
        placeholder="Filter by..."
      ></input>
    </div>
  )
}

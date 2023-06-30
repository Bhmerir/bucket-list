import react, {useEffect,useState} from "react"


function BucketForm({addBucketItem}){
  const [item, setItem] = useState('')
  let [eagerness, setEagerness] = useState('')
  const eagrenessLevel = ['high', 'medium', 'low']

  const handleItemChange = (event)=>{
    setItem(event.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!item){
      alert("You have to enter the item");
      return
    }
    if(!eagerness){
      eagerness = "low";
    };

    addBucketItem({
      id: Math.floor(Math.random()* 1000),
      item: item,
      eagerness: eagerness
    })
  }
  return (
    <form className= "bucket-form inline-flex">
      <div className= "">
        {item} {eagerness}
        <input 
          type="text" 
          className="form-control custom-input" 
          id="BucketItem" 
          placeholder="Add to your bucket list"
          value={item}
          onChange={handleItemChange}
        />
        <div className="dropdown ">
          <button className="btn btn-secondary dropdown-toggle dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {eagerness ||"Priority"}
          </button>
          <ul className="dropdown-menu">
            <li><p 
              className="dropdown-item" 
              onClick={()=> setEagerness(eagrenessLevel[0])}
            >Must do</p></li>
            <li><p 
              className="dropdown-item" 
              onClick={()=> setEagerness(eagrenessLevel[1])}
            >Want to do</p></li>
            <li><p 
              className="dropdown-item" 
              onClick={()=> setEagerness(eagrenessLevel[2])}
            >Take it or leave it</p></li>
          </ul>
        </div>
        <button 
          type="submit" 
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Add Bucket List Item
        </button> 
      </div> 
    </form>
  )
  
}

export default BucketForm;
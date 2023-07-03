import react, {useState} from "react"


function BucketForm({addBucketItem}){
  const [item, setItem] = useState('')
  let [eagerness, setEagerness] = useState('')
  const eagrenessLevel = ['high', 'medium', 'low']
  const [isOpen, setIsOpen] = useState(false);

  const handleItemChange = (event)=>{
    setItem(event.target.value)
  }

  const handleSelectPriority = (priority)=> {
    setEagerness(priority)
    setIsOpen(false);
    document.querySelector(".dropdown").click();
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
    <form className="bucket-form">
      <div className="row">
        <div className="col-md-6 col-sx-12">
          <input 
            type="text" 
            className="form-control custom-input" 
            id="BucketItem" 
            placeholder="Add to your bucket list"
            value={item}
            onChange={handleItemChange}
          />  
        </div>
        <div  className="col-md-2 mt-3 mt-md-0 col-sx-12">
          <div className="dropdown">
            <button className={!eagerness ? `btn btn-secondary dropdown-toggle dropdown priority`: 
                            `btn btn-secondary dropdown-toggle dropdown ${eagerness}`} 
                    type="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                    onClick={()=> setIsOpen(!isOpen)}
            >
              {eagerness || "Priority"}
            </button>
            <ul className="dropdown-menu">
              <li><p className="dropdown-item" onClick={() => handleSelectPriority(eagrenessLevel[0])}>Must do</p></li>
              <li><p className="dropdown-item" onClick={() => handleSelectPriority(eagrenessLevel[1])}>Want to do</p></li>
              <li><p className="dropdown-item" onClick={() => handleSelectPriority(eagrenessLevel[2])}>Take it or leave it</p></li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 mt-3 mt-md-0 col-sx-12">
          <button 
            type="submit" 
            className="btn btn-primary btn-block btn-submit"
            onClick={handleSubmit}
          >
            Add Bucket List Item
          </button>
        </div>
      </div>
    </form>
  )
  
}

export default BucketForm;
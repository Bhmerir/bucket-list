import react, {useState} from "react"

function Bucket({bucket, deleteBucketItem}){
  const [edit, setEdit] = useState(false);
  return (
    <div className="bucket">
      { bucket.map( (item, index) => (
        <div className="card" key={item.id}>
          <div className= {`card-body ${item.eagerness}`}>
            {item.item}
            <button 
              type="submit" 
              className="btn btn-primary ms-5"
            >
              ✏️
            </button>
            <button 
              type="submit" 
              className="btn btn-primary ms-1"
              onClick={()=>(deleteBucketItem(item.id))}
            >
              🗑️
            </button>
          </div>
        </div>
      ))
    }
    </div>
  )
  
}

export default Bucket;
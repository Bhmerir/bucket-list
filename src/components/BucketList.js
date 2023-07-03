import react,{useState} from "react"
import Bucket from './Bucket'
import BucketForm from './BucketForm'

function BucketList(){

  const [bucket, setBucket] = useState([])
  
  function addBucketItem(item){
    console.log(item)
    setBucket([item, ...bucket])
  }

  function deleteBucketItem(id){
    setBucket([...bucket].filter((item)=> (item.id !== id)))
  }
  return (
    <div className="card bucket-app">
      <BucketForm addBucketItem={addBucketItem} />
      <Bucket bucket={bucket} deleteBucketItem={deleteBucketItem}/>
    </div>
  )
  
}

export default BucketList;
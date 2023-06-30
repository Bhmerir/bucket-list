import react,{useState} from "react"
import Bucket from './Bucket'
import BucketForm from './BucketForm'

function BucketList(){

  function addBucketItem(item){
    console.log(item)
  }

  return (
    <div className="card bucket-app">
      <BucketForm addBucketItem={addBucketItem} />
      <Bucket />
    </div>
  )
  
}

export default BucketList;
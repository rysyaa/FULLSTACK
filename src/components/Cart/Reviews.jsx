import React, { useState } from 'react'
import { useCountry } from '../../context/CountryContextProvider';

const Reviews = () => {
  const {createComment, createRating} = useCountry()

  const [comment, setComment] = useState("");
  const [index, setIndex] = useState(0);

  const [rating, setRating] = useState("");
  const [indexCountry, setIndexCountry] = useState(0);

  function handleSaveComment(){
    if(!comment.trim() || !index.trim()){
      alert("Заполните поле!")
    } else{
      let formData = new FormData();
      formData.append("body", comment)
      formData.append("country", index)
      createComment(formData)
    }
  }

  function handleSaveRating(){
    if(!rating.trim() || !indexCountry.trim()){
      alert("Заполните поле!")
    } else{
      let formData = new FormData();
      formData.append("value", rating)
      formData.append("country", indexCountry)
      createRating(formData)
    }
  }


  return (
    <div style={{minHeight: "100vh", backgroundColor: "gray", paddingTop: "6em"}}>
      <div>
        <input onChange={(e) => setComment(e.target.value)} placeholder='Comment' type="text" />
        <input onChange={(e) => setIndex(e.target.value)} placeholder='Index Country' type="number" />
        <button onClick={handleSaveComment}>Add comment</button>
      </div>
      <div>
        <input onChange={(e) => setRating(e.target.value)} placeholder='Rating' type="text" />
        <input onChange={(e) => setIndexCountry(e.target.value)} placeholder='Index Country' type="number" />
        <button onClick={handleSaveRating}>Add rating</button>
      </div>
    </div>
  )
}

export default Reviews

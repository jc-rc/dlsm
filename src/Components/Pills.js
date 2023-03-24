import React, {useState, useEffect} from 'react'
import { useDispatch} from "react-redux"
import {setSTag} from "../features/sTermSlice"

function Pills() {

    const [tags, setTags] = useState([])
    const dispatch = useDispatch()


    useEffect(() => {
      fetch("https://us-central1.gcp.data.mongodb-api.com/app/dlsm-qqrzo/endpoint/getTagsOptions")
      .then(response=> response.json())
      .then(response=> setTags(response))

    }, [])

    const handleTagClick = (tag)=>{
        dispatch(setSTag(tag))
    }
    
  return (
    <div className="row  mb-3 mb-sm-5">
        <div className="col-12">
            <p className="h6">Categorías:</p>
        </div>
        <div className="col scroll-pills">
            <button className="btn btn-outline-primary  me-2 px-2 py-1" onClick={()=>handleTagClick("all")}>Todos</button>
            {tags.map((tag, key)=>{
                var colorBtn = ""
                switch (tag) {
                    case "abecedario":
                        colorBtn = "success"
                        break;
                    case "adjetivo":
                        colorBtn = "warning"
                        break;
                    case "sustantivo":
                        colorBtn = "danger"
                        break;
                    case "verbo":
                        colorBtn = "info"
                        break;
                
                    default:
                        colorBtn = "secondary"
                        break;
                }


                return(
                    <button className={`btn btn-outline-${colorBtn} me-2 px-2 py-1`} onClick={()=> handleTagClick(`${tag}`)} key={key}>{tag}</button>
                )
            })}
            </div>
    </div>
  )
}

export default Pills
import React, {useEffect, useState} from 'react'
import TermCard from './TermCard'
import {useSelector} from "react-redux"


function TermList(props) {

    const [terms, setTerms] = useState([])
    const sTerm = useSelector((state)=>state.sTerm.value)
    const sTag = useSelector((state)=>state.sTerm.tag)

    useEffect(() => {
      fetch(`https://us-central1.gcp.data.mongodb-api.com/app/dlsm-qqrzo/endpoint/searchTerms?sTerm=${sTerm}`)
      .then(response=>response.json())
      .then(response => setTerms(response))
    
      
    }, [sTerm])

    useEffect(() => {

      if(sTag !== ""){
        fetch(`https://us-central1.gcp.data.mongodb-api.com/app/dlsm-qqrzo/endpoint/getTermsByTag?tags=${sTag}`)
      .then(response=>response.json())
      .then(response => setTerms(response))
    }else{
        return
    }
    
      
    }, [sTag])
    
    
  return (
    <div className="row my-3">
        {terms.length === 0 ? <div className="text-center">
            <p className='h1 animate__animated animate__headShake'><i className="fa-regular fa-face-frown"></i></p>
            <p>No hay resultados para "<span className="fw-bold fst-italic">{sTerm}</span>"</p>
        </div> :
        
        terms.map((term,key)=>{
            return(
                <div className="col-sm-3 col-12 mb-sm-4 mb-3"  key={key+1}>
                    <TermCard name={term.name} _id={term._id} definition={term.definition} description={term.description} tags={term.tags} key={`${key+1}`} />
                </div>
            )
        })}
    </div>
  )
}

export default TermList
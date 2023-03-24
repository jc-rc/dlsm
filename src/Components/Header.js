import React, {useState} from 'react'
import { useDispatch} from "react-redux"
import { setSTerm } from "../features/sTermSlice"

function Header() {

  const [busq, setBusq] = useState("")

 const dispatch = useDispatch()
  
const handleSTerm = (e)=>{
    setBusq(e.target.value.toLowerCase())
}
const handleSearch = (e)=>{
    dispatch(setSTerm(busq))
}

  return (
    <div className="row mb-sm-4 align-items-center">
        <div className="col">
            <p className="h2 m-0"><span><i className="fa-solid fa-hands-asl-interpreting"></i></span> DLSM</p>
            <p className='small'>Diccionario de Lenguaje de Señas Mexicano</p>
        </div>
        <div className="col-12 col-sm-3 mb-4 mb-sm-0">
            <div className="input-group">
                <input id='' type="text" className="form-control ph-text" placeholder='Buscar...' onChange={handleSTerm} onKeyUp={(e)=> e.key === "Enter" ? handleSearch() : null}/>
                <button className="input-group-text" id="basic-addon1" onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
        <div className="col-12">
        </div>
        <hr />
    </div>
  )
}

export default Header
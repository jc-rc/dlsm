import React, {useState} from 'react'
import { useSelector} from "react-redux"


function Offcanvas() {

    const selectTerm = useSelector((state)=>state.sTerm.selected)


  return (
    <div>
         {/* OFFCANVAS mobile */}
         <div className="offcanvas offcanvas-end" id='offcanvas-mobile'>
                <div className="offcanvas-header d-flex align-items-center">
                    
                    <button type="button" className="btn m-0 p-0" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-arrow-left"></i> Volver</button>
                </div>
                <div className="offcanvas-body container-fluid p-0">
                    <img className='img-fluid' src={"https://source.unsplash.com/random"} alt="" style={{maxHeight: "30vh", width: "100vw", objectFit: "cover"}} />
                    <div className="p-4">
                        <p className='h2'>{selectTerm.props.name}</p>
                        <hr />
                        <p className='fst-italic small'>{selectTerm.props.definition}</p>
                        <p className=''>{selectTerm.props.description}</p>
                    </div>
                </div>
            </div>
            {/* OFFCANVAS desk */}
            <div className="offcanvas offcanvas-end" id='offcanvas-desk'>
                <div className="offcanvas-header d-flex align-items-center">
                    
                    <button type="button" className="btn m-0 p-0" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-arrow-left"></i> Volver</button>
                </div>
                <div className="offcanvas-body d-flex flex-row container-fluid p-0">
                    <img className='img-fluid' src={"https://source.unsplash.com/random"} alt="" style={{maxHeight: "100vh", width: "50vw", objectFit: "cover"}} />
                    <div className="col mx-5  d-flex flex-column justify-content-center">
                        <p className='h3'>{selectTerm.props.name}</p>
                        <hr />
                        <p className='fst-italic small'>{selectTerm.props.definition}</p>
                        <p className=''>{selectTerm.props.description}</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Offcanvas
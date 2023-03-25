import React from 'react'
import { useSelector} from "react-redux"


function Offcanvas() {

    const selectTerm = useSelector((state)=>state.sTerm.selected)


  return (
    <div>
         {/* OFFCANVAS mobile */}
         <div className="offcanvas offcanvas-end" id='offcanvas-mobile'>
                
                <div className="offcanvas-body container-fluid p-0">
                    <img className='img-fluid' src={"./giphy.gif"} alt={selectTerm.props.name} style={{maxHeight: "30vh", width: "100vw", objectFit: "cover"}} />
                    <div className="p-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <p className='h2 m-0'>{selectTerm.props.name}</p>
                            <button type="button" className="btn m-0 p-0 fs-4" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-close"></i></button>
                        </div>
                        <hr />
                        <p className='fst-italic small'>{selectTerm.props.definition}</p>
                        <p className=''>{selectTerm.props.description}</p>
                    </div>
                </div>
            </div>
            {/* OFFCANVAS desk */}
            <div className="offcanvas offcanvas-end" id='offcanvas-desk'>
               
                <div className="offcanvas-body d-flex flex-row container-fluid p-0">
                    <img className='img-fluid' src={"./giphy.gif"} alt={selectTerm.props.name} style={{maxHeight: "100vh", width: "50vw", objectFit: "cover", objectPosition: "75%"}} />
                    <div className="col mx-5  d-flex flex-column justify-content-center">

                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn m-0 p-2 fs-4" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-close"></i></button>
                            </div>
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
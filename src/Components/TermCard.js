import React, {useState} from 'react'

import { useDispatch} from "react-redux"
import { setSelected } from "../features/sTermSlice"

function TermCard(props) {

    const dispatch = useDispatch()

    const handleClick = (data)=>{
        //dispatch el selected
        dispatch(setSelected(data))
    }

    return (
        <div>
            {/* CARD */}
            <div className="card animate__animated animate__fadeIn d-none d-sm-block" data-bs-toggle={"offcanvas"} data-bs-target="#offcanvas-desk" style={{cursor: "pointer"}} onClick={()=> handleClick({props})}>
                <img src={"https://source.unsplash.com/random"} alt={props.name} className="card-img-top" style={{ maxHeight: 150, objectFit: "cover" }} />
                <div className="card-body">
                    <p className="h5 card-title">{props.name}</p>
                    <p className="card-text small text-truncate">{props.definition}</p>
                   
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                    <p className='small m-0'>
                        {props.tags.map((tag, key) => {

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
                            return (
                                <span className={`badge text-bg-${colorBtn} me-1`} key={key}>{tag}</span>
                            )
                        })}
                    </p>
                    </li>
                </ul>
            </div>
            {/* CARD-HORIZONTAL*/}
            <div className="border rounded d-block d-sm-none animate__animated animate__backInLeft" data-bs-toggle={"offcanvas"} data-bs-target="#offcanvas-mobile" onClick={()=> handleClick({props})} >
                <div className="row g-0 d-flex align-items-center" >
                    <div className="col-9">
                        <div className="card-body px-2">
                            <p className="h5 card-title">{props.name}</p>
                            <p className="card-text small text-truncate m-0">{props.definition}</p>
                            <p className='small m-0'>
                                {props.tags.map((tag, key) => {

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
                                    return (
                                        <span className={`badge text-bg-${colorBtn} me-1`} key={key}>{tag}</span>
                                    )
                                })}
                            </p>
                        </div>
                    </div>
                    <div className="col-3">
                        <img src={"https://source.unsplash.com/random"} alt="" className=" rounded-end" style={{ objectFit: "cover", height: 100, width: "100%" }} />
                    </div>
                </div>
            </div>




        </div>
    )
}

export default TermCard
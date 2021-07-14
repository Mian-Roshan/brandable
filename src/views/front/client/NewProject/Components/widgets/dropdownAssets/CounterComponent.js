import React,{useState} from 'react'
import { 
    Dash,
    Plus
} from 'react-bootstrap-icons'
const CounterComponent = (props) => {
    const[count,setCount] = useState(20)
    return (
        <div>
            <label className="mb-2 f12-size
               text-capitalize font-bolder">
                {props.label}
            </label>
            <div className="counter-size d-flex">
                <div className="counter-button border" style={{
                    height: "38px", overflow: "hidden",
                    borderRadius: "6px"
                   }}>
                    <span className="d-inline-block h-100 text-center
                       cursor-pointer" style={{ width: "30px" }}
                       onClick={(()=>setCount(count!==1?count - 1:1))}>
                        <Dash size={26} />
                    </span>
                    <span className="d-inline-block h-100">
                        <input className="border-end f16-size
                        px-2 border-start h-100 border-0 font-bolder"
                        type="text" value={count} style={{ width: "70px" }} />
                    </span>
                    <span className="d-inline-block h-100 text-center
                        cursor-pointer" style={{ width: "30px" }}
                        onClick={(()=>setCount(count + 1))}>
                        <Plus size={26} />
                    </span>
                </div>
            </div>
        </div>
    )
}
export default CounterComponent
import { useRouteError } from "react-router-dom";


const Error = ()=>{
    const err = useRouteError();
    
    return (
        <div>
            <h1>Opps!!!</h1>
            <h2>Something Went wrong!!</h2>
            {/* <h3>{err.error.message}</h3>
            <h3>{err.status}:{err.statusText}</h3> */}
        </div>
    )
}

export default Error;
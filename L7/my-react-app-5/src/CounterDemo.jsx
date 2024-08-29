import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CounterDemo = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="card text-center" style={{ width: '18rem', margin: '0 auto', marginTop: '20px'}}>
                <div className="card-body">
                    <h5 className="card-title">{count}</h5>
                    <p className="card-text">
                        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Update Count</button>
                    </p>
                </div>
            </div>

            <div></div>
        </>
    );
};

export default CounterDemo;
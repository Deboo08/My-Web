import React, {useState} from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";


function App() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleIsExpanded = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div>
            <Navbar className="pb-4 pt-4 bg-dark text-white" style={{ justifyContent: "center" }}>
                <span className="px-3 me-auto fs-2"><b>Huang Tao</b></span>
                <span className="px-3 me-auto fs-4">Who wants to see me?</span>
                <span className="px-3 fs-6">MENU</span>
                {isExpanded ?
                    <>
                        <Button className="btn-dark" onClick={handleIsExpanded}>▲</Button>
                    </>
                    :
                    <>
                        <Button className="btn-dark" onClick={handleIsExpanded}>▼</Button>
                    </>
                }
            </Navbar>
        </div>
    );
}

export default App;
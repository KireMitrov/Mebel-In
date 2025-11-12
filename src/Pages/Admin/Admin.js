import React, { useState } from "react"
import './admin.css'

function Admin() {

    const [visina, setVisina] = useState(0);
    const [sirina, setSirina] = useState(0);
    const [dlabocina, setDlabocina] = useState(0);
    const [pokaziRezultati, setPokaziRezultati] = useState(false)

    const presmetkaElementi = () => (
        <div>
            <p>stranicni daski: {visina} x  {dlabocina} x 2</p>
             <p>dolni-gorni daski: {sirina - 32} x {dlabocina} x 2</p>
             <p>vraticki: {(sirina / 2 ) -3} x {visina  - 3} x 2</p>
        </div>
    )

    console.log("se cite")
    return (
        <div className="admin-main">
            <div className="inputs">
                <label>Visina na element:</label>
                <input type='number' value={visina} onChange={(e) => setVisina(e.target.value)}></input>
            </div>
            <div className="inputs">
                <label>Sirina  na element:</label>
                <input type='number' value={sirina} onChange={(e) => setSirina(e.target.value)}></input>
            </div>
            <div className="inputs">
                <label>Dlabocina na element:</label>
                <input type='number'  value={dlabocina} onChange={(e) => setDlabocina(e.target.value)}></input>
            </div>
            <button onClick={() => setPokaziRezultati(true)}>Presmetaj</button>
            <div>
                {pokaziRezultati ?  <div>{presmetkaElementi()}</div> : null}
            </div>
        </div>
    )
}

export default Admin
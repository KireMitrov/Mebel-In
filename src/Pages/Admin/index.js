import React, { useState } from "react"

function Admin() {

    const [visina, setVisina] = useState(0);
    const [sirina, setSirina] = useState(0);
    const [dlabocina, setDlabocina] = useState(0);
    const [pokaziRezultati, setPokaziRezultati] = useState(false)

    const presmetkaElementi = () => (
        <div>
            <p> stranicni daski: {visina} x  {dlabocina} x 2</p>
             <p>dolna daska: {sirina - 32} x {dlabocina} x 1</p>
             <p>gorni daski: {sirina - 32} x 100 x 2</p>
             <p>vraticki: {(sirina / 2 ) -3} x {(visina / 2) - 3} x 2</p>
        </div>
    )

    return (
        <div>
            <div>
                <label>Visina na element:</label>
                <input type='number' placeholder="Vnesi dolzina vo mm" value={visina} onChange={(e) => setVisina(e.target.value)}></input>
            </div>
            <div>
                <label>Sirina  na element:</label>
                <input type='number' placeholder="Vnesi sirina vo mm" value={sirina} onChange={(e) => setSirina(e.target.value)}></input>
            </div>
            <div>
                <label>Dlabocina na element:</label>
                <input type='number' placeholder="Vnesi sirina vo mm" value={dlabocina} onChange={(e) => setDlabocina(e.target.value)}></input>
            </div>
            <button onClick={() => setPokaziRezultati(true)}>Presmetaj</button>
            <div>
                {pokaziRezultati ?  <div>{presmetkaElementi()}</div> : null}
            </div>
        </div>
    )
}

export default Admin
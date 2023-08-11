import React from "react"


function App2(Tugas7) {
    return (
        <div className="App">
            <header className="App-header">
                <div id="container__article-list">
                    <div class="article">
                        <h1 className="font-serif">Data diri peserta kelas Reactjs</h1>
                    </div>
                    <ul>
                        <li>
                            <span className="font-bold"> Nama : </span>
                            <span className="font-serif"> {Tugas7.name}</span>
                        </li>
                        <li><span className="font-bold">  Batch : </span>
                            <span className="font-serif">{Tugas7.batch}</span>

                        </li>
                        <li><span className="font-bold"> Email : </span>
                            <span className="font-serif">{Tugas7.email}</span>
                        </li>
                    </ul>
                </div>
            </header >

        </div >
    );
}

export default App2;
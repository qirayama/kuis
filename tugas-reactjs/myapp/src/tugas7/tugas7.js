import React from "react"

function App2(Tugas7) {
    return (
        <div className="App">
            <header className="App-header">
                <div id="container__article-list">
                    <div class="article">
                        <h2>Data diri peserta kelas Reactjs</h2>
                    </div>
                    <ul>
                        <li>Nama : {Tugas7.name}</li>
                        <li>Batch : {Tugas7.batch}</li>
                        <li>Email : {Tugas7.email}</li>
                    </ul>
                </div>
            </header >

        </div >
    );
}

export default App2;
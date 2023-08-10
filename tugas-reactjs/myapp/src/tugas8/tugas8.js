import React, { useState } from 'react';


function App2() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    return (
        <div className="App">

            <div id="container__article-list">
                <div class="article2">
                    <p>{count}</p>
                    <button className="click" onClick={increment}>Tambah</button>
                    {count > 9 && <p>State count sudah lebih dari 10!!</p>}
                </div>
            </div>

        </div >
    );
}


export default App2;

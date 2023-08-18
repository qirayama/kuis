import React, { useEffect, useState } from 'react';
import { Button } from 'flowbite-react';


function App2() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevState => prevState + 1);
    };

    return (
        <div className="App">
            <div id="container__article-list">
                <div className='flex flex-col gap-6 items-center'>
                    <p class="fontsize">{count}</p>
                    <Button color='gray' onClick={increment}><p className='text-2xl'>Tambah</p></Button>
                    {count > 9 && <p className='text-2xl'>State count sudah lebih dari 10!!</p>}
                </div>
            </div>

        </div >
    );
}

export default App2
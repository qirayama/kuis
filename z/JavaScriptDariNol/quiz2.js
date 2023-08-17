//
import React, { useEffect } from "react";

function MyComponent() {
    useEffect(() => {
        console.log('did mount');
        return () => {
            console.log('will unmount');
        };
    }, []);

    return <p>Hello, World!</p>
}

export default MyComponent;

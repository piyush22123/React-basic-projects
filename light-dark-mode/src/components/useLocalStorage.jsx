import { useEffect } from 'react';
import { useState } from 'react';

// Custom hook to manage state with localStorage
export default function useLocalStorage(key, defaultValue) {

    // useState hook to initialize state with a function
    const [value, setValue] = useState(() => {
        let currentValue;

        try {
            // Attempt to get the item from localStorage
            // if its first time then get default value as a string
            currentValue = JSON.parse(
                localStorage.getItem(key) || String(defaultValue)
            );
        } catch (error) {
            // If there's an error (e.g., invalid JSON), log it and use defaultValue
            console.log(error);
            currentValue = defaultValue;
        }

        // Return the current value to initialize the state
        return currentValue;
    });

    // useEffect hook to update localStorage whenever the key or value changes
    useEffect(() => {
        // Set the item in localStorage
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]); // Dependency array, only run the effect when key or value changes

    // Return the current value and the setter function
    return [value, setValue];
}

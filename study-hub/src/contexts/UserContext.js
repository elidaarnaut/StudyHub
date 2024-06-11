import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context
const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);  // Added loading state

    useEffect(() => {
        fetch('/api/user')  // Adjust the API endpoint as needed
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setLoading(false);  // Set loading to false after data is fetched
            })
            .catch(err => {
                console.log(err);
                setLoading(false);  // Ensure loading is also set to false on error
            });
    }, []);

    return (
        <UserContext.Provider value={{ user, loading }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the user context
export const useUser = () => useContext(UserContext);

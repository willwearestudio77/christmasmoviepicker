import React, { useState } from 'react';
import { createContext } from "react";
export const MovieContext = createContext();
export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    return (
        <MovieContext.Provider value={{ movies, setMovies,page,setPage,loading,setLoading,error,setError,totalPages,setTotalPages }}>
            {children}
        </MovieContext.Provider>
    );
};
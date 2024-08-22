import React, { createContext, useState, useEffect } from 'react';

const AttendanceContext = createContext();

const AttendanceProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [day, setDay] = useState(0); 
  const [verified, setVerified] = useState([]);

  const getverified =async () => {
    try {
      const res = await fetch(import.meta.env.VITE_CHECKEDIN_URL, 
        {
          cache: "force-cache"
        })
        const resData = await res.json();
        setVerified(resData.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_REGISTERED_URL, {
          cache: "force-cache",
        });
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    getverified();
  }, []);

  return (
    <AttendanceContext.Provider value={{ data, day, setDay, verified }}>
      {children}
    </AttendanceContext.Provider>
  );
};

export { AttendanceContext, AttendanceProvider }
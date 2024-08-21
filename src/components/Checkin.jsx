import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkin = ({email, day}) => {
    console.log(email, day)
    const url = "https://hostit-backend-v2.onrender.com/api/attendance/verify";

        const sendData = async () => {
          try {
            const response = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, day }),
            });
    
            if (response.ok) {
              const result = await response.json();
              toast.success(`${result.message}` , {
                position: "top-center",
              });
            } else {
                toast.error(`Failed to check in:, ${response.statusText}` , {
                    position: "top-center",
                  });
            }
          } catch (error) {
            toast.error(`Error sending data:, ${error}` , {
                position: "top-center",
              });
          }
        };
    
  return (
    <div>
        <button className="w-[100%] px-6 py-4 my-4 font-[700] rounded-full text-[#0D0042] bg-[#11EBF2]" onClick={sendData}>Checkin</button>
    </div>
  )
}

export default Checkin
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';

const Checkin = ({email}) => {
    console.log(email)
    const url = "https://hostit-backend-v2.onrender.com/api/attendance";

    useEffect(() => {
        const sendData = async () => {
          try {
            const response = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email }),
            });
    
            if (response.ok) {
              const result = await response.json();
              toast.success(`Success:, ${result}` , {
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
    
        sendData();
      }, [email]); 
    
  return (
    <div>
        <button className="w-[100%] px-6 py-2 my-4 font-[700] rounded-full text-[#0D0042] bg-[#11EBF2]">Checkin</button>
    </div>
  )
}

export default Checkin
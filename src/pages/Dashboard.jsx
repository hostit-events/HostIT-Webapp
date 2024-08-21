import React, { useEffect, useState } from "react";
import Charts from "../components/Charts";
import { HiUsers } from "react-icons/hi2";
import { GiPublicSpeaker } from "react-icons/gi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { LuBadgeDollarSign } from "react-icons/lu";
import CalendarData from "../components/CalendarData";

const Dashboard = () => {
  const [data, setData] = useState("");
  const [verified, setVerified] = useState('')

  const getverified =async () => {
    try {
      const res = await fetch('https://hostit-backend-v2.onrender.com/api/attendance/', 
        {
          cache: "force-cache"
        })
        const resData = await res.json();
        setVerified(resData)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://web3lagosbackend.onrender.com/api/general-registrations/",
          {
            cache: "force-cache",
          }
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    getverified();
  }, []);

  console.log(verified)

  return (
    <main>
      <section>
        <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[500] mb-6">
          Analytics
        </h2>
        <div className="flex justify-between flex-col lg:flex-row md:flex-row">
          <div className="bg-white rounded-lg p-6 flex items-center flex-col md:w-[18%] lg:w-[18%] w-[90%] mx-auto mb-4">
            <div className="bg-[#0D0042] text-[#11EBF2] p-4 text-2xl rounded-full">
              <HiUsers />
            </div>
            <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[700]">
              {data.length}
            </h2>
            <p className="text-[#708890]">Participants</p>
          </div>
          <div className="bg-white rounded-lg p-6 flex items-center flex-col md:w-[18%] lg:w-[18%] w-[90%] mx-auto mb-4">
            <div className="bg-[#0D0042] text-[#11EBF2] p-4 text-2xl rounded-full">
              <RiVerifiedBadgeFill />
            </div>
            <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[700]">
              {data.length}
            </h2>
            <p className="text-[#708890]">Verified</p>
          </div>
          <div className="bg-white rounded-lg p-6 flex items-center flex-col md:w-[18%] lg:w-[18%] w-[90%] mx-auto mb-4">
            <div className="bg-[#0D0042] text-[#11EBF2] p-4 text-2xl rounded-full">
              <GiPublicSpeaker />
            </div>
            <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[700]">
              61+
            </h2>
            <p className="text-[#708890]">Speakers</p>
          </div>
          <div className="bg-white rounded-lg p-6 flex items-center flex-col md:w-[18%] lg:w-[18%] w-[90%] mx-auto mb-4">
            <div className="bg-[#0D0042] text-[#11EBF2] p-4 text-2xl rounded-full">
              <LuBadgeDollarSign />
            </div>
            <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[700]">
              {1500 - data.length}
            </h2>
            <p className="text-[#708890]">Tickets left</p>
          </div>
          <div className="bg-white rounded-lg p-6 flex items-center flex-col md:w-[18%] lg:w-[18%] w-[90%] mx-auto mb-4">
            <div className="bg-[#0D0042] text-[#11EBF2] p-4 text-2xl rounded-full">
              <LuBadgeDollarSign />
            </div>
            <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[700]">
              6+
            </h2>
            <p className="text-[#708890]">Sponsors</p>
          </div>
        </div>
      </section>
      <section className="my-12 flex flex-col lg:flex-row md:flex-row justify-between items-center">
      <div className="overflow-x-scroll order-2 lg:order-1 md:order-1 w-[100%] lg:w-[60%] md:w-[70%]">
        <Charts data={data} />
        </div>
        <div className="order-1 lg:order-2 md:order-2 my-4 w-[100%] lg:w-[35%] md:w-[35%]">
          <CalendarData />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;

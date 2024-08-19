import React, { useEffect, useState } from "react";
import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Box,
  FormControl,
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import user from "../assets/user-NF.svg"
import { IoCloseSharp } from "react-icons/io5";
import Checkin from "../components/Checkin";

const Attendance = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [userInput, setUserInput] = useState('')
  const [searchResult, setSearchResult] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
  }, []);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleCloseModal = () => setShowModal(false); 

  const handleSearch = () => {
    const result = data.find(
      (item) =>
        item.name.toLowerCase().includes(userInput.toLowerCase()) ||
        item.email.toLowerCase().includes(userInput.toLowerCase())
    );
    setSearchResult(result);
    setShowModal(true);
    setUserInput('')
  };

  return (
    <div>
            <h2 className='lg:text-[32px] md:text-[32px] text-[24px] font-[500] mb-6'>Check-Ins</h2>
        <div className="border-2 text-gray-500 border-[#0D0042] rounded-lg px-4 py-2 flex my-4 justify-between items-center lg:w-[30%] md:w-[30%] w-[100%]">
          <div className="flex items-center">
            <FaSearch className="mr-4" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-0"
              onChange={(e) => setUserInput(e.target.value)}
            />
          </div>
          <button className="bg-[#0D0042] px-4 py-2 rounded-lg" onClick={handleSearch}>
            <IoIosSend className="text-[#11EBF2]" />
          </button>
        </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#0D0042" }}>
            <TableRow>
              <TableCell
                sx={{ color: "#11EBF2", fontWeight: "700", fontSize: "16px" }}
              >
                ID
              </TableCell>
              <TableCell
                sx={{ color: "#11EBF2", fontWeight: "700", fontSize: "16px" }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{ color: "#11EBF2", fontWeight: "700", fontSize: "16px" }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{ color: "#11EBF2", fontWeight: "700", fontSize: "16px" }}
              >
                Location
              </TableCell>
              <TableCell
                sx={{ color: "#11EBF2", fontWeight: "700", fontSize: "16px" }}
              >
                Role
              </TableCell>
              <TableCell
                sx={{ color: "#11EBF2", fontWeight: "700", fontSize: "16px" }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>
                  {item.country} {item.location}
                </TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>Pending</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(data.length / itemsPerPage)}
        page={currentPage}
        onChange={handleChangePage}
        color="primary"
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      />
      <Modal open={showModal} onClose={handleCloseModal}>
        <Box sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          bgcolor: 'background.paper', 
          borderRadius: '20px', 
          boxShadow: 24,
          width: 400,
        }}>
          {searchResult ? (
                    <FormControl fullWidth>
              <div className="bg-cover h-[20vh] bg-left-bottom rounded-tr-[20px] rounded-tl-[20px]" style={{ backgroundImage: `url('https://iq.wiki/_next/image/?url=https%3A%2F%2Fipfs.everipedia.org%2Fipfs%2FQmNzPvwsQK5S27rwu2f9boniL7ZfKV2Vo4Xo9svRUMRcc1&w=3840&q=75')` }}>
              </div>
              <div className="py-6 flex flex-col">
              <p>ID: {searchResult.id}</p>
              <p>Name: {searchResult.name}</p>
              <p>Email: {searchResult.email}</p>
              <p>Location: {searchResult.country} {searchResult.location}</p>
              <p>Role: {searchResult.role}</p>
              <p>Status: Pending</p>
              <Checkin email={searchResult.email} />
              </div>
              </FormControl >
          ) : (
            <div className="p-6 flex flex-col items-center">
              <IoCloseSharp className="ml-auto text-4xl" onClick={handleCloseModal} />
              <p className="my-4 font-[700] text-[20px] text-red-700">User not found!</p>
              <img src={user} alt="" />
              <button onClick={handleCloseModal} className="w-[100%] px-6 py-2 my-4 font-[700] rounded-full text-[#0D0042] bg-[#11EBF2]">Retry</button>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Attendance;

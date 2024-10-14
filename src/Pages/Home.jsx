import {
  Heading,
  Flex
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Navbar2 from "../Components/Navbar2";
import "./Home.css";
import Footer from './Footer'; // Correct path









export default function Home() {
  return (
    <div className="total">
      <div className="Body">
        <div className="Navbar">
          <Navbar />
          <Heading p={2} mt={20} size={["25px", "xl", "2xl"]} noOfLines={1}>
            Home Services, on demand.
          </Heading>
        </div>
        <div className="color_overlay"></div>
      </div>

      {/* -----------Services------------ */}
      <Flex justifyContent="center" gap="10%" alignItems="center" bg="white" mt={5}>
        <Navbar2 />
      </Flex>

      
 
      <Footer/>
      </div>
  );
}

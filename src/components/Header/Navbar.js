import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoSparklesSharp } from "react-icons/io5";
import { dataHelper } from "../../data-helper";
import { Box } from "@chakra-ui/react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 z-10 flex h-16 items-center px-4 duration-500 bg-background/80 backdrop-blur-md">
      <div className=" items-center gap-2.5 md:flex md:basis-1/2">
        <button className="border border-transparent rounded-full font-light p-2  bg-transparent blackA1 text-sm">
          <BiMenuAltLeft className="size-6" />
        </button>
        <Box
          as="button"
          height="30px"
          lineHeight="1.2"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border="none"
          px="8px"
          borderRadius="20px"
          fontSize="14px"
          fontWeight="semibold"
          bg="transparent"
          borderColor="#ccd0d5"
          color="#000000"
          _hover={{ bg: "rgba(0,0,0,.05)" }}
          // _active={{
          //   bg: "#dddfe2",
          //   transform: "scale(0.98)",
          //   borderColor: "#bec3c9",
          // }}
          // _focus={{
          //   boxShadow:
          //     "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          // }}
          className="hidden md:block"
        >
          {dataHelper().creator_program}
        </Box>
        <Box
          as="button"
          height="30px"
          lineHeight="1.2"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border="none"
          px="8px"
          borderRadius="20px"
          fontSize="14px"
          fontWeight="semibold"
          bg="transparent"
          borderColor="#ccd0d5"
          color="#000000"
          _hover={{ bg: "rgba(0,0,0,.05)" }}
          // _active={{
          //   bg: "#dddfe2",
          //   transform: "scale(0.98)",
          //   borderColor: "#bec3c9",
          // }}
          // _focus={{
          //   boxShadow:
          //     "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          // }}
          className="hidden lg:block"
        >
          {dataHelper().start_exploring}
        </Box>
      </div>
      <div className="flex items-center font-semibold hover:cursor-pointer hover:opacity-65">
        <IoSparklesSharp className="gap-[.5rem]  text-2xl md:text-3xl" />
        <p className="text-[1rem] md:text-2xl ">
          {dataHelper().mindtrip_smallCase}
        </p>
        <span className="text-2xl">.</span>
        <span className=" text-[8px] md:text-xs font-extralight px-1 md:h-4 rounded  bg-black text-white">
          {dataHelper().beta}
        </span>
      </div>
      <div className=" flex basis-1/2 justify-end gap-5">
        <Box
          as="button"
          height="30px"
          lineHeight="1.2"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border="none"
          px="8px"
          borderRadius="20px"
          fontSize="14px"
          fontWeight="semibold"
          bg="transparent"
          borderColor="#ccd0d5"
          color="#000000"
          _hover={{ bg: "rgba(0,0,0,.05)" }}
          // _active={{
          //   bg: "#dddfe2",
          //   transform: "scale(0.98)",
          //   borderColor: "#bec3c9",
          // }}
          // _focus={{
          //   boxShadow:
          //     "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          // }}
        >
          {dataHelper().sign_in}
        </Box>

        <Box
          as="button"
          height="30px"
          lineHeight="1.2"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border="1px solid"
          px="8px"
          borderRadius="20px"
          fontSize="14px"
          fontWeight="semibold"
          bg="transparent"
          borderColor="#000000"
          color="#000000"
          // _active={{
          //   bg: "#dddfe2",
          //   transform: "scale(0.98)",
          //   borderColor: "#bec3c9",
          // }}
          // _focus={{
          //   boxShadow:
          //     "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          // }}
          className="hidden md:block"
        >
          {dataHelper().get_started}
        </Box>
      </div>
    </div>
  );
};

export default Navbar;

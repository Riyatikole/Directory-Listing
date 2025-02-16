import React from "react";
import TableComponent from "./TableComponent";
import UpperBar from "./UpperBar";
import { Box } from "@chakra-ui/react"

export default function ListingPage() {
  return(
    <>
     <UpperBar/>
     <Box ml = {8} mr={8} bg="bg" shadow="md" borderRadius="md" maxHeight="500px" overflowY="auto" >
     <TableComponent/>
     </Box>
      
    </>
  )
}


import React, {useState} from "react";
import { Button, Box, Input, Select, Flex, Text, Stack, For} from "@chakra-ui/react";
import ProductModal from "./ModalComponent";
import { createListCollection } from "@chakra-ui/react"
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "./ui/select"

export default function UpperBar() {
    const [searchQuery, setSearchQuery] = useState("");

   
 
  
    return(
        <>
        <Flex  align="center" mb={4} mt={8} ml ={8}>
        
       <ProductModal/>
        <Box ml={8} borderRadius={50} shadow="md" p={2}>280/400 Products</Box>
      </Flex>
      <Flex mb={4} ml={8} mr={8}>
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          width="50%"
        />
        <Button 
          colorScheme="teal" 
          bg="blue.700"
          ml={4} 
          borderRadius={50}
          
        >
          Search
        </Button>
      </Flex>
      <Flex mb={4} ml={8} mr={8}>
      <Stack gap="5" width="200px" mr={5}>
   
          <SelectRoot key={products}  collection={products}>
            
            <SelectTrigger>
              <SelectValueText placeholder="Select product" />
            </SelectTrigger>
            <SelectContent>
              {products.items.map((product) => (
                <SelectItem item={product} key={product.value}>
                  {product.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
       
    </Stack>
    <Stack gap="5" width="200px">
   
          <SelectRoot key={materials}  collection={materials} >
            
            <SelectTrigger>
              <SelectValueText placeholder="Select product" />
            </SelectTrigger>
            <SelectContent>
              {materials.items.map((material) => (
                <SelectItem item={material} key={material.value}>
                  {material.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
       
    </Stack>
    <Button bg="blue.700" borderRadius={50} width="180px" ml={5}>Filter</Button>
    
      </Flex>
      
        </>
    )
}

const products = createListCollection({
  items: [
    { label: "Pipes", value: "pipes" },
    { label: "Sheet", value: "sheet" },
    { label: "Rod", value: "rode" },
  ],
})

const materials = createListCollection({
  items: [
    { label: "Aluminium", value: "aluminium" },
    { label: "Steel", value: "steel" },
    { label: "Copper", value: "copper" },
  ],
})
import React, {useState, useEffect} from "react";
import { Button, For, HStack, Box, VStack, CheckboxGroup, Stack, Text } from "@chakra-ui/react"
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

export default function ProductModal() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [generatedGrades, setGeneratedGrades] = useState([]);

  const products = ["Pipe", "Tubing","Pipe Fitting", "Forged Fitting", "Flange","Valves", "Gasket", "Instrumental Fitting", "Sheet and Plates", "Bars", "Electrodes", "Fastners", "Bolts", "Channels"];
  const materials = ["Alloy Steel","Aluminium", "Carbon Steel","Copper Nikel", "Duplex Steel", "Hastealloy", "Low Temperature Carbon Stell",];

  

  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
    setSelectedMaterial(""); 
    setSelectedGrades([]);
  };

  const handleMaterialChange = (e) => {
    setSelectedMaterial(e.target.value);
    setSelectedGrades([]);
  };

  const handleGradeChange = (values) => {
    setSelectedGrades(values);
  };

  const handleSubmit = () => {
    console.log("Selected Product:", selectedProduct);
    console.log("Selected Material:", selectedMaterial);
    console.log("Selected Grades:", selectedGrades);
  };

  useEffect(() => {
    if (selectedProduct && selectedMaterial) {
      setSelectedGrades([]); 
    }
  }, [selectedProduct, selectedMaterial]);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setSelectedMaterial(""); 
    setSelectedGrades([]);
  };

  const handleMaterialSelect = (material) => {
    setSelectedMaterial(material);
    setSelectedGrades([]); 
  };

  const generateGrades = (product, material) => {
    if (!product || !material) {
      setGeneratedGrades([]); 
      return; 
    }
  
    
    const baseGrade = ["F12", "F13", "F14", "F15", "F16", "F17", "F22"];
  
    
    const grades = baseGrade.map(grade => `${material} ${grade} ${product}`);
  
    setGeneratedGrades(grades);
  
    
    console.log("Generated Grades:", grades);
  };
  

  useEffect(() => {
    
    generateGrades(selectedProduct, selectedMaterial);
    console.log(products)
  },[selectedProduct, selectedMaterial])
  

  return (
    <HStack wrap="wrap" gap="4">
      <For each={["center"]}>
        {(placement) => (
          <DialogRoot
            key={placement}
            placement={placement}
            motionPreset="slide-in-bottom"
            size="xl"
          >
            <DialogTrigger asChild>
              <Button variant="outline" bg="blue.700" color="white" borderRadius={50}> + Add Products</Button>
            </DialogTrigger>
            <DialogContent  >
              <DialogHeader>
                <DialogTitle fontWeight="bold">Add Products</DialogTitle>
              </DialogHeader>
              <DialogBody>
          <HStack spacing={0} align="start" w="100%">
          
            <Box w="33%" border="1px solid #e2e8f0" width="400px">
              <Box fontWeight="bold" textAlign="center" padding="10px" bg="#f7fafc">
                Product
              </Box>
              
              <VStack align="stretch" maxHeight="400px" overflowY="auto" >
                {products.map((product) => (
                  <Box
                    key={product}
                    as="div"
                    onClick={() => handleProductSelect(product)}
                    padding="10px"
                    cursor="pointer"
                    textAlign="center"
                    bg={product === selectedProduct ? "blue.100" : "white"}
                    _hover={{ bg: "gray.100" }}
                    borderBottom="1px solid #e2e8f0"
                  >
                    {product}
                  </Box>
                ))}
              </VStack>
            </Box>

       
            <Box w="33%" border="1px solid #e2e8f0" width="400px">
              <Box fontWeight="bold" textAlign="center" padding="10px" bg="#f7fafc">
                Material
              </Box>
              <VStack align="stretch" maxHeight="400px" overflowY="auto">
                {
                  materials.map((material) => (
                    <Box
                      key={material}
                      as="div"
                      onClick={() => handleMaterialSelect(material)}
                      padding="10px"
                      cursor="pointer"
                      textAlign="center"
                      bg={material === selectedMaterial ? "blue.100" : "white"}
                      _hover={{ bg: "gray.100" }}
                      borderBottom="1px solid #e2e8f0"
                    >
                      {material}
                    </Box>
                  ))}
              </VStack>
            </Box>

           
            <Box w="33%" border="1px solid #e2e8f0" width="400px">
              <Box fontWeight="bold" textAlign="center" padding="10px" bg="#f7fafc">
                Grades
              </Box>
              <VStack align="stretch" maxHeight="400px" overflowY="auto">
                {
                  generatedGrades.map((grade) => (
                    <Box
                      key={grade}
                      as="div"
                      onChange={handleGradeChange}
                      padding="10px"
                      cursor="pointer"
                      textAlign="center"
                     
                      _hover={{ bg: "gray.100" }}
                      borderBottom="1px solid #e2e8f0"
                    >
                      {grade}
                    </Box>
                  ))}
              </VStack>
            </Box>
           
          </HStack>
        </DialogBody>
              <DialogFooter>
                <DialogActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogActionTrigger>
                <Button>Save</Button>
              </DialogFooter>
              <DialogCloseTrigger />
            </DialogContent>
          </DialogRoot>
        )}
      </For>
    </HStack>
  )
}

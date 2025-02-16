import { useState, useEffect } from "react";
import { Button, Kbd, Table, Input, Box, Text, Flex, VStack } from "@chakra-ui/react";
import {
  ActionBarContent,
  ActionBarRoot,
  ActionBarSelectionTrigger,
  ActionBarSeparator,
} from "./ui/action-bar";
import { Checkbox } from "./ui/checkbox";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productListActions";

export default function TableComponent() {
  const [selection, setSelection] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const [updatedData, setUpdatedData] = useState({});
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList)
  const {error, laoding, items=[]} = productList

  

  const hasSelection = selection.length > 0;
  const indeterminate = hasSelection && selection.length < items.length;

  const handleQuickActionClick = (id) => {
    setExpandedRow((prev) => (prev === id ? null : id)); 
  };

  const handleDataChange = (e, key) => {
    setUpdatedData((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleSave = (id) => {
    const updatedItem = { ...items.find((item) => item.id === id), ...updatedData };
    items[items.findIndex((item) => item.id === id)] = updatedItem;
    setUpdatedData({});
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
     
    }}

  const handleGetAllProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/products', config);
      return response.data; 
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Error fetching products"); 
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await handleGetAllProducts(); 
        console.log("Fetched Products:", products); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

   


  
    fetchData();  
  }, []);

  useEffect(() => {
    dispatch(listProducts())
    console.log(items)
  }, [])
  

  const rows = items.map((item) => (
    <>
      
      <Table.Row key={item.id} data-selected={selection.includes(item.name) ? "" : undefined}>
        <Table.Cell>
          <Checkbox
            top="1"
            aria-label="Select row"
            checked={selection.includes(item.name)}
            onCheckedChange={(changes) => {
              setSelection((prev) =>
                changes.checked
                  ? [...prev, item.name]
                  : selection.filter((name) => name !== item.name)
              );
            }}
          />
        </Table.Cell>
        <Table.Cell>{item.product}</Table.Cell>

        <Table.Cell>
          <Button variant="link" onClick={() => handleQuickActionClick(item.id)} color="blue.400">
          {expandedRow === item.id ? "Close" : "Quick Action | Add Product Details"}
          </Button>
        </Table.Cell>

        <Table.Cell>
  <VStack align="start" spacing={2}>
    <Text>Material: {item.material}</Text>
    <Text>Unit Length: {item.length}</Text>
    <Text>Shape: {item.shape}</Text>
  </VStack>
</Table.Cell>

        <Table.Cell>{item.priceInUnit}/KG</Table.Cell>
      </Table.Row>

  
      {expandedRow === item.id && (
        <Table.Row>
          <Table.Cell colSpan={5}>
            <Box p={2} borderWidth={1} borderRadius="md" mt={2} display="flex" a justifyContent="space-between"
  
  >
    <Flex alignItems="center"  >
    <Text mr = {3} width = "80px">Material </Text>
             
                <Input
                  placeholder="Material"
                  value={updatedData.material || item.material|| ""}
                  onChange={(e) => handleDataChange(e, "material")}
                 
                />
             
              </Flex>
              <Flex alignItems="center">
              <Text mr = {3} width = "130px">Shape </Text>
              
                <Input
                  placeholder="Shape"
                  value={updatedData.shape || item.shape || ""}
                  onChange={(e) => handleDataChange(e, "shape")}
                />
             
              </Flex>
              <Flex alignItems="center">
            <Text mr = {3} width = "150px">Length  </Text>
           
                
                <Input
                  placeholder="Length"
                  value={updatedData.length || item.length || ""}
                  onChange={(e) => handleDataChange(e, "length")}
                />
              </Flex>
              
              
             
            </Box>
          </Table.Cell>
        </Table.Row>
      )}

    
      {expandedRow === item.id && (
        <Table.Row>
          <Table.Cell colSpan={5}>
            <Box p={4} borderWidth={1} borderRadius="md" mt={2} display="flex"   justifyContent="space-between">
              <Flex alignItems="center">
            <Text mr = {3} width = "80px">Thickness </Text>
                <Input
                  placeholder="Thickness"
                  value={updatedData.thickness || item.thickness || ""}
                  onChange={(e) => handleDataChange(e, "thickness")}
                />
              </Flex>
              <Flex alignItems="center">
            <Text mr = {3} width = "130px">Surface Finish </Text>
                <Input
                  placeholder="Surface Finish"
                  value={updatedData.surfaceFinish || item.surfaceFinish || ""}
                  onChange={(e) => handleDataChange(e, "surfaceFinish")}
                />
              </Flex>
              <Flex alignItems="center">
            <Text mr = {3} width = "150px">Outer Diameter  </Text>
                <Input
                  placeholder="Outer Diameter"
                  value={updatedData.outerDiameter || item.outerDiameter || ""}
                  onChange={(e) => handleDataChange(e, "outerDiameter")}
                />
              </Flex>
              
            </Box>
          </Table.Cell>
        </Table.Row>

       
      )}
        {expandedRow === item.id && (
          <Table.Row>
          <Table.Cell colSpan={5}>
          <Box p={4} borderWidth={1} borderRadius="md" mt={2} display="flex">
          <Button width="150px" mr={4} borderRadius={50} bg="blue.700">Update</Button>
          </Box>
          </Table.Cell>
        </Table.Row>
        )}
    </>
  ));

  return (
    <>
      <Table.Root >
        <Table.Header >
          <Table.Row  bg ="cyan.muted">
            <Table.ColumnHeader w="6">
              <Checkbox
                top="1"
                aria-label="Select all rows"
                checked={indeterminate ? "indeterminate" : selection.length > 0}
                onCheckedChange={(changes) => {
                  setSelection(changes.checked ? items.map((item) => item.name) : []);
                }}
                color="white"
              />
            </Table.ColumnHeader>
            <Table.ColumnHeader>Products</Table.ColumnHeader>
            <Table.ColumnHeader>Action</Table.ColumnHeader>
            <Table.ColumnHeader>Product Details</Table.ColumnHeader>
            <Table.ColumnHeader>Price in Unit</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
      </Table.Root>

      <ActionBarRoot open={hasSelection}>
        <ActionBarContent>
          <ActionBarSelectionTrigger>
            {selection.length} selected
          </ActionBarSelectionTrigger>
          <ActionBarSeparator />
          <Button variant="outline" size="sm">
            Delete <Kbd>⌫</Kbd>
          </Button>
          <Button variant="outline" size="sm">
            Share <Kbd>T</Kbd>
          </Button>
        </ActionBarContent>
      </ActionBarRoot>
    </>
  );
}

// const items = [
//   { id: 1, product: "Stainless Stell 304 Pipe", priceInUnit: 999.99, length: "255 mm", material: "Aluminium", shape: "Round", thickness: "", surfaceFinish: "", outerDiameter: "" },
//   { id: 2, product: "Carbon Stell A105 Tubing",  priceInUnit: 49.99, length: "", material: "", shape: "", thickness: "", surfaceFinish: "", outerDiameter: "" },
//   { id: 3, product: "Duplex Steel 2205 Flangers",  priceInUnit: 150.0, length: "", material: "", shape: "", thickness: "", surfaceFinish: "", outerDiameter: "" },
//   { id: 4, product: "Carbon Steel A105 Tubing", priceInUnit: 799.99, length: "", material: "", shape: "", thickness: "", surfaceFinish: "", outerDiameter: "" },
//   { id: 5, product: "Hastelloy C22 Valves",  priceInUnit: 199.99, length: "", material: "", shape: "", thickness: "", surfaceFinish: "", outerDiameter: "" },
//   { id: 5, product: "Incoloy 800 Gasket",  priceInUnit: 199.99, length: "", material: "", shape: "", thickness: "", surfaceFinish: "", outerDiameter: "" },
//   { id: 5, product: "Inconel 600 Instrumentation Fittings",  priceInUnit: 199.99, length: "", material: "", shape: "", thickness: "", surfaceFinish: "", outerDiameter: "" },
//   { id: 5, product: "Copper Nickel 90/10 Pipe Fittings",  priceInUnit: 199.99, length: "", material: "", shape: "", thickness: "", surfaceFinish: "", outerDiameter: "" },
// ];

import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

export const ActionBarRoot = ({ open, children }) => {
  if (!open) return null; 
  return <Box bg="gray.100" p={4}>{children}</Box>;
};

export const ActionBarContent = ({ children }) => (
  <Box display="flex" justifyContent="space-between">{children}</Box>
);

export const ActionBarSelectionTrigger = ({ children }) => (
  <Text>{children}</Text>
);

export const ActionBarSeparator = () => (
  <Box borderLeft="1px solid gray" mx={2} height="24px" />
);

import {
  Box,
  CheckBox,
  CurrencyInput,
  DatePicker,
  DropZone,
  Header,
  Input,
  Label,
  PhoneInput,
  Select,
  TextArea,
} from '@adminjs/design-system';
import React, { useState } from 'react';

const FormPage = () => {
  const [value, setValue] = useState();
  const [date, setDate] = useState('2021-06-17');
  const options = [
    { value: '1', label: 'Office 1' },
    { value: '2', label: 'Office 2' },
  ];

  return (
    <Box variant="grey">
      <Header>Form</Header>
      <Box variant="white">
        <Box p="xl" flex justifyContent="space-between" style={{ gap: 16 }}>
          <Box width="100%">
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" width={1} />
          </Box>
          <Box width="100%">
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" width={1} />
          </Box>
          <Box width="100%">
            <Label htmlFor="phone">Phone</Label>
            <PhoneInput id="phone" />
          </Box>
        </Box>

        <Box p="xl" flex justifyContent="space-between" style={{ gap: 16 }}>
          <Box width="100%">
            <Label>Select</Label>
            <Select value={value} onChange={(selected) => setValue(selected)} options={options} />
          </Box>
          <Box width="100%">
            <Label>Date of birth</Label>
            <DatePicker propertyType="date" onChange={setDate} value={date} />
          </Box>
          <Box width="100%">
            <Label htmlFor="currency">Salary</Label>
            <CurrencyInput id="currency" intlConfig={{ locale: 'en-US', currency: 'GBP' }} />
          </Box>
        </Box>

        <Box p="xl">
          <Label htmlFor="textarea1">Additional</Label>
          <TextArea id="textarea1" width={1} />
        </Box>

        <Box p="xl">
          <CheckBox id="isActive" />
          <Label inline htmlFor="isActive" ml="default">
            Active
          </Label>
        </Box>

        <Box p="xl">
          <Label>Attachment</Label>
          <DropZone />
        </Box>
      </Box>
    </Box>
  );
};

export default FormPage;

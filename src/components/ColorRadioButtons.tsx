import * as React from 'react';
import Radio from '@mui/material/Radio';
import { Box, Typography } from '@mui/material';

export default function ColorRadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <Box sx={{}}>
      <Typography variant="body2"> COLOR </Typography>
      <Radio {...controlProps('a')} sx={{
          color: '#0F172A',
          '&.Mui-checked': {
            color: '#0F172A',
          },
        }} />
        <Radio {...controlProps('b')} sx={{
          color: '#F4C47B',
          '&.Mui-checked': {
            color: '#F4C47B',
          },
        }} />
        <Radio {...controlProps('c')} sx={{
          color: '#AAA4F7',
          '&.Mui-checked': {
            color: '#AAA4F7',
          },
        }} />
        <Radio {...controlProps('d')} sx={{
          color: '#D4F9C1',
          '&.Mui-checked': {
            color: '#D4F9C1',
          },
        }} />
    </Box>
  );
}

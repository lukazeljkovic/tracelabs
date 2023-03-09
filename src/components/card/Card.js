import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import SearchBar from '../searchbar/SearchBar';
import Table from '../table/Table';
import { Button } from '@mui/material';
import { useState} from 'react';


function BasicCard({header,content}) {

    const [searchAdressValue, setSearchAdressValue] = useState('');
  const [searchBlockValue, setSearchBlockValue] = useState('');
  const [adress, setAdress] = useState('');
  const [blockNumber, setBlockNumber] = useState(null)
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async () => {

    //setLoading(true);
    setBlockNumber(parseInt(searchBlockValue));
    setAdress(searchAdressValue);
  }
  const handleAdressChange = (valueAdress) => {
    setSearchAdressValue(valueAdress);
  };
  const handleBlockChange = (valueBlock) => {
    setSearchBlockValue(valueBlock);
  };


   
  return (
    <Card>
        <SearchBar id = "SearchAdress"
        placeholder = "Search by adress"
        onChange = {(event) => handleAdressChange(event.target.value)}>

        </SearchBar>
        <Button onClick={onSubmit}>Search</Button>
        <SearchBar 
        id = "SearchBlock"
        placeholder = "Search by block"
        onChange = {(event) => handleBlockChange(event.target.value)}>

        </SearchBar>
        <CardContent>
        <Table adress={adress}
              blockNumber= {blockNumber}
              isLoading = {isLoading}>
      </Table>
        </CardContent>
    </Card>
  )
}

export default BasicCard
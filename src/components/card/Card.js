import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



import SearchBar from '../searchbar/SearchBar';
import ETCTable from '../table/Table';
import { Button } from '@mui/material';
import { useState} from 'react';
import { fetchData } from '../../ApiCalls';


function BasicCard({header,content}) {

    const [searchAdressValue, setSearchAdressValue] = useState('');
  const [searchBlockValue, setSearchBlockValue] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isOkAdress, setIsOkAdress] = useState(true);

  

  const onSubmit = async () => {
    if(searchAdressValue === '')
    {
        setIsOkAdress(false);
    }
    else{
    const dataFetched = await fetchData(searchAdressValue, searchBlockValue);
    if(dataFetched === 'Error! Invalid address format')
    {
        setIsOkAdress(false);
    }
    else 
    {
    dataFetched.map((item) =>
    {
        const timestampMs = item.timeStamp * 1000;
        const date = new Date(timestampMs);

        // Step 2: Get the year, month, and day from the date object
        const year = date.getUTCFullYear();
        const month = date.getUTCMonth() + 1; // Month is zero-indexed, so add 1
        const day = date.getUTCDate();
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const seconds = date.getUTCSeconds();

        console.log(`Timestamp: ${item.timeStamp}, Year: ${year}, Month: ${month}, Day: ${day}`);
        
        // Step 3: Pad the month and day with a leading zero if necessary
        const paddedMonth = month.toString().padStart(2, '0');
        const paddedDay = day.toString().padStart(2, '0');
        
        // Step 4: Combine the year, month, and day into the desired format
        const formattedDate = `${year}-${paddedMonth}-${paddedDay} ${hours}:${minutes}:${seconds} UTC`;
        console.log(item.timeStamp);
        item.timeStamp = formattedDate;
    return item;
    })
    setData(dataFetched);
    setIsOkAdress(true);
    }
    
    
    }
    setLoading(true);
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
        <ETCTable data = {data}
              isLoading = {isLoading}
              isOkAdress = {isOkAdress}>
      </ETCTable>
        </CardContent>
    </Card>
  )
}

export default BasicCard
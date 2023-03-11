
import { Alert, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


function ETCTable({data, isLoading, isOkAdress}) {

    const [rowData, setRowData] = useState(rows);
    const [orderDirection, setOrderDirection] = useState("asc");

  if(!isLoading) return <div>is Loading</div>
  if (!isOkAdress) return <Alert severity="warning">Invalid adress format, please check that you entered the right adress!</Alert>
  return (
    <TableContainer component={Paper}>
     <Table aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell align="center">Transaction hash</TableCell>
           <TableCell align="center">Block</TableCell>
           <TableCell align="center">Date</TableCell>
           <TableCell align="center">From</TableCell>
           <TableCell align="center">Value</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {data.map((item) => (
           <TableRow key={item.hash}>
             
             <TableCell align="center">{item.hash}</TableCell>
             <TableCell align="center">{item.blockNumber}</TableCell>
             <TableCell align="center">{item.timeStamp}</TableCell>
             <TableCell align="center">{item.from}</TableCell>
             <TableCell align="center">{item.value}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
  )
}

export default ETCTable


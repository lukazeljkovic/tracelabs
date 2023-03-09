import React, { useState, useEffect } from 'react';

function Table({adress, blockNumber, isLoading}) {

    const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${adress}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=VSDA8WCYWRNHDDRBE4MHX8SAMUWR17JBYM`);
      console.log(adress);
      const json = await response.json();
      setData(json.result);
    } catch (error) {
      console.error(error);
    }
  };
  if(!isLoading) return <div>is Loading</div>
  return (
    <table>
      <thead>
        <tr>
          <th>Transaction hash</th>
          <th>Block</th>
          <th>Time Stamp</th>
          <th>From</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.hash}>
            <td>{item.hash}</td>
            <td>{item.blockNumber}</td>
            <td>{item.timeStamp}</td>
            <td>{item.from}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
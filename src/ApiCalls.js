export const fetchData = async (adress, block) => {
    try {
    /*const blockResponse = await fetch("https://api.etherscan.io/api?module=block&action=getblockcountdown&blockno=16701588&apikey=VSDA8WCYWRNHDDRBE4MHX8SAMUWR17JBYM");
    const blockJson = await blockResponse.json();
    //const blockNumber = blockJson.result.CurrentBlock;
    console.log(blockJson);
    POKUŠAO DA UZMEM CURRENT BLOCK ALI JAVLJA GREŠKU NEĆE DA SE POZOVE POZIV
    */
    
    const response = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${adress}&startblock=${block}&endblock=99999999&page=1&offset=10&sort=asc&apikey=VSDA8WCYWRNHDDRBE4MHX8SAMUWR17JBYM`);
    const json = await response.json();
    return json.result;
    } catch (error) {
      console.error(error);
    }
  };
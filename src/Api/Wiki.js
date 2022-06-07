import axios from "axios";

const wikisearch = (search, callback) => {
    const endpoint = "https://en.wikipedia.org/w/api.php";
    const params = "?action=query" 
    + "&prop=extracts"
    + "&exsentences=3"
    + "&exlimit=1"
    + "&titles=" + search
    + "&explaintext=1"
    + "&format=json"
    + "&formatversion=2"
    + "&origin=*";
  
    
  
    const link = endpoint + params;
    console.log(link);
    
    var wikiconfig = {
      timeout: 6500
    };
    
  async function getJsonResponse (url, config){
      const res = await axios.get(url, config);
      return res.data;
    };
    return getJsonResponse(link, wikiconfig).then(result => {
      console.log(result)
      callback(result.query.pages[0].extract);
      
    }).catch(e=>{
      console.log("DEU RUIM AQUI Ó ====>",e);
      return "Descrição não encontrada!";
    })
    
    
  };
export default wikisearch;

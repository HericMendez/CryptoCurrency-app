import axios from "axios";

const wikisearch = (search, callback) => {
    const endpoint = "https://simple.wikipedia.org/w/api.php";
    const params = "?action=query" 
    + "&prop=extracts"
    + "&exsentences=2"
    + "&exlimit=1"
    + "&titles=" + search
    + "&explaintext=1"
    + "&format=json"
    + "&formatversion=2"
    + "&origin=*";
  
    
  
    const link = endpoint + params;

    
    var wikiconfig = {
      timeout: 6500
    };
    
  async function getJsonResponse (url, config){
      const res = await axios.get(url, config);
      return res.data;
    };
    return getJsonResponse(link, wikiconfig).then(result => {

      callback(result.query.pages[0].extract);
      
    }).catch(e=>{
      console.log("DEU RUIM AQUI Ó ====>",e);
      return "Descrição não encontrada!";
    })
    
    
  };
export default wikisearch;

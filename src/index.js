import { createRoot } from "react-dom/client";
import City from "./City"
import { Citys} from "./City";
import'./index.css'


import Anagar from "./img/city.png";

const root = createRoot(document.getElementById("root"));

root.render(
    <>
    <div>
    <City
   
   title = ""

     information = "Ahmadnagar(officially Ahilyanagar).Ahmednagar is a city rich in historical significance,
                               and offers a wealth of sights including ancient monumemnts majestic,
                         places ,and intriguing museume.
                         "
    
    
                         area ="Total39.30km(15.17 sq mi)
                         Ahmednagar district , officiall Ahilyanagar district is the 
                         largest district of maharastra state in western india. "
      
      
      history ="the early history of ahilyanagar starts from 240b.c. 
      when the vicinity is mentioned in theMuryan Emperor Ashok 
      .The Foundation of city of Ahmednagar was laid in 1494 on the late bank of Sine river"/>

    
    </div>
    
    </>

)
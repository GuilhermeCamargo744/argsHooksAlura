import React from "react";
import { View } from "react-native"
import Produtores from "../../Components/Produtores";
import Topo from "../../Components/Topo";


const Home = () =>{
return(
    <View>
        <Produtores topo={Topo}/>
    </View>
)

}

export default Home
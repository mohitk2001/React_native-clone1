import { StyleSheet,Dimensions } from "react-native";

const styles=StyleSheet.create({
    CarItem_container:{
        width:"100%",
        height:Dimensions.get("screen").height,
        display:"flex",
        justifyContent:"center",
        flexDirection:"row"
    
    },
    image_background:{
        width:"100%",
        height:"100%",
        resizeMode:"cover",
        position:"absolute"
    },
    tittle_Box:{
        marginTop:20
    },
    CarItem_Tittle:{
        marginTop:50,
        fontSize:40,
        fontWeight:"600",
        
    },
    CarItem_Sub_Tittle:{
        fontSize:19,
        fontWeight:"100",
        alignSelf:"center"
    },
    buttons:{
        position:"absolute",
        bottom:180,
        width:"100%",
        display:"flex",
        alignItems:"center"
    },
    customOrder:{
        backgroundColor:"grey",
        width:"80%",
        height:40,
        marginBottom:10,
        borderRadius:30,
        display:"flex",
        justifyContent:"center"
    },
    customOrder_Text:{
        alignSelf:"center",
        fontSize:20,
        color:"#fff"
    },
    existingOrder:{
        backgroundColor:"#ffff",
        width:"80%",
        height:40,
        borderRadius:30,
        display:"flex",
        justifyContent:"center"
    },
    existingOrder_Text:{
        alignSelf:"center",
        fontSize:20

    }
})
export default styles;
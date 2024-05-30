/* eslint-disable prettier/prettier */


import { StyleSheet } from "react-native";
import { MyColor } from "./Color";

export const Styles=StyleSheet.create({
    btnBlue:{
      width:72,
      height:72,
      backgroundColor:MyColor.blue,
      justifyContent:"center",
      alignItems:"center",
      margin:8,
    },
    btnDark:{
        width:72,
        height:72,
        backgroundColor:MyColor.btnDark,
        justifyContent:"center",
        alignItems:"center",
        margin:8,
    },
    btnLight:{
        width:72,
        height:72,
        backgroundColor:MyColor.white,
        justifyContent:"center",
        alignItems:"center",
        margin:8,
    },
    btnGray:{
        width:72,
        height:72,
        backgroundColor:MyColor.btnGray,
        justifyContent:"center",
        alignItems:"center",
        margin:8,
    },
    smallTextLight:{
        fontSize:32,
        color:MyColor.white,

    },
    smallTextDark:{
        fontSize:32,
        color:MyColor.black,
    },
    row:{
        maxWidth:"100%",
        flexDirection:"row",
    },
    viewButton:{
        position:"absolute",
        bottom:50,
    },
    screenFirstNumber:{
        fontSize:96,
        color:MyColor.gray,
        fontWeight:"200",
        alignSelf:"flex-end",
    },
    screenSecondNumber:{
        fontSize:40,
        color:MyColor.gray,
        fontWeight:"200",
        alignSelf:"flex-end",
    }
});
/* eslint-disable prettier/prettier */
import { useState } from 'react';

import { View ,Text} from 'react-native';
import Button from './Button';
import { Styles } from '../styles/GlobalStyles';
import { MyColor } from '../styles/Color';
0
export default function MyKeyword(){
    const [firstNumber, setFirstNumber]=useState("");
    const [secondNumber,setSecondNumber]=useState("");
    const [operation,setOperation]=useState("")
    const [result, setResult]=useState<Number | null>(null);
    const [expression, setexpression] = useState("")
    const handleNumberPress=(buttonValue:string)=>{
        setexpression(expression+buttonValue)
       if(firstNumber.length<10){
         setFirstNumber(firstNumber+ buttonValue)
       }
       setResult(null)
    }

    const handleOperationPress=(buttonValue:string)=>{
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("")
        setexpression(expression+buttonValue)
        setResult(null)
    }

    const clear=()=>{
        setFirstNumber("")
        setSecondNumber("")
        setOperation("")
        setResult(null)
        setexpression("")
    }
    

    const getResult=()=>{
      setResult(eval(expression))
    }

    
    return(
        <View style={Styles.viewButton}>
            <View style={{height:120, width:"99%", justifyContent:"flex-end", alignSelf:"center"}}>
               <Text style={Styles.screenSecondNumber}>
                 {expression?expression:0}
               </Text>
                 <Text style={{color:"purple", fontSize:50, fontWeight:"500",textAlign:"right"}}> {result?String(result):""}</Text>
            </View>
        <View style={Styles.row}>
            <Button title="C" isGray onPress={clear} />
            <Button title="+" isGray onPress={()=>handleOperationPress("+")} />
            <Button title="%" isGray onPress={()=>handleOperationPress("%")} />
            <Button title="-" isBlue onPress={()=>handleOperationPress("-")} />
        </View>
        <View style={Styles.row}>
            <Button title="7" isGray onPress={()=>handleNumberPress("7")} />
            <Button title="8" isGray onPress={()=>handleNumberPress("8")} />
            <Button title="9" isGray onPress={()=>handleNumberPress("9")} />
            <Button title="x" isBlue onPress={()=>handleNumberPress("*")} />
        </View>
        <View style={Styles.row}>
            <Button title="4" isGray onPress={()=>handleNumberPress("4")} />
            <Button title="5" isGray onPress={()=>handleNumberPress("5")} />
            <Button title="6" isGray onPress={()=>handleNumberPress("6")} />
            <Button title="-" isBlue onPress={()=>handleNumberPress("-")} />
        </View>
        <View style={Styles.row}>
            <Button title="1" isGray onPress={()=>handleNumberPress("1")} />
            <Button title="2" isGray onPress={()=>handleNumberPress("2")} />
            <Button title="3" isGray onPress={()=>handleNumberPress("3")} />
            <Button title="+" isBlue onPress={()=>handleNumberPress("+")} />    
        </View>
        <View style={Styles.row}>
            <Button title="." isGray onPress={()=>handleNumberPress(".")} />
            <Button title="0" isGray onPress={()=>handleNumberPress("0")} />
            <Button title="3" isGray onPress={()=>handleNumberPress("3")} />
            <Button title="=" isGray onPress={()=>getResult()} />
      </View>
        
        </View>
    )
}
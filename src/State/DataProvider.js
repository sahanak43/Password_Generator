
import React,{createContext,Component} from "react";
const DataContext=createContext({});

class DataProvider extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         characterLength:10,
         generatedPassword:'',
         passwordStrength:0,
         options:{
            includeUppercase:false,
            includeLowercase:false,
            includeNumbers:false,
            includeSymbols:false,

         },

      };
    }

setCharacterLength=(length)=>{
    this.setState({characterLength:length});
};

setGeneratedPassword=(password)=>{
    this.setState({generatedPassword:password});
};
setPasswordStrength=(strength)=>{
this.setState({passwordStrength:strength})
};
setOptions=(options)=>{
    this.setState({options});
};
render(){
  const {children}=this.props;
  const{
    characterLength,
    generatedPassword,
    passwordStrength,
    options
  }  =this.state;

  return(
   < DataContext.Provider
   value={{
    characterLength,
    setCharacterLength:this.setCharacterLength,
    generatedPassword,
    setGeneratedPassword:this.setGeneratePassword,
    passwordStrength,
    setPasswordStrength:this.setPaswordStrength,
    options,
    setOptions:this.setOptions,
   }}
>

    {children}
</DataContext.Provider>
  )
}
}
export default DataProvider;
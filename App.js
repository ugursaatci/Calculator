import React, {Component} from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
  
  } from 'react-native';
  

export default class App extends Component{

  state={
    resultString:0
  }
  handleEquals = () => {
    try {
      const result = eval(this.state.resultString);
      this.setState({ resultString: result.toString() });
    } catch (error) {
      this.setState({ resultString: 'Hata' });
    }
  }
  handleBackSpace = () => {
    const {resultString} = this.state;
    if(resultString.length > 0)
    {
      const newResultString= resultString.slice(0,-1)
      this.setState({resultString: newResultString})
    }
  }
  
  
  render(){
    const ResultS= this.state.resultString
    return(
        <View style={{backgroundColor:'black', flex:1}}>
            <View style={style.menu_bar}>
                <TouchableOpacity><Image source={require('./images/ust_menu_1.png')}></Image></TouchableOpacity>
                <TouchableOpacity><Image source={require('./images/ust_menu_2.png')}></Image></TouchableOpacity>
                <TouchableOpacity><Image source={require('./images/ust_menu_3.png')}></Image></TouchableOpacity>
                <TouchableOpacity><Image source={require('./images/ust_menu_4.png')}></Image></TouchableOpacity>
                <TouchableOpacity><Image source={require('./images/ust_menu_5.png')}></Image></TouchableOpacity>
            </View>
            <View style={style.result_screen}>
              <View style={{flex:50, justifyContent:'flex-end',alignItems:'flex-end'}}><Text style={{color:'white', fontSize:30}}>{ResultS}</Text></View>
              <View style={{flex:1,backgroundColor:'#5e5e5e'}}></View>
            </View>
            <View style={style.keyboard}>
            <View style={{flexDirection:'row',justifyContent:'space-around', flex:1}}>
            <TouchableOpacity onPress={()=>this.setState({resultString: 0})}><Image source={require('./images/keyboard_1.png')}></Image></TouchableOpacity>
            <TouchableOpacity onPress={this.handleBackSpace}><Image source={require('./images/keyboard_2.png')}></Image></TouchableOpacity>
            <TouchableOpacity onPress={()=> this.setState({resultString: this.state.resultString + '%'})}><Image source={require('./images/keyboard_3.png')}></Image></TouchableOpacity>
            <TouchableOpacity onPress={()=> this.setState({resultString: this.state.resultString + '/'})}><Image source={require('./images/keyboard_4.png')}></Image></TouchableOpacity>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-around', flex:1}}>
              <TouchableOpacity onPress={()=>this.setState({resultString: this.state.resultString + 7})}><Image source={require('./images/keyboard_5.png')}></Image></TouchableOpacity>
              <TouchableOpacity onPress={()=>this.setState({resultString: this.state.resultString + 8})}><Image source={require('./images/keyboard_6.png')}></Image></TouchableOpacity>
              <TouchableOpacity onPress={()=>this.setState({resultString: this.state.resultString + 9})}><Image source={require('./images/keyboard_7.png')}></Image></TouchableOpacity>
            <TouchableOpacity onPress={()=>this.setState({resultString: this.state.resultString + '*'})}><Image source={require('./images/keyboard_8.png')}></Image></TouchableOpacity>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-around', flex:1}}>
              <TouchableOpacity onPress={()=>this.setState({resultString: this.state.resultString + 4})}><Image source={require('./images/keyboard_9.png')}></Image></TouchableOpacity>
              <TouchableOpacity onPress={()=>this.setState({resultString: this.state.resultString + 5})}><Image source={require('./images/keyboard_10.png')}></Image></TouchableOpacity>
              <TouchableOpacity onPress={()=>this.setState({resultString: this.state.resultString + 6})}><Image source={require('./images/keyboard_11.png')}></Image></TouchableOpacity>
            <TouchableOpacity onPress={()=>this.setState({resultString: this.state.resultString + '-'})}><Image source={require('./images/keyboard_12.png')}></Image></TouchableOpacity>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-around', flex:1}}>
              <TouchableOpacity onPress={()=>this.setState({resultString: this.state.resultString + 1})}><Image source={require('./images/keyboard_13.png')}></Image></TouchableOpacity>
              <TouchableOpacity onPress={()=>this.setState({resultString: this.state.resultString + 2})}><Image source={require('./images/keyboard_14.png')}></Image></TouchableOpacity>
              <TouchableOpacity onPress={()=>this.setState({resultString: this.state.resultString + 3})}><Image source={require('./images/keyboard_15.png')}></Image></TouchableOpacity>
            <TouchableOpacity onPress={()=>this.setState({resultString: this.state.resultString + '+'})}><Image source={require('./images/keyboard_16.png')}></Image></TouchableOpacity>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-around', flex:1}}>
              <TouchableOpacity><Image source={require('./images/keyboard_17.png')}></Image></TouchableOpacity>
              <TouchableOpacity onPress={()=>this.setState({resultString: this.state.resultString + 0})}><Image source={require('./images/keyboard_18.png')}></Image></TouchableOpacity>
              <TouchableOpacity onPress={()=>this.setState({resultString: this.state.resultString + ','})}><Image source={require('./images/keyboard_19.png')}></Image></TouchableOpacity>
            <TouchableOpacity onPress={this.handleEquals}><Image source={require('./images/keyboard_20.png')}></Image></TouchableOpacity>
              </View>
              
            </View>
              
        </View>
    )
  }
}

const style=StyleSheet.create({
  menu_bar:{
    flexDirection:'row',
     justifyContent:'space-around',
      marginTop:10
    },
  result_screen:{
    flex:4
  },
  keyboard:{
    flex:5
  },
  text:{
    color:'white'
  }
})



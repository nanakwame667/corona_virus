import { Ionicons } from '@expo/vector-icons';

import React,{Component}from 'react';

import { Text, View ,StyleSheet,TextInput,} from 'react-native';

import {Button} from 'native-base';

import Modal from 'react-native-modal';

import Picker from './country';


export default class HeaderLeft extends Component{
    constructor(props){
        
        super(props)
        this.state={
            show:false,
            change:true,
            change1:false 
        }
        
    }
    handlerButtonOnClick(){
        this.setState({
           change: true
        });
        this.setState({change1:false})
      }
      handlerButtonOnClick1(){
        this.setState({
           change1: true
        });
        this.setState({change:false})
      }
    close(show1){
        this.setState({show:show1});
    }
    
    render(){
        var _style;
        if (this.state.change){ // clicked button style
          _style = {
              color: "#000"
            }
        }
        else{ // default button style
          _style = {
              color: "#DCDCDC"
            }
        }
        var _style1;
        if (this.state.change1){ // clicked button style
          _style1 = {
              color: "#DCDCDC"
            }
        }
        else{ // default button style
          _style1 = {
              color: "#000"
            }
        }
        return(
            <View>
            <Ionicons name="ios-contact" size={45} color="grey"
                    style={{marginHorizontal:20}}
                    onPress={()=>this.setState({show:true})}
                    />
            <View >
            <Modal
            style={{width:420,backgroundColor:'none',margin:0,height:180,justifyContent:'flex-start',paddingTop:10}}
            animationType = {"slide"}
            
            transparent={true}
            visible={this.state.show}
            onRequestClose={() => {
                Alert.alert('Modal has now been closed.');
                
            }}
            >
            
            <View style={styles.modalView}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontFamily:'rale_bold',fontSize:35}}>Profile</Text>
            <Ionicons name="md-close" size={30} color="black" 
            onPress={() => {
                this.close(!this.state.show);}}
                
            />
            </View>
             <View style={{marginTop:40}}>
             
             <Text style={{fontFamily:'rale_regular',fontWeight:'bold'}}>Personal Details</Text>
             <Text style={{fontFamily:'rale_regular',fontSize:12,marginTop:20,marginBottom:10}}>Enter Age</Text>
             <TextInput
             keyboardType='number-pad'
             style={{
                    height:50,
                    borderWidth:StyleSheet.hairlineWidth,
                    borderRadius:4,borderColor:'rgb(220, 220, 220)',
                    justifyContent:'center',marginBottom:15
            }}
             />
             <View style={{flexDirection:'row',marginBottom:30}}>
             <Button rounded dark={this.state.change1} disabled={!Boolean(this.state.change1)}
             style={_style,{width:27,height:27,justifyContent:'center',marginRight:5}}
             onPress={()=>this.setState(disabled)}
             >
             <Ionicons name="ios-checkmark" size={34} color="white" />
             </Button>
             <Text style={{marginRight:30,fontFamily:'rale_regular',fontSize:12,alignSelf:'center'}}>Female</Text>
             <Button rounded dark={this.state.change}
             style={{width:27,height:27,justifyContent:'center'}}
             
             
             >
             <Ionicons name="ios-checkmark" size={34} color="white" />
             </Button>
             <Text style={{marginLeft:5,fontFamily:'rale_regular',fontSize:12,alignSelf:'center'}}>Male</Text>
             </View>
             <Text style={{fontFamily:'rale_regular',fontWeight:'bold'}}>Travel History</Text>
             <Text
             style={{fontFamily:'rale_regular',fontSize:10}}
             >Select the last two countries you visited(If Applicable)</Text>
             <View style={{flexDirection:'row',marginTop:30,marginHorizontal:2}}>
                <View style={{
                    borderWidth:1.5,
                    width:180,height:120,
                    borderRadius:7,
                    justifyContent:'center',alignItems:'center'
                }}>
                <Picker/>
                </View>
                
                <View
                style={{
                    borderWidth:1.5,
                    width:180,height:120,
                    borderRadius:7,marginLeft:10,
                    justifyContent:'center',alignItems:'center'
                }}
                >
                <Picker/>
                </View>
                
             </View>
             <View style={{marginTop:20}}>
                <Text style={{fontFamily:'rale_regular',fontWeight:'bold'}}>Medical Professional Information</Text>
                <Text style={{fontFamily:'rale_regular',fontSize:10}}>Applicable if you are a health worker</Text>
                </View>
                <View style={{marginTop:20}}>
                <Text>Health License Number</Text>
                <TextInput
             keyboardType='number-pad'
             style={{
                    height:50,
                    borderWidth:StyleSheet.hairlineWidth,
                    borderRadius:4,borderColor:'rgb(220, 220, 220)',
                    justifyContent:'center',marginBottom:15,
                    marginTop:10
            }}
             />
                </View>
            <View style={{justifyContent:'center',marginTop:10}}>
            <Button style={{height:55,justifyContent:'center'}}
            onPress={() => {
                this.close(!this.state.show);}}
            dark
            >
            <Text style={{color:'#fff',fontFamily:'rale_bold'}}>Update Profile</Text>
            </Button>
            </View>
                  </View>
                  </View>
          </Modal>
            </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    modalView: {
        margin: 0,
        backgroundColor: "white",
        borderTopRightRadius: 5,borderTopLeftRadius:5,
        padding:15,
        height:727
      }
})
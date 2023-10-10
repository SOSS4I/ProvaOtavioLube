import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '285px',
        height: '99px',
        marginBottom: '20px',
        marginLeft:'50px'
    },
    input:{
        width: '75%',
        height: '50px',
        backgroundColor: 'green',
        padding: '10px',
        fontSize: '20px',
        opacity: '0.9',
        border: '2px solid black',
        borderRadius: '5px',
        marginBottom: '5px'
    },
    btn: {
        backgroundColor: 'gold',
        height: '40px',
        width: '75%',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    btnTxt: {
        fontSize: '22px',
        color: 'blue'
    },
    viewLinks:{
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: '15px'
    },
    welcomeText: {
        fontSize: 24,
        marginBottom: 20,
    },
    reminderText: {
        fontSize: 16,
        marginBottom: 10,
    },
    linkText: {
        fontSize: 18,
        color: 'blue',
        marginBottom: 5,
    },
    reminderText:{
        width:'60%',
        fontSize:'15px',
        marginTop:'20px',
        backgroundColor:'lightskyblue',
        border: '3px solid black',
        color:'black',

    },
    contactInfo:{
        marginTop:'280px',
        
    },
    contactInfoText:{
        fontSize:'15px'
        
    }
    
    
});

export default styles;
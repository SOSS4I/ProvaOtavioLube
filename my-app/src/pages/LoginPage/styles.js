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
        backgroundColor: 'darkgreen',
        padding: '10px',
        fontSize: '20px',
        opacity: '0.9',
        border: '2px solid black',
        borderRadius: '5px',
        marginBottom: '5px',
        color:'white'
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
    bntdebaixo:{
        width:'80px',
        height:'20px'
    }
});

export default styles;
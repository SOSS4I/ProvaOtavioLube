import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';

export default function LoginPage(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <TextInput placeholder='Email' style={styles.input}/>
            <TextInput placeholder='Password' style={styles.input}/>
            <TouchableOpacity style={styles.btn}>
                
                <Link to={{screen: 'HomePage'}} style = {styles.btnTxt}>Login</Link>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'ForgotPasswordPage'}}style ={styles.bntdebaixo}>Esqueceu a senha? </Link>
                <Link to={{screen: 'RegisterPage'}}>Cadastre-se </Link>
            </View>
        </View>
    )
}
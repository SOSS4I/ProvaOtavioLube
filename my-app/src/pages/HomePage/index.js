import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { Link } from '@react-navigation/native';

export default function HomePage() {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo} />
            <Text style={styles.welcomeText}>Bem-vindo ao Sistema MEDSENIOR</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Agendar Consulta</Text>
            </TouchableOpacity>
            <Text style={styles.reminderText}>Lembrete: Sua próxima consulta é em 10 de outubro às 15:00.</Text>
            
            <View style={styles.contactInfo}>
                <Text style={styles.contactInfoText}>Entre em contato:</Text>
                <Text style={styles.contactInfoText}>Endereço: 123 Rua da Saúde</Text>
                <Text style={styles.contactInfoText}>Telefone: (123) 456-7890</Text>
                {/* Adicione outros detalhes de contato, como e-mail, redes sociais, etc. */}
            </View>
        </View>
    )
}

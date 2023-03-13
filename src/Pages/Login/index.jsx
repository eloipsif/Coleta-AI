import React, { useState } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, TextInput,TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import { useNavigation } from'@react-navigation/native';

export default function Login() {

    const navigation = useNavigation();

    function handleNavegationToopcao(){
        navigation.navigate('Opcao')
    }
    return (
        <View style={styles.main}>
            <View>
                <Text style={styles.title}>Coleta-AI</Text>
            </View>
            <View style={styles.footer}>
                <TextInput style={styles.input1} placeholder="E-mail" />
                <TextInput style={styles.input2} placeholder="Senha" autoCorrect={false} />
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={handleNavegationToopcao}>
                    <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                <Text style={styles.cad}>Cadastrar-se</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    main: { marginLeft: "0%", flex: 1, marginTop: "20%" },
    title: { color: '#fff', backgroundColor: '#088A08', 
    fontSize: 22,height: 30,flexDirection: 'row',
    borderRadius: 9, overflow: 'hidden',alignItems: 'center',
     maxWidth: 110, marginTop: 0, marginLeft: "50%" },
    footer: {}, select: {},
    input1: { marginLeft: "3%", height: 60, backgroundColor: '#848484', borderRadius: 10, marginBottom: 8, paddingHorizontal: 24, fontSize: 16,marginTop: '30%' },
    input2: { marginLeft: "3%", height: 60, backgroundColor: '#848484', borderRadius: 10, marginBottom: 8, paddingHorizontal: 24, fontSize: 16,marginTop: '3%' },
    button: { backgroundColor: '#58FA58', height: 30, flexDirection: 'row', borderRadius: 10, overflow: 'hidden', alignItems: 'center', marginTop: 0,marginLeft:'36%', maxWidth: 110 }, 
     buttonText: { flex: 1, justifyContent: 'center', textAlign: 'center', color: '#FFF', fontFamily: 'Roboto_500Medium', fontSize: 16, },
     cad:{ marginLeft:'40%', color:"#0101DF"}
});
import React, { useState } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, TextInput,TouchableOpacity } from 'react-native';
export default function Opcao() {
    return (
        <View style={styles.main}>
            <View>
            <TouchableOpacity style={styles.buttonA}>
                    <Text style={styles.buttonText}>A</Text>
                    </TouchableOpacity>
                <TouchableOpacity style={styles.buttonU}>
                    <Text style={styles.buttonText}>Usuário</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonE}>
                    <Text style={styles.buttonText}>Empresa</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    main: { marginLeft: "0%", flex: 1, marginTop: "10%" },
    buttonA: { backgroundColor: '#58FA58', height: 30, flexDirection: 'row', borderRadius: 10, overflow: 'hidden', alignItems: 'center', marginTop: 0,marginLeft:'0%', maxWidth: 50 },
    buttonU: { backgroundColor: '#58FA58', height: 50, flexDirection: 'row', borderRadius: 10, overflow: 'hidden', alignItems: 'center', marginTop: "50%",marginLeft:'36%', maxWidth: 110 },
    buttonE: { backgroundColor: '#58FA58', height: 50, flexDirection: 'row', borderRadius: 10, overflow: 'hidden', alignItems: 'center', marginTop: "20%",marginLeft:'36%', maxWidth: 110 }, 
     buttonText: { flex: 1, justifyContent: 'center', textAlign: 'center', color: '#FFF', fontFamily: 'Roboto_500Medium', fontSize: 16, }
});
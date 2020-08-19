import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import GiveClassesbgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';


function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={GiveClassesbgImage}
        style={styles.content}
      >

        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor n nossa plataforma web.
      </Text>
      </ImageBackground>

      <RectButton
        onPress={handleNavigateBack}
        style={styles.okButton}
      >
        <Text style={styles.okButtonText}>
          Tudo bem
        </Text>
      </RectButton>
    </View>
  )
}

export default GiveClasses;
import React from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import giveClassesbackground from '../../assets/images/give-classes-background.png';

import styles from './styles';

function Onboarding2() {
  const { navigate } = useNavigation();

  function handleGoforward() {
    navigate('Landing');
  }

  return (
    <View style={styles.container}>

      <View style={styles.backbook}>
      <Image source={giveClassesbackground} style={styles.background} />
        <Image source={giveClassesIcon} style={styles.book} />
        
      </View>

      <View style={styles.bookText}>
        <Text style={styles.bookTextNu}>02.</Text>
        <Text style={styles.bookTextLine}>
        Ou dê aulas sobre 
        o que você mais conhece 
        </Text>
      </View>

        <View style={styles.bookArrow}>
          <BorderlessButton onPress={handleGoforward}>
            <Image source={backIcon} style={styles.bookArrowimg} />
          </BorderlessButton>
        </View>


    </View>
  )
}

export default Onboarding2;
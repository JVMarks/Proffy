import React from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import studyIcon from '../../assets/images/icons/study.png';

import styles from './styles';

function Onboarding() {
  const { navigate } = useNavigation();

  function handleGoforward() {
    navigate('Onboarding2');
  }

  return (
    <View style={styles.container}>

      <View style={styles.backbook}>
        <Image source={studyIcon} style={styles.book} />
      </View>

      <View style={styles.bookText}>
        <Text style={styles.bookTextNu}>01.</Text>
        <Text style={styles.bookTextLine}>
          Encontre vários professores
          para ensinar você
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

export default Onboarding;
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

import BodyText from '../components/bodyText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <BodyText style={{fontFamily: 'OpenSans-Bold'}}>
          The Game is Over!
        </BodyText>
        <View style={styles.imageContainer}>
          <Image
            // fadeDuration={1000}
            source={require('../assets/success.png')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{' '}
            <Text style={styles.highlight}> {props.roundsNumber}</Text> rounds
            to guess the number{' '}
            <Text style={styles.highlight}> {props.userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginHorizontal: 20,
    marginVertical: Dimensions.get('window').height / 30,
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'OpenSans-Bold',
  },
});

export default GameOverScreen;

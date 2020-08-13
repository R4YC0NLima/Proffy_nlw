import React from 'react';
import {View, Text, Image} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import heartOutlineicon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unFavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import styles from './styles.ts';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{uri: 'https://github.com/R4YC0NLima.png'}}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Raycon Lima</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Eu sou a neto da bruxa que seus ancestrais não conseguiram queima!!!
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {''}
          <Text style={styles.priceValue}>R$50,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton styles={styles.favoriteButton}>
            <Image source={heartOutlineicon} />
          </RectButton>
          <RectButton>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}></Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;

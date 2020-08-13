import React from 'react';
import {View, Text} from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles.ts';

function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />
    </View>
  );
}

export default Favorites;

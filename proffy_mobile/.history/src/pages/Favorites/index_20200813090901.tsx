import React from 'react';
import {View} from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles.ts';

function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus Favoritos" />
    </View>
  );
}

export default Favorites;

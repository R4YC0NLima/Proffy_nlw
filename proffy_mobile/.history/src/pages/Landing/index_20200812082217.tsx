import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles.ts';

import landingImg from '../../assets/images/landing.png';

function Landing() {
    return (
        <View styles={styles.container}>
            <Image source={landingImg} />
        </View>
    );
}

export default landing;
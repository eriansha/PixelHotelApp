import MainText from '../../atoms/main-text';
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Caption from '../../atoms/caption';
import VectorImage from 'react-native-vector-image';

import {starIcon} from '../../../assets';

interface HotelItemProps {
  hotel: {
    thumbnail: any;
    name: string;
    location: string;
    rate: number;
  };
}

const HotelItem: React.FC<HotelItemProps> = ({hotel}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.thumbnail}
        source={hotel.thumbnail}
        width={70}
        height={70}
      />

      <View style={styles.mainText}>
        <View>
          <MainText fontWeight="500" fontSize={14}>
            {hotel.name}
          </MainText>

          <View style={styles.icon}>
            <Caption fontSize={12}>{hotel.location}</Caption>
          </View>
        </View>
      </View>

      <View style={styles.icon}>
        <Caption fontSize={14}>{hotel.rate}</Caption>
        <VectorImage style={{marginLeft: 10}} source={starIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
  },
  thumbnail: {
    borderRadius: 10,
    marginRight: 15,
  },
  mainText: {
    flex: 1,
    marginVertical: 5,
    alignSelf: 'center',
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default HotelItem;

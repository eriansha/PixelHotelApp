import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import SectionTitle from '../../molecules/section-title';
import HotelItem from '../../molecules/hotel-item';

import {hotelItem1} from '../../../assets';

const HOTELS = [
  {
    id: 1,
    thumbnail: hotelItem1,
    name: 'Skytown Hotel',
    location: 'Sibolga, Medan',
    rate: 4.9,
  },
];

interface Hotel {
  id: number;
  thumbnail: string;
  name: string;
  location: string;
  rate: number;
}

interface HoteListItemProps {
  onPressItem: () => void;
}

const HotelListItem: React.FC<HoteListItemProps> = ({onPressItem}) => {
  return (
    <View style={styles.base}>
      <SectionTitle label="New Hotels Experience" />

      {HOTELS.map((hotel: Hotel) => (
        <TouchableOpacity key={hotel.id} onPress={onPressItem}>
          <HotelItem hotel={hotel} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    marginVertical: 20,
  },
});

export default HotelListItem;

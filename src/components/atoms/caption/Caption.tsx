import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface CaptionProps {
  children: string;
  fontSize: number;
}

/**
 * Caption text
 * @param {string} children text
 * @param {number} fontSize font size
 */
const Caption: React.FC<CaptionProps> = ({children, fontSize}) => {
  return <Text style={[styles.main, {fontSize: fontSize}]}>{children}</Text>;
};

const styles = StyleSheet.create({
  main: {
    fontFamily: 'Poppins',
    color: '#B7B7B7',
    lineHeight: 21,
    fontWeight: 'normal',
    marginBottom: 5,
  },
});

export default Caption;
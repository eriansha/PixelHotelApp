import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import MainText from '../../atoms/main-text';
import VectorImage from 'react-native-vector-image';

interface HeaderProps {
  onPressMenu: (event: GestureResponderEvent) => void | undefined;
  onPressNotificationBell: (event: GestureResponderEvent) => void | undefined;
  hasNewNotif?: boolean;
}

/**
 * Main header
 * @param {function} onPressMenu - handler to open/close the menu
 * @param {function} onPressNotificationBell - handler to open the notification inbox
 */
const Header: React.FC<HeaderProps> = ({
  onPressMenu,
  onPressNotificationBell,
  hasNewNotif,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressMenu} style={styles.wrapperIcon}>
        <VectorImage source={require('../../../assets/icon/menu.svg')} />
      </TouchableOpacity>
      <MainText fontWeight="bold" fontSize={20} color={'#fff'}>
        {'Discover'}
      </MainText>
      <TouchableOpacity
        onPress={onPressNotificationBell}
        style={styles.wrapperIcon}
      >
        <VectorImage source={require('../../../assets/icon/bell.svg')} />
        {hasNewNotif && <View style={styles.dot} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 50,
    backgroundColor: '#5589F0',
  },
  wrapperIcon: {
    backgroundColor: '#6D9CFA',
    borderRadius: 4,
    padding: 5,
    position: 'relative',
  },
  dot: {
    position: 'absolute',
    top: 4,
    right: 6,
    borderRadius: 6,
    backgroundColor: '#F2735B',
    width: 6,
    height: 6,
  },
});

export default Header;

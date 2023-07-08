import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const UserCard = ({ profileImage, name }) => {
  return (
    <View style={styles.card}>
      <Image source={profileImage} style={styles.profileImage} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserCard;

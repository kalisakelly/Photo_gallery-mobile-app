import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import UserCard from './User';

const UserListScreen = () => {
  const users = [
    { id: 1, name: 'John Doe', profileImage: require('../../assets/user2.png') },
    { id: 2, name: 'Jane Smith', profileImage: require('../../assets/user1.png') },
    // Add more user objects as needed
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            profileImage={user.profileImage}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
});

export default UserListScreen;

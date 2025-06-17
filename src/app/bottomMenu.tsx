import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

interface BottomMenuProps {
  backgroundColor?: string;
  onSearch?: (query: string) => void; 
}

export const BottomMenu: React.FC<BottomMenuProps> = ({ backgroundColor = '#87CEFA', onSearch }) => {
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchText);
    }
    setShowSearch(false);
    setSearchText('');
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableOpacity onPress={() => router.push('/inicial')}>
        <Image source={require('../../assets/images/home.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
        <Image source={require('../../assets/images/lupa.png')} style={styles.icon} />
      </TouchableOpacity>
      {showSearch && (
        <View style={styles.searchBox}>
          <TextInput
          style={styles.input}
          placeholder="Pesquisar..."
          value={searchText}
          onChangeText={text => {
            setSearchText(text);
            if (onSearch) onSearch(text);
          }}
          onSubmitEditing={handleSearch}
          autoFocus
        />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 5,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  searchBox: {
    position: 'absolute',
    bottom: 70,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 8,
    elevation: 5,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
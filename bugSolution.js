```javascript
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

const DATA = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
];

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulate asynchronous data fetching
    const timeoutId = setTimeout(() => {
      setItems(DATA);
    }, 1000); // Wait 1 second to simulate a delay
    return () => clearTimeout(timeoutId);
  }, []);

  const renderItem = ({item}) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View>
      {/* Check if items array has length before rendering the FlatList */}
      {items.length > 0 && (
        <FlatList data={items} renderItem={renderItem} keyExtractor={(item) => item.id} />
      )}
      {items.length === 0 && <Text>Loading...</Text>}
    </View>
  );
};

export default App;
```
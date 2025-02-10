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
    setItems(DATA);
  }, []);

  const renderItem = ({item}) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View>
      <FlatList data={items} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default App;
```
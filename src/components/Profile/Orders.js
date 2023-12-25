import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const ordersData = [
  { id: 1, amount: 50.0, date: '2023-01-01' },
  { id: 2, amount: 75.5, date: '2023-02-15' },
  { id: 3, amount: 30.8, date: '2023-03-22' },
  { id: 3, amount: 30.8, date: '2023-03-22' },
];

export default function Orders() {
  return (
    <ScrollView style={styles.container}>
      {ordersData.map((order) => (
        <View style={styles.orderBox} key={order.id}>
          <Text style={styles.orderText}>{`ID: ${order.id}`}</Text>
          <Text style={styles.orderText}>{`Tarih: ${order.date}`}</Text>
          <Text style={styles.orderText}>{`Tutar: ${order.amount} TL`}</Text>

        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  orderBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#8c52ff',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  orderText: {
    fontSize: 12,
  },
});

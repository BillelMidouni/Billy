import firestore from '@react-native-firebase/firestore';

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  storeId: string;
  items: OrderItem[];
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
}

const ordersCollection = firestore().collection('Orders');

export const getOrder = async (id: string): Promise<Order | null> => {
  const doc = await ordersCollection.doc(id).get();
  return doc.exists ? (doc.data() as Order) : null;
};

export const createOrder = async (order: Order): Promise<void> => {
  await ordersCollection.doc(order.id).set(order);
};

export const updateOrder = async (id: string, data: Partial<Order>): Promise<void> => {
  await ordersCollection.doc(id).update(data);
};

export const deleteOrder = async (id: string): Promise<void> => {
  await ordersCollection.doc(id).delete();
};

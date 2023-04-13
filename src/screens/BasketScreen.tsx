//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { XCircleIcon } from 'react-native-heroicons/outline'
import { useDispatch, useSelector } from 'react-redux';
import Currency from 'react-currency-formatter';

import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../../redux/features/basketSlice';
import { selectRestaurant } from '../../redux/features/restaurantSlice';
import { ScrollView } from 'react-native-gesture-handler';
import { urlFor } from '../../sanity';


// create a component
const BasketScreen = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const items = useSelector(selectBasketItems);
    const restaurant = useSelector(selectRestaurant)
    const basketTotal: number = useSelector(selectBasketTotal);
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

    //group selected items to basket in an array using its unique key -- id

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {})

        setGroupedItemsInBasket(groupedItems);
    }, [items])

    console.log('show', groupedItemsInBasket)





    return (
        <SafeAreaView className='flex-1 bg-white'>
            <View className='flex-1 bg-gray-100'>
                <View className='p-5 border-b border-[#00CCBB] bg-white shadow-xs'>
                    <View>
                        <Text className='text-lg font-bold text-center'>Basket</Text>
                        <Text className='text-center text-gray-400'>
                            {restaurant.title}
                        </Text>
                    </View>

                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className='rounded-full bg-gray-100 absolute top-3 right-5'
                    >
                        <XCircleIcon color='#00CCBB' height={50} width={50} />
                    </TouchableOpacity>
                </View>

                <View className='flex-row items-center space-x-4 px-4 py-4 bg-white scroll-my-36'>
                    <Image source={{
                        uri: 'https://links.papreact.com/wru'
                    }}
                        className='h-7 w-7 bg-gray-300 p-4 rounded-e-full'
                    />
                    <Text className='flex-1'>deliver is 50-75 min</Text>
                    <TouchableOpacity>
                        <Text className='text-[#00CCBB]'>Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        <View key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
                            <Text className='text-[#00CCBB]'>{items.length} x</Text>
                            <Image source={{
                                uri: urlFor(items[0]?.image).url()
                            }}
                                className='h-12 w-12 rounded-full'
                            />
                            <Text className='flex-1'>{items[0]?.name}</Text>

                            <Text>
                                <Currency quantity={items[0]?.price} currency="GBP" />
                            </Text>

                            <TouchableOpacity
                                onPress={() => dispatch(removeFromBasket({ id: key }))}
                            >
                                <Text className='text-[#00CCBB] text-xs'>
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>



                <View className='p-5 bg-white space-y-4'>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'>Subtotal</Text>
                        <Text className='text-gray-400'>
                            <Currency quantity={basketTotal} currency="GBP" />
                        </Text>
                    </View>

                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'>Delivery Fee</Text>
                        <Text className='text-gray-400'>
                            <Currency quantity={5.99} currency="GBP" />
                        </Text>
                    </View>


                    <View className='flex-row justify-between'>
                        <Text>Order Total</Text>
                        <Text className='font-extrabbold'>
                            <Currency quantity={basketTotal + 5.99} currency="GBP" />
                        </Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('PreparingOrder')}
                        className='rounded-lg bg-[#00CCBB] p-4'
                    >
                        <Text className='text-center text-white text-lg font-bold'>
                            Place Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};


export default BasketScreen;

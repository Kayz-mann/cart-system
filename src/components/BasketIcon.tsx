//import liraries
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Currency from 'react-currency-formatter'
import CategoryCard from './CategoryCard';
import client, { urlFor } from '../../sanity';
import { z } from 'zod';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../../redux/features/basketSlice';
import { useNavigation } from '@react-navigation/native';

interface Props {

}
// create a component
const BasketIcon: React.FC = () => {
    const navigation = useNavigation();
    const items = useSelector(selectBasketItems);
    const basketTotal: number = useSelector(selectBasketTotal);

    return (
        <View className='absolute bottom-10 w-full z-50'>
            <TouchableOpacity
                onPress={() => navigation.navigate('Basket')}
                className='mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row
            items-center space-x-1'>
                <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>
                    {items.length}
                </Text>
                <Text className='flex-1 text-white font-extrabold text-lg text-center'>View Basket</Text>
                <Text className='text-lg text-white font-extrabold'>
                    <Currency quantity={Number(basketTotal)} currency="GBP" />
                </Text>
            </TouchableOpacity>
        </View>
    );
};



//make this component available to the app
export default BasketIcon;

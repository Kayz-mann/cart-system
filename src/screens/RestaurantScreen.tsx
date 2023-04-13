import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { urlFor } from '../../sanity';
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import { FlatList } from 'react-native-gesture-handler';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../../redux/features/restaurantSlice';


const RestaurantScreen = (): JSX.Element => {
    const navigation = useNavigation();
    const dispatch = useDispatch()

    const route = useRoute();
    const {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        lng,
        lat
    }: any = route.params;

    // console.log('show dishes---', dishes.map(dish => dish));


    useEffect(() => {
        setRestaurant({
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            lng,
            lat
        })
    }, [dispatch]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, []);



    return (
        <>
            <BasketIcon />
            <ScrollView>
                <View>
                    <Image
                        source={{ uri: urlFor(imgUrl).url() }}
                        className='w-full h-56 bg-gray-300 p-4'
                    />
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
                    >
                        <ArrowLeftIcon size={20} color='00CCBBB' />
                    </TouchableOpacity>
                </View>

                <View className='bg-white'>
                    <View className='px-4 pt-4'>
                        <Text className='text-3xl font-bold'>
                            {title}
                        </Text>
                        <View className='flex-row space-x-2 my-1'>
                            <View className='flex-row items-center space-x-1'>
                                <StarIcon color='green' opacity={0.5} size={22} />
                                <Text className='text-xs text-gray-500'>
                                    <Text className='text-green-500'>
                                        {rating}
                                    </Text> . {genre}
                                </Text>
                            </View>

                            <View className='flex-row items-center space-x-1'>
                                <MapPinIcon color='green' opacity={0.5} size={22} />
                                <Text className='text-xs text-gray-500'>
                                    Nearby . {address}
                                </Text>
                            </View>
                        </View>

                        <Text className='text-gray mt-2 pb-4'>{short_description}</Text>
                    </View>

                    <TouchableOpacity
                        className='flex-row items-center space-x-2 p-4 border-y border-gray-300'
                    >
                        <QuestionMarkCircleIcon color='gray' opacity={0.5} size={20} />
                        <Text className='pl-2 flex-1 text-md font-bold'>
                            Have a food allergy?
                        </Text>
                        <ChevronRightIcon color='#00CCBB' />
                    </TouchableOpacity>

                </View>

                <View>
                    <Text className='px-4 pt-4 pb-4 font-bold text-xl'>
                        Menu
                    </Text>

                    {/* Dish Rows */}
                    <FlatList
                        data={dishes}
                        keyExtractor={(item) => item._id.toString()}
                        showsVerticalScrollIndicator={false}
                        bounces={false}

                        renderItem={({ item }) => {
                            return (
                                <View key={item._id}>
                                    <DishRow
                                        id={item._id}
                                        name={item.name}
                                        description={item.short_description}
                                        price={item.price}
                                        image={item.image}
                                    />
                                </View>
                            )
                        }} />
                </View>
            </ScrollView></>
    )
}

export default RestaurantScreen
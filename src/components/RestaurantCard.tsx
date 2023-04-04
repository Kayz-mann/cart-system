
import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline';

interface Props {
    id: string;
    imgUrl: string;
    title: string
    rating: any;
    genre: string;
    address: string;
    short_description: string;
    dishes: string[];
    lng: string | number;
    lat: string | number;

}

const RestaurantCard: React.FC<Props> = ({ id, imgUrl, title, rating, genre, address, short_description, dishes, lng, lat }) => {
    return (
        <TouchableOpacity className='bg-white mr-3 shadow'>
            <Image source={{ uri: imgUrl }} className='h-64 w-64 rounded-sm mx-1' />
            <View className='px-3 pb-4'>
                <Text className='font-bold text-lg pt-4'></Text>

                <View className='flex-row items-center space-x-1'>
                    <StarIcon color='green' opacity={0.5} size={22} />
                    <Text className='text-xs text-gray-500'>
                        <Text className='text-green-500'>{rating}</Text>. {genre}
                    </Text>
                </View>

                <View className='flex-row items-center space-x-1'>
                    <MapPinIcon color='gray' opacity={0.4} size={22} />
                    <Text className='text-xs text-gray-500'>Nearby .  {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};



export default RestaurantCard;


import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline';
import client, { urlFor } from '../../sanity';
import { useNavigation } from '@react-navigation/native';
import { z } from 'zod';
import restaurant from '../../sanity-delivery/schemas/restaurant';

interface Props {
    id: string;
    imgUrl: any;
    title: string
    rating: any;
    genre: string;
    address: string;
    short_description: string;
    dishes: any;
    lng: string | number;
    lat: string | number;

}

const RestaurantCard: React.FC<Props> = ({ id, imgUrl, title, rating, genre, address, short_description, dishes, lng, lat }) => {
    const navigation: any = useNavigation();
    const [restaurants, setRestaurants] = useState<any>([])

    useEffect(() => {
        //get restaurant details by id
        const schema = z.any()
        schema.parse(
            client.fetch(
                `
                    *[_type == 'featured' && _id == $id] {
                        ...,
                        restaurants[]->{
                            ...,
                            dishes[]->,
                            type-> {
                                name
                            }
                        }
                    }[0]
                `, { id: id }
            ).then((data: any) => {
                setRestaurants(data?.restaurants)
            })
        )

    }, []);

    console.log('show restaurants::||:', restaurants)

    return (
        <View


            className='bg-white mr-3 shadow'
        >
            <Image source={{ uri: urlFor(imgUrl).url() }} className='h-64 w-64 rounded-sm mx-1' />
            <View className='px-3 pb-4'>
                <Text className='font-bold text-lg pt-4'>{title}</Text>

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
        </View>
    );
};



export default RestaurantCard;

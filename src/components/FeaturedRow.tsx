
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import client from '../../sanity';
import { z } from 'zod';
import { useNavigation } from '@react-navigation/native';

interface Props {
    id: string;
    title: string;
    description: string;

}

const FeaturedRow: React.FC<Props> = ({ id, title, description }) => {
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
            ).then((data) => {
                setRestaurants(data?.restaurants)
            })
        )

    }, []);

    console.log('show restaurants::||:', restaurants)

    return (
        <View>
            <View className='mt-4 flex-row items-center justify-between px-4'>
                <Text className='font-bold text-lg'>{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>

            <Text className='text-xs text-gray-500 px-4'>{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                showsHorizontalScrollIndicator={false}
                className='pt-4'
            >
                {restaurants?.map((restaurant: any) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Restaurant', {
                                id: restaurant._id,
                                imgUrl: restaurant.image,
                                title: restaurant.name,
                                rating: restaurant.rating,
                                genre: restaurant.type?.name,
                                address: restaurant.address,
                                short_description: restaurant.short_description,
                                dishes: restaurant.dishes,
                                lng: restaurant.lng,
                                lat: restaurant.lat
                            })
                        }
                        }
                    >
                        <RestaurantCard
                            key={restaurant._id}
                            id={restaurant._id}
                            imgUrl={restaurant.image}
                            title={restaurant.name}
                            rating={restaurant.rating}
                            genre={restaurant.type?.name}
                            address={restaurant.address}
                            short_description={restaurant.short_description}
                            dishes={restaurant.dishes}
                            lng={restaurant.lng}
                            lat={restaurant.lat}
                        />
                    </TouchableOpacity>
                ))}

                {/* Restaurant Cards */}


                {/* <RestaurantCard
                    id='123'
                    imgUrl='https://images.pexels.com/photos/858501/pexels-photo-858501.jpeg?auto=compress&cs=tinysrgb&w=600'
                    title='Yo! Sushi'
                    rating={4.5}
                    genre='Japanese'
                    address='123 Main Street'
                    short_description='This is a description'
                    dishes={[]}
                    lng={20}
                    lat={20}
                /> */}


            </ScrollView>
        </View >
    );
};



export default FeaturedRow;

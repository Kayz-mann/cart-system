
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

interface Props {
    id: string;
    title: string;
    description: string;

}

const FeaturedRow: React.FC<Props> = ({ id, title, description }) => {
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
                {/* Restaurant Cards */}
                <RestaurantCard
                    id='123'
                    imgUrl='https://images.pexels.com/photos/670702/pexels-photo-670702.jpeg?auto=compress&cs=tinysrgb&w=600'
                    title='Yo! Sushi'
                    rating={4.5}
                    genre='Japanese'
                    address='123 Main Street'
                    short_description='This is a description'
                    dishes={[]}
                    lng={20}
                    lat={20}
                />

                <RestaurantCard
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
                />

                <RestaurantCard
                    id='123'
                    imgUrl='https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg?auto=compress&cs=tinysrgb&w=600'
                    title='Yo! Sushi'
                    rating={4.5}
                    genre='Japanese'
                    address='123 Main Street'
                    short_description='This is a description'
                    dishes={[]}
                    lng={20}
                    lat={20}
                />
            </ScrollView>
        </View>
    );
};



export default FeaturedRow;

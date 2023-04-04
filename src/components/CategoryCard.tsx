
import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

interface Props {
    imgUrl: any;
    title: string;

}

const CategoryCard: React.FC<Props> = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity>
            <Image source={{ uri: imgUrl }} className='h-20 w-20 rounded mx-1' />
            <Text className='absolute bottom-1 left-1 text-white font-bold'>{title}</Text>
        </TouchableOpacity>
    );
};



export default CategoryCard;

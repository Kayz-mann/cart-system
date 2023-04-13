import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface basketState {
    items: Array<string>
}

const initialState: basketState = {
    items: []
}



export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state: basketState, action: PayloadAction<any>) => {
            state.items = [...state.items, action.payload]

        },
        removeFromBasket: (state: any, action: PayloadAction<any>) => {
            const index = state.items.findIndex(
                (item: any) => item._id === action.payload._id
            );

            let newBasket = [...state.items];

            if (index >= 0) {
                // newBasket.filter((ind: number) => ind !== index)
                // newBasket.filter((_, i) => i !== index);
                newBasket.splice(index, 1)


                console.log('reduce', newBasket.filter((ind: number) => ind !== index));
            } else {
                console.warn(
                    `Can't remove product (id: ${action.payload._id}) as its not in basket`
                );
            }

            state.items = newBasket;
        },

    },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state: { basket: { items: any } }) => state.basket.items

export const selectBasketItemsWithId = (state: any, id: string) =>
    state.basket.items.filter((item: any) => item.id === id);


//sum of items in basket
export const selectBasketTotal = (state: any) => state.basket.items.reduce((total: any, item: any) =>
    total += item.price, 0);

export default basketSlice.reducer;
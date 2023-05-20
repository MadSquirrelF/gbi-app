import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product, SearchProductParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';


export const fetchProducts = createAsyncThunk<Product[], SearchProductParams>('product/fetchProductStatus', async (params) => {
  const { category, order, sortBy, search } = params;
  const { data } = await axios.get<Product[]>(`https://63f31aa3864fb1d6000f5375.mockapi.io/api/products`, {
    params: pickBy({
      category,
      sortBy,
      order,
      search
    }, identity,),
  });
  return data;
},
);
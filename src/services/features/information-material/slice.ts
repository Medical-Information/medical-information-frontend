import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TArticle } from 'utils/types/article';
import { getNextPageContent } from './api';
import { TGetInformationMaterialResponse } from './types';

type TSliceState = {
  articles: {
    storage: TArticle[];
    nextPage: string | null;
    isAllArticles: boolean;
  };
  news: {
    storage: TArticle[];
    nextPage: string | null;
    isAllNews: boolean;
  };
  process: {
    isLoading: boolean;
    error: string;
  };
};

const initialState: TSliceState = {
  articles: {
    storage: [],
    nextPage: '',
    isAllArticles: false,
  },
  news: {
    storage: [],
    nextPage: '',
    isAllNews: false,
  },
  process: {
    isLoading: false,
    error: '',
  },
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    getFirstPageArticles(
      state,
      action: PayloadAction<TGetInformationMaterialResponse>
    ) {
      state.articles.storage = action.payload.results;
      state.articles.nextPage = action.payload.next;
    },
    getFirstPageNews(
      state,
      action: PayloadAction<TGetInformationMaterialResponse>
    ) {
      state.news.storage = action.payload.results;
      state.news.nextPage = action.payload.next;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNextPageContent.pending, (state) => {
      state.process.isLoading = true;
    });
    builder.addCase(getNextPageContent.fulfilled, (state, action) => {
      const isNews = action.payload.results[0].tags.some(
        (item) => item.name === 'Новости'
      );

      if (isNews) {
        const data = action.payload.results;
        state.news.storage.push(...data);

        if (action.payload.next) {
          state.news.nextPage = action.payload.next;
        } else {
          state.news.isAllNews = true;
        }
      } else {
        const data = action.payload.results;
        state.articles.storage.push(...data);

        if (action.payload.next) {
          state.articles.nextPage = action.payload.next;
        } else {
          state.articles.isAllArticles = true;
        }
      }

      state.process.isLoading = false;
    });
    builder.addCase(getNextPageContent.rejected, (state, action) => {
      if (action.payload) {
        state.process.error = action.payload.detail;
        state.process.isLoading = false;
      }
    });
  },
});

export const { getFirstPageArticles, getFirstPageNews } = contentSlice.actions;
export default contentSlice.reducer;

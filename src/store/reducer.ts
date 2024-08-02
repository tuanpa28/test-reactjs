import { IFileItem } from '@/types/folder.type';
import { IAction, IState } from '@/types/store.type';
import { FILTER_MEMBER_FILES, SEARCH_FILES, SET_CACHE_LIST_FILE, SET_LIST_FILE } from './constants';

export const initState: IState = {
  listFile: [],
  cacheListFile: [],
  selectedFilters: {
    all: true,
    admin: false,
  },
  searchValue: '',
};

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case SET_LIST_FILE: {
      state.listFile = action.payload
        .filter((file: IFileItem) => {
          if (state.selectedFilters.all) return true;
          if (state.selectedFilters.admin && file.photo_by.toLowerCase() === 'admin') return true;
          return false;
        })
        .filter((file: IFileItem) => {
          return file.name.toLowerCase().includes(state.searchValue.toLowerCase());
        });
      return state;
    }

    case SET_CACHE_LIST_FILE: {
      state.cacheListFile = action.payload;
      return state;
    }

    case FILTER_MEMBER_FILES: {
      state.selectedFilters = action.payload;
      state.listFile = state.cacheListFile
        .filter((file: IFileItem) => {
          if (action.payload.all) return true;
          if (action.payload.admin && file.photo_by.toLowerCase() === 'admin') return true;
          return false;
        })
        .filter((file: IFileItem) => {
          return file.name.toLowerCase().includes(state.searchValue.toLowerCase());
        });
      return state;
    }

    case SEARCH_FILES: {
      state.searchValue = action.payload;
      state.listFile = state.cacheListFile
        .filter((file: IFileItem) => {
          return file.name.toLowerCase().includes(action.payload.toLowerCase());
        })
        .filter((file: IFileItem) => {
          if (state.selectedFilters.all) return true;
          if (state.selectedFilters.admin && file.photo_by.toLowerCase() === 'admin') return true;
          return false;
        });
      return state;
    }

    default:
      throw new Error('Invalid Action!');
  }
};

export default reducer;

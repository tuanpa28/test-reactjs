import { IFileItem } from '@/types/folder.type';
import { FILTER_MEMBER_FILES, SEARCH_FILES, SET_CACHE_LIST_FILE, SET_LIST_FILE } from './constants';
import { IFilterMemberFiles } from '@/types/store.type';

export const setListFile = (payload: IFileItem[]) => ({
  type: SET_LIST_FILE,
  payload,
});

export const setCacheListFile = (payload: IFileItem[]) => ({
  type: SET_CACHE_LIST_FILE,
  payload,
});

export const filterMemberFiles = (payload: IFilterMemberFiles) => ({
  type: FILTER_MEMBER_FILES,
  payload,
});

export const searchFiles = (payload: string) => ({
  type: SEARCH_FILES,
  payload,
});

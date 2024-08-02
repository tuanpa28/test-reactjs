import { IFileItem } from './folder.type';

export interface IFilterMemberFiles {
  all: boolean;
  admin: boolean;
}

export interface IState {
  listFile: IFileItem[];
  cacheListFile: IFileItem[];
  selectedFilters: IFilterMemberFiles;
  searchValue: string;
}

export interface IAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

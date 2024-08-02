export interface IFileItem {
  id: number;
  name: string;
  url: string;
  type: string;
  dimmension: string;
  size: string;
  photo_by: string;
}

export interface IFolderItem {
  id: number;
  name: string;
  children: (IFolderItem | IFileItem)[];
}

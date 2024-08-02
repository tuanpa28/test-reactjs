import { actions, useStore } from '@/store';
import { IFileItem, IFolderItem } from '@/types/folder.type';
import { useCallback } from 'react';

export const useFolderFiles = (structureData: IFolderItem[], defaultFolderId: number) => {
  const [, dispatch] = useStore();

  const findFilesFromFolder = useCallback(
    (folderId: number = defaultFolderId) => {
      const findFolderById = (folderId: number, data: IFolderItem[]): IFolderItem | undefined => {
        for (const item of data) {
          if (item.id === folderId) {
            return item;
          }
          if ('children' in item) { 
            const folder = findFolderById(folderId, item.children as IFolderItem[]);
            if (folder) {
              return folder;
            }
          }
        }
        return undefined;
      };

      const getAllFiles = (folder: IFolderItem): IFileItem[] => {
        let allFiles: IFileItem[] = [];
        for (const item of folder.children) {
          if ('url' in item) {
            allFiles.push(item);
          } else if ('children' in item) {
            allFiles = [...allFiles, ...getAllFiles(item as IFolderItem)];
          }
        }
        return allFiles;
      };

      const selectedFolder = findFolderById(folderId, structureData);
      const listFile = selectedFolder ? getAllFiles(selectedFolder) : [];
      dispatch(actions.setListFile(listFile));
      dispatch(actions.setCacheListFile(listFile));
    },
    [structureData, defaultFolderId, dispatch],
  );

  return { findFilesFromFolder };
};

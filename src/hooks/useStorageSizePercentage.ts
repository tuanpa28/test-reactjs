import { IFileItem, IFolderItem } from '@/types/folder.type';
import { useMemo } from 'react';

const calculateTotalSize = (folder: IFolderItem): number => {
  let totalSize = 0;

  const calculate = (item: IFolderItem | IFileItem) => {
    if ('children' in item) {
      item.children.forEach((child) => calculate(child as IFolderItem));
    } else if ('size' in item) {
      totalSize += Number(item.size);
    }
  };

  calculate(folder);
  return totalSize;
};

export const useStorageSizePercentage = (structureData: IFolderItem[]) => {
  const totalSize = useMemo(() => {
    return structureData.reduce(
      (accumulator, folder) => accumulator + calculateTotalSize(folder),
      0,
    );
  }, [structureData]);

  const sizeInBytes = 2 * 1024 * 1024 * 1024; // 2GB in bytes

  const percentageOf2GB = useMemo(() => {
    return (totalSize / sizeInBytes) * 100;
  }, [totalSize, sizeInBytes]);

  return { percentageOf2GB };
};

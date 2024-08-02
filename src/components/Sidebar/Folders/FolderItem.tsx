import { useFolderFiles } from '@/hooks';
import { IFileItem, IFolderItem } from '@/types/folder.type';
import { structureData } from '@/utils/structureData';
import { Fragment, useEffect, useState } from 'react';

type FolderItemProps = {
  folder: IFolderItem | IFileItem;
  isFirstItem?: boolean;
  onClick?: () => void;
};

const FolderItem = ({ folder, isFirstItem = false, onClick }: FolderItemProps) => {
  const [isOpened, setIsOpened] = useState(isFirstItem);
  const { findFilesFromFolder } = useFolderFiles(structureData, structureData[0].id);

  const handleFolderClick = (folderId: number) => {
    findFilesFromFolder(folderId);
  };

  const hasChildren = (item: IFolderItem | IFileItem): item is IFolderItem =>
    (item as IFolderItem).children !== undefined;

  const canExpand =
    hasChildren(folder) &&
    folder?.children.length > 0 &&
    folder?.children.filter((child: IFolderItem | IFileItem) => hasChildren(child)).length > 0;

  useEffect(() => {
    findFilesFromFolder();
  }, [findFilesFromFolder]);

  return (
    <div onClick={onClick}>
      <div
        className={`px-2 py-1.5 flex items-center justify-between cursor-pointer bg-transparent hover:bg-blue-100 rounded-md group`}
        onClick={() => {
          if (canExpand) {
            setIsOpened(!isOpened);
            handleFolderClick(folder.id);
          }
        }}
      >
        <div className='flex items-center'>
          <div className='flex items-center justify-center w-3 mr-3'>
            {hasChildren(folder) &&
              folder?.children &&
              (isOpened ? (
                <div className='w-0 h-0 border-l-[6px] border-solid border-l-transparent border-r-transparent border-b-[#333] group-hover:border-b-blue-600 border-r-[6px] border-b-[8px]' />
              ) : (
                <div className='w-0 h-0 border-t-[6px] border-solid border-t-transparent border-b-transparent border-l-[#ccc] group-hover:border-l-blue-600 border-b-[6px] border-l-[8px]' />
              ))}
          </div>
          <div>
            {isOpened ? (
              <svg
                className='text-[#333] group-hover:text-blue-600'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2' />
              </svg>
            ) : (
              <svg
                className='text-[#ccc] group-hover:text-blue-600'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z' />
                <path d='M2 10h20' />
              </svg>
            )}
          </div>
        </div>
        <div className='w-full ml-2 flex items-center justify-between'>
          <span className='text-base font-semibold text-[#333] group-hover:text-blue-600 select-none'>
            {folder.name}
          </span>
          <span className='bg-gray-300 group-hover:bg-blue-600 text-[#333] group-hover:text-[#fff] text-xs font-semibold px-1 rounded select-none'>
            {hasChildren(folder) ? folder?.children?.length : 0}
          </span>
        </div>
      </div>
      {canExpand && (
        <div className={`${isOpened ? '' : 'hidden'} ml-7`}>
          {folder.children.map((child: IFolderItem | IFileItem) => {
            if (hasChildren(child)) {
              return (
                <Fragment key={child.id}>
                  <FolderItem
                    folder={child}
                    isFirstItem={false}
                    onClick={() => handleFolderClick(child.id)}
                  />
                </Fragment>
              );
            } else {
              return (
                <Fragment key={child.id}>
                  <div
                    className={`px-2 py-1.5 cursor-pointer bg-transparent hover:bg-blue-100 rounded-md group`}
                  >
                    <div className='w-full'>
                      <span className='text-base font-semibold text-[#333] group-hover:text-blue-600 select-none'>
                        {child.name}
                      </span>
                    </div>
                  </div>
                </Fragment>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default FolderItem;

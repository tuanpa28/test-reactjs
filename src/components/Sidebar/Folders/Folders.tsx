import { Fragment, memo } from 'react';
import { structureData } from '@/utils/structureData';
import FolderItem from './FolderItem';
import { IFolderItem } from '@/types/folder.type';

const Folders = () => {
  return (
    <div className='border-b border-solid border-gray-200 pb-4 mb-4 flex flex-col flex-1 min-h-full'>
      <div className='flex items-center justify-between text-sm font-normal text-[#aaa] mb-2'>
        <span>Folders</span>
        <a href='#' className='hover:cursor-pointer underline hover:text-[#333]'>
          New folder
        </a>
      </div>
      <div className='flex-1 overflow-y-auto scroll-custom'>
        {structureData.map((folder: IFolderItem, index: number) => {
          return (
            <Fragment key={folder.id}>
              <FolderItem folder={folder} isFirstItem={index === 0} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Folders);

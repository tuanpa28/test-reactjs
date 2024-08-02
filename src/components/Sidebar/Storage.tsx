import { useStorageSizePercentage } from '@/hooks';
import { structureData } from '@/utils/structureData';

const Storage = () => {
  const { percentageOf2GB } = useStorageSizePercentage(structureData);

  return (
    <div className='border-b border-solid border-gray-200 pb-4 mb-4'>
      <div className='flex items-center justify-between text-sm font-normal text-[#aaa] mb-2'>
        <span>Storage</span>
        <a href='#' className='hover:cursor-pointer underline hover:text-[#333]'>
          Change plan
        </a>
      </div>
      <div className='w-full bg-gray-200 rounded-full h-2.5 mb-2 overflow-hidden'>
        <div
          className='bg-blue-600 h-2.5 rounded-full'
          style={{ width: `${percentageOf2GB.toFixed(2)}%` }}
        ></div>
      </div>
      <div className='text-base font-medium text-[#333]'>
        <span className='text-blue-600'>{percentageOf2GB.toFixed(2)}%</span> used of 2GB
      </div>
    </div>
  );
};

export default Storage;

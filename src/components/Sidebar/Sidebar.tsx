import { actions, useStore } from '@/store';
import { ChangeEvent, useEffect, useState } from 'react';
import Folders from './Folders';
import Search from './Search';
import Storage from './Storage';

const Sidebar = () => {
  const [state, dispatch] = useStore();
  const [selectedFilters, setSelectedFilters] = useState(state.selectedFilters);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [value]: checked,
    }));
  };

  useEffect(() => {
    dispatch(actions.filterMemberFiles(selectedFilters));
  }, [selectedFilters, dispatch]);

  return (
    <aside className='w-72 p-6 border-r-[2px] border-solid border-gray-200 h-full flex flex-col min-h-[calc(100vh-68px)] max-h-[calc(100vh-68px)]'>
      <div className='border-b border-solid border-gray-200 pb-4 mb-4'>
        <button
          type='button'
          className='w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-5 py-3 focus:outline-none'
        >
          Import documents
        </button>
      </div>

      <Storage />

      <Search />

      <Folders />

      <div>
        <div className='flex items-center justify-between text-sm font-normal text-[#aaa] mb-2'>
          <span>Members</span>
          <a href='#' className='hover:cursor-pointer underline hover:text-[#333]'>
            Select all
          </a>
        </div>
        <div>
          <div className='flex items-center mb-2'>
            <input
              checked={selectedFilters.all}
              onChange={handleCheckboxChange}
              type='checkbox'
              value='all'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer'
            />
            <label htmlFor='all-checkbox' className='ms-2 text-sm font-medium text-[#333]'>
              All
            </label>
          </div>
          <div className='flex items-center'>
            <input
              checked={selectedFilters.admin}
              onChange={handleCheckboxChange}
              type='checkbox'
              value='admin'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer'
            />
            <label htmlFor='admin-checkbox' className='ms-2 text-sm font-medium text-[#333]'>
              Admin
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

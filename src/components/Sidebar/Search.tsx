import { useDebounce } from '@/hooks';
import { actions, useStore } from '@/store';
import { useEffect, useState } from 'react';

const Search = () => {
  const [state, dispatch] = useStore();
  const [searchValue, setSearchValue] = useState<string>(state.searchValue);

  const debouncedValue = useDebounce(searchValue, 600);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  useEffect(() => {
    dispatch(actions.searchFiles(debouncedValue.trim()));
  }, [debouncedValue, dispatch]);

  return (
    <div className='border-b border-solid border-gray-200 pb-4 mb-4'>
      <span className='block text-sm font-normal text-[#aaa] mb-2'>Search</span>
      <div className='relative'>
        <input
          type='text'
          value={searchValue}
          spellCheck={false}
          onChange={handleChangeInput}
          className='block w-full p-3 pe-8 text-sm text-[#333] rounded-lg border border-solid border-[#ccc] outline-none'
          placeholder='e.g.image.png'
        />
        <div className='absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none'>
          <svg
            className='w-4 h-4 text-[#ccc]'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 20'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Search;

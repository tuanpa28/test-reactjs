import { useStore } from '@/store';
import { IFileItem } from '@/types/folder.type';

const ListDocument = () => {
  const [state] = useStore();
  const { listFile } = state;

  return (
    <div className='w-[calc(100%-288px)] py-4 h-full max-h-[calc(100vh-68px)] overflow-auto scroll-custom'>
      <div className=''>
        <table className='w-full text-sm text-left text-[#000]'>
          <thead className='text-sm text-[#ccc]'>
            <tr>
              <th scope='col' className='py-6 pl-10 pr-4 w-[5%]'>
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer'
                  />
                </div>
              </th>
              <th scope='col' className='px-4 py-6 w-[35%]'>
                <div>Select all</div>
              </th>
              <th scope='col' className='px-4 py-6 w-[20%]'>
                <div className='flex items-center'>
                  Name
                  <a href='#'>
                    <svg
                      className='w-3 h-3 ms-1.5'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z' />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope='col' className='px-4 py-6 w-[20%]'>
                <div className='flex items-center'>
                  Dimmension
                  <a href='#'>
                    <svg
                      className='w-3 h-3 ms-1.5'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z' />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope='col' className='px-4 py-6 w-[20%]'>
                <div className='flex items-center'>
                  Size
                  <a href='#'>
                    <svg
                      className='w-3 h-3 ms-1.5'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z' />
                    </svg>
                  </a>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {listFile?.map((fileItem: IFileItem, index: number) => {
              return (
                <tr key={index} className='bg-white hover:bg-gray-50'>
                  <td className='w-4 p-4 pl-10'>
                    <div className='flex items-center'>
                      <input
                        type='checkbox'
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer'
                      />
                    </div>
                  </td>
                  <td className='px-4 py-3'>
                    <div className='relative group w-52 h-24 rounded-lg cursor-pointer'>
                      <img
                        src={fileItem.url}
                        className='w-full h-full rounded-lg shadow-[0_2px_4px_0px_rgba(0,0,0,0.4)] object-cover'
                        alt=''
                      />
                      <div className='group-hover:opacity-100 opacity-0 absolute z-10 inset-0 flex items-center justify-center rounded-lg bg-[rgba(29,78,216,0.5)] transition-opacity'>
                        <button className='px-4 py-2 rounded-3xl flex gap-2 items-center justify-center text-base text-[#fff] font-normal bg-[rgba(255,255,255,0.3)]'>
                          Enlarge
                          <svg
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
                            <polyline points='15 3 21 3 21 9' />
                            <polyline points='9 21 3 21 3 15' />
                            <line x1='21' x2='14' y1='3' y2='10' />
                            <line x1='3' x2='10' y1='21' y2='14' />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className='px-4 py-3'>
                    <a
                      href={fileItem.url}
                      target='_blank'
                      className='hover:cursor-pointer hover:underline'
                    >
                      {fileItem.name}
                    </a>
                  </td>
                  <td className='px-4 py-3'>{fileItem.dimmension}</td>
                  <td className='px-4 py-3'>{(Number(fileItem.size) / 1024).toFixed(2)} KB</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListDocument;

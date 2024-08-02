import ListDocument from './components/ListDocument';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='p-8 bg-gray-50'>
      <div className='w-full max-w-screen-xl h-fit flex justify-center mx-auto border-[2px] border-solid border-gray-200 rounded-lg shadow-[0_4px_8px_0px_rgba(0,0,0,0.2)] bg-white'>
        <Sidebar />
        <ListDocument />
      </div>
    </div>
  );
}

export default App;

import Logo from '../images/logo.jpg';
const Dashboard = () => {
  return (
    <>
    <div className="container-fluid mx-auto px-4 border p-3 flex">
    <img src={Logo} alt="logo" width="5%" />
      <ul className='flex pt-5'>
        <li className='pr-6'>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    
    </div>
   </>
  );
};

export default Dashboard;

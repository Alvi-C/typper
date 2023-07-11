import logo from '../assets/logo.png';

const Header = (props) => {
  const { title } = props;
    return (
      <div className='flex relative mt-14 justify-center'>
        <h1 className='font-Poppins text-5xl font-bold mr-5'>
          {title}
        </h1>
        <img
          className='w-12 absolute bottom-7 left-[750px]'
          src={logo}
          alt='logo'
        />
      </div>
    )
}

export default Header;
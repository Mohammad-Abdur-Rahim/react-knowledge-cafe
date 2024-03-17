import profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <div className='flex justify-between items-center p-10 mx-10 border-b-2'>
            <h1 className="text-5xl font-semibold ">Knowledge cafe React Project</h1>
            <img src={profile} alt="img" />
        </div>
    );
};

export default Header;
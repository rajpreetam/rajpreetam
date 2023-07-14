import MenuItem from './MenuItem';

const menuItemList = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Portfolio',
        link: '/portfolio'
    },
    {
        name: 'Contact',
        link: '/contact'
    },
    {
        name: 'Categories',
        link: '/categories'
    },
    {
        name: 'Tags',
        link: '/tags'
    }
];

const SideBarMenu = () => {
    return (
        <div className='flex flex-col pt-10 space-y-8'>
            {menuItemList.map(item => (
                <MenuItem
                    key={item.name}
                    name={item.name}
                    link={item.link}
                />
            ))}
        </div>
    );
};

export default SideBarMenu;
import MenuBanner from "./MenuBanner";
import MenuList from "./MenuList";
import Photos from '../Home file/Photos'
import Drinks from "./Drinks";
import Contacts from '../Home file/Contacts'



const Menu = () => {
    return (
        <div className=" ">
             
            <MenuBanner></MenuBanner> 
            <MenuList></MenuList>
            <Photos></Photos>
            <Drinks></Drinks>
            <Contacts></Contacts>
            
        </div>
    );
};

export default Menu;
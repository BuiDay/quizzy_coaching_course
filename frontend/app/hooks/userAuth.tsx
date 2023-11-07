import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';


const UserAuth = () => {

    const user = useSelector((state:RootState)=>state.auth.user);
    console.log(user)
    if(user){
        return true;
    }
    else{
        return false
    }
};

export default UserAuth;
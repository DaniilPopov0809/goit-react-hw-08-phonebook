import defaultAvatart from '../../image/default_avatar.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../../redux/auth/auth-selectors';
import  authOperations  from '../../redux/auth/auth-operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  console.log("🚀 ~ file: UserMenu.jsx:9 ~ UserMenu ~ name:", name)
  const avatar = defaultAvatart;
  return (
    <div>
      <img src={avatar} alt="avatar" width={32} />
      <span>Welcome, {name}</span>
      <button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >Logout</button>
    </div>
  );
};

export default UserMenu;

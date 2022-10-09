import css from './Header.module.css';
import {useSelector} from "react-redux";

export function Header() {

    const {currentUser} = useSelector(state => state.userReducer);

    return(
        <div className={css.Header}>
            {currentUser && currentUser.name}
        </div>
    )

}
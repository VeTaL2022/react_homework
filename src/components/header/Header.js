import css from './Header.module.css';
import {useSelector} from "react-redux";

export function Header() {

    const {currentUser} = useSelector(state => state.userReducer);
    const {currentPost} = useSelector(state => state.postReducer);

    return (
        <div className={css.Header}>
            <span>
                {currentUser && currentUser.name}
            </span>
            <span>
                {currentPost && currentPost.title}
            </span>
        </div>
    )

}
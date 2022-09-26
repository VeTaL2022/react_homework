import css from './Album.module.css'

export default function Album({item:album}) {

    return(
        <div className={css.Album}>
            <p>userId: {album.userId}</p>
            <p>id: {album.id}</p>
            <p>title: {album.title}</p>
        </div>
    )

}
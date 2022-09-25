export default function Album({item:album}) {

    return(
        <div>
            <hr/>
            {/*{JSON.stringify(album)}*/}
            <p>userId: {album.userId}</p>
            <p>id: {album.id}</p>
            <p>title: {album.title}</p>
            <hr/>
        </div>
    )

}
import {useEffect, useState} from "react";

import {albumService} from "../../services/album-service/album.service";
import Album from "./Album";

export default function Albums() {

    let [albums,setAlbums] = useState([]);

    useEffect(() => {
        albumService.getAlbum().then(value => setAlbums(value.data));
    },[])
    return(
        <div>
            {albums.map((album,index) => (<Album item={album} key={index}/>))}
        </div>
    )

}
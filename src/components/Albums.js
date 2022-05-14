import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

function Albums() {

    const [albums, setAlbums] = useState([]);
    let { url, path } = useRouteMatch();
    
    useEffect(() => {
        getAlbums();
    }, [])

    const getAlbums = async () => {
        const alb = await fetch(`https://jsonplaceholder.typicode.com/albums`);
        const allAlbums = await alb.json();
        setAlbums(allAlbums.sort((a, b) => a.title > b.title ? 1 : -1));
    }

    return (
        <div class="center row">
            <div class="col-10">
                <ul>
                    {albums.map((album, index) => <li class="list-group-item list-group-item-action" id="list-home-list" data-bs-toggle="list" role="tab" aria-controls="list-home">
                        <PhotoLibraryIcon />
                        <Link class="link" to={{
                        pathname: `${url}/${album.id}/Photos`,
                        state: album
                    }}>
                        {album.title}
                    </Link></li>)}
                </ul>
            </div>
        </div>
    )
}

export default Albums;
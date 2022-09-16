export default function SpaceX({item:space}) {

    return (<div className='spaceChild'>
        <h3>mission_name: {space.mission_name}</h3>
        <h4>launch_year: {space.launch_year}</h4>
        <img src={space.links.mission_patch_small} alt="mission_path_small"/>
    </div>);
}

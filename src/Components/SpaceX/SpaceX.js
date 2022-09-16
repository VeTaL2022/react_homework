export default function SpaceX({item:space}) {

    return (<div>
        <h2>{space.flight_number} - {space.mission_name}</h2>
    </div>);
}

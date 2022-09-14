export default function RickMortyMain(props){
    let {item:value} = props;
    return(
        <div>
            <h2>{value.id} - {value.name}</h2>
            <h4>Status: {value.status}</h4>
            <h4>Gender: {value.gender}</h4>
            <h4>Species: {value.species}</h4>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={value.image} alt="character"/>
        </div>
    )
}
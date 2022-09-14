export default function Simpson(props) {
    let {item:simpson} = props;
    return (
        <div>
            <h2>{simpson.name} {simpson.surname}</h2>
            <h3>{simpson.age}</h3>
            <p>{simpson.info}</p>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={simpson.photo} alt="photo"/>
        </div>);
}
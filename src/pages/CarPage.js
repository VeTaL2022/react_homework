import {CarForm, Cars} from "../components";
import {useEffect, useState} from "react";
import {carService} from "../services";
import {useSearchParams} from "react-router-dom";

export function CarPage() {
    const [cars, setCars] = useState([]);

    const [prev, setPrev] = useState(null);
    const [next, setNext] = useState(null);

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        carService.getCar(query.get('page')).then(({data: response}) => {
            setCars(response.data)
            setPrev(response.prev)
            setNext(response.next)
        })
    }, [query]);

    const Prev = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    }
    const Next = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    }

    return (
        <div>
            <CarForm setCars={setCars}/>
            <hr/>
            <Cars cars={cars} setCars={setCars}/>
            <button disabled={!prev} onClick={Prev}>Prev</button>
            <button disabled={!next} onClick={Next}>Next</button>
        </div>
    )

}
import {useContext} from "react";
import {MyContext} from "../../index";

export function AboutPage() {
    let context = useContext(MyContext);
    return(
        <div>
            AboutPage
            <h2>{context.name}</h2>
            <h2>{context.age}</h2>
            {context.post && <p>{JSON.stringify(context.post)}</p>}
        </div>
    )

}
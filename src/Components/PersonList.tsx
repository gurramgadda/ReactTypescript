import { Person } from "./Person"

type PersonListProps = {
    names: {
        first: string
        last: string
    }[]
}
export const PersonList = (props: PersonListProps) => {
    return(
        <ul>
            {props.names.map((name) => {
                return <Person>{`${name.first} ${name.last}`}</Person>
            })}
        </ul>
    );
}
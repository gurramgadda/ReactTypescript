type PersonProps = {
    name?: {
        firstName: string
        lastName: string
    }
    children: string
}

export const Person = (props: PersonProps) => {
    return(
        <h2>{props.children}</h2>
    );
}
type GreetingProps = {
    name: string
    language: string
    isLoggedIn: boolean
}

function Greetings(props: GreetingProps) {
    return(
        <div>
            <h1>{props.isLoggedIn ? `Hello ${props.name}, Welcome to ${props.language} tutorial` : 'Welcome Guest'}</h1>
        </div>
    );
}

export default Greetings;
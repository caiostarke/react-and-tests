type GreetingProps = {
    name?: string
}

const Greeting = (props: GreetingProps) => {
  return (
    <div>
        <h1>Hello { props.name }</h1>
    </div>
  )
}

export default Greeting

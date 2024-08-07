import React from 'react'
import { useEffect } from 'react'

function Effect() {
    const [resourceType, setResourceType] = useEffect("posts")

    // useEffect não pode ser uma função assincrona 'async'
    useEffect(() => {
        const fetchResource = async () => {
            const response = await fetch()
            // Caso queira usar o async await tem que criar uma função e chamar ela dentro
        }
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => console.json())
    }, [resourceType])
    // Se passarmos um useEffect sem uma lista ele vai ser execultado sempre que o componente se atualizado e se for passado com uma lista ele vai ser atualizado sempre que alguns dos valores que passar nessa lista for alterado (Nesse caso o [resurceType]

    useEffect(()=> {
        // componentDidMount
        console.log("componentDidMount")
        // componentWillUnmount
        return () =>{
            console.log("componentWillUnmount")
        }
    }, [])



    const chanceResourceType = (resourceType) => {
        setResourceType(resourceType)
    }

  return (
    <div>
      
    </div>
  )
}

export default Effect

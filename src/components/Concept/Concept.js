function Concept(prop){
    return(
        <li className="concept">
            <img src={prop.concept.image} alt={prop.concept.title} />
            <h2>{prop.concept.title}</h2>
            <p>{prop.concept.description}</p>
        </li>
    )
}

export default Concept
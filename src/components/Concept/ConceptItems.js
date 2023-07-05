import Concept from "./Concept";

function ConceptItems(props) {
    return (
        <ul id="concepts">
            {props.concepts.map(concept =>{
                return <Concept concept={concept} key={concept.id}/>
            })}
        </ul>
    )
}

export default ConceptItems
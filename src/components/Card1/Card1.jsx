import Square from "./Square"
import Heading from "./Heading"
import Paragraph from "./Paragraph"

function Card1() {
    return (<div style={{backgroundColor: "white", color: "black", padding: "30px", borderRadius: "20px", width: "450px"}}>
        <div style={{display: "flex", justifyContent: "center", gap: "40px"}}>
            <Square />
            <Square />
            <Square />
        </div>
        <Heading />
        <Paragraph />

    </div>)
}

export default Card1
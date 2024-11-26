import Button from "./Button"
import Heading from "./Heading"
import Text from "./Text"

function Card2() {
    return (
    <div style={{backgroundColor: "white", color: "black", padding: "20px", borderRadius: "20px", width: "fit-content"}}>
        <div className="title" style={{display: "flex", flexDirection: "column", gap: "2px", margin: "0px", justifySelf: "left", alignSelf: "flex-start"}}>
            <p style={{fontFamily: "monospace", fontSize: "24px", color: "gray", fontWeight: "100", margin: 0, textAlign: "left"}}>Part &#8544;</p>
            <Heading headingText="Headline"/>
        </div>
        <Text text1="Please add your content here." text2="Keep it short and simple.And" text3="smile :)"/>
        <div className="btns" style={{display: "flex", justifySelf: "flex-end", gap: "10px"}}>
            <Button bgColor="white" color="gray">Button 2</Button>
            <Button bgColor="#3C3C43" color="white">Button 1</Button>
        </div>
    </div>)
}

export default Card2
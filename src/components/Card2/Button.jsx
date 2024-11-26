function Button(props) {
    return (<>
        <button style={{fontFamily: "monospace", fontSize: "18px", backgroundColor: `${props.bgColor}`, color: `${props.color}`, outlineStyle: "solid", borderRadius: "30px"}}>{props.children}</button>
    </>)
}

export default Button
function RedSquare() {
    return(
        <div style = {{
            width: '100px',
            height: '100px',
            borderColor: 'red',
            backgroundColor: 'red',
            border: '2px solid black',
            display: 'inline-block',
            marginRight: '10px'
        }} />
    )
}

function OrangeSquare() {
    return(
        <div style = {{
            width: '100px',
            height: '100px',
            borderColor: 'orange',
            backgroundColor: 'orange',
            border: '2px solid black',
            display: 'inline-block',
            marginRight: '10px'
        }} />
    )
}

function BlueSquare() {
    return(
        <div style = {{
            width: '100px',
            height: '100px',
            borderColor: 'blue',
            backgroundColor: 'blue',
            border: '2px solid black',
            display: 'inline-block',
            marginRight: '10px'
        }} />
    )
}

export { RedSquare, OrangeSquare, BlueSquare };
import React from "react"

var d = new Date()
var year = d.getFullYear()

function Footer(){
    return(
        <footer className="footer">Copyright {year}</footer>
    )
}

export default Footer
import React from 'react'
import luffyError from "../assets/images/luffyError.jpg"

function ErrorPage() {
  return (
    <div className="containerError">
        <img src={luffyError} alt="errorPage" />
    </div>
  )
}

export default ErrorPage
import React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

export default function MyRoute({ element: ElementToRender, ...rest }) {
  return (
    <Route {...rest} render={(props => {
      return <ElementToRender {...props} />
    })} />
  )
}

import React from "react"
import "../src/assets/styles/globals.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [(Story) => <Story />]

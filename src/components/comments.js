import React, { useEffect } from "react"

const Comments = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://utteranc.es/client.js"
    script.async = true
    script.crossOrigin = "anonymous"
    script.setAttribute("repo", "heckoubou/morningatelier")
    script.setAttribute("issue-term", "pathname")
    script.setAttribute("theme", "github-light")
    document.getElementById("comments").appendChild(script)
  }, [])

  return <div id="comments"></div>
}

export default Comments

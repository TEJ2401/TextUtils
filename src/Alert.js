import React from 'react'

function Alert({alert}) {
  return (
    <div style={{height:"75px"}}>
    {alert && <div>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{alert.type}</strong> {alert.msg}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>}
    </div>
  )
}

export default Alert

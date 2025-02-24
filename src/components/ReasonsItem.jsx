/* eslint-disable react/prop-types */
const ReasonsItem = ({reason}) => {
  return (
    <div className="reason-item">
    <h2 className="reason-item-title">{reason.title}</h2>
    <p className="reason-item-description">{reason.description}</p>
  </div>
  )
}

export default ReasonsItem

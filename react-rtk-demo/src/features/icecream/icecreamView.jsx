import { useSelector } from "react-redux"

export const IcecreamView = () => {
  const numOfIceCreams = useSelector((state) => state.icecream.numOfIcecreams)
  return (
    <div>
        <h2>Number of icrCreams- {numOfIceCreams}</h2>
        <button>Order Cake</button>
        <button>Restock Cakes</button>
    </div>
  )
}

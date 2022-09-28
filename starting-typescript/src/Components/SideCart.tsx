import { VscChromeClose } from "react-icons/vsc";
import AddedTo from "./AddedTo";

const SideCart = () => {
    return (
        <div className="flex flex-col justify-between items-center absolute right-0 min-h-screen w-[25%] border-[1px] border-[red]">
        <div className="flex justify-around w-full">
          <h1 className="text-[1.3rem]">Inside Cart</h1>
          <VscChromeClose size={28}/>
        </div>
        <AddedTo />
        <AddedTo />
        <AddedTo />
        <AddedTo />
        <AddedTo />
        <AddedTo />
        <AddedTo />
        <AddedTo />
      </div>
    )
}

export default SideCart
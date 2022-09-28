import { VscChromeClose } from "react-icons/vsc";
import AddedTo from "./AddedTo";

const SideCart = () => {
    return (
        <div className="flex-col justify-between items-center absolute right-0 overflow-y-scroll h-screen w-[25%] border-[1px] border-[red]">
        <div className="flex items-center h-[10vh] flex justify-around w-full">
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
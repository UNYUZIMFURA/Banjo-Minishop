import {IoCloseCircleOutline} from "react-icons/io5"

const AddedTo = () => {
  return (
    <div className="flex justify-between w-full h-[25vh] mt-[1rem] bg-[#E8E8E8]">
      <div className="bg-[green] h-full w-[55%] flex flex-col justify-evenly">
        <div className="h-[70%] bg-[red]">{/* <img src={} /> */}</div>
        <div className="flex w-full justify-around">
          <h1>Book</h1>
          <h1>Book</h1>
        </div>
      </div>
      <div className="h-full w-[30%] bg-[cyan] flex flex-col justify-center ">
        <h1>Quantity: 2</h1>
        <h2>Total $30 </h2>
      </div>
      <div className="h-full w-[15%] bg-[cyan] flex flex-col">
      </div>
    </div>
  );
};

export default AddedTo;

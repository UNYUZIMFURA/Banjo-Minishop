interface Props {
img: string
}

const Product:React.FC<Props> = ({img}) => {
return (
    <div className="h-[50vh] w-[30%] border-[1px] border-[yellow] flex flex-col">
<div className="h-1/2 w-full">
    <img src={img} className="object-cover h-full w-full cursor-pointer" alt=""/>
</div>
<div className="flex flex-col justify-around h-1/2 w-full">
    <div className="flex justify-around">
        <h1>Book</h1>
        <h2>$10</h2>
    </div>
    <button className="bg-[blue] text-[#fff] rounded-[3px] h-[3rem] cursor-pointer outline-none">Add To Cart</button>
</div>
    </div>
)
}

export default Product
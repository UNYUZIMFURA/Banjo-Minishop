interface Props {
img: string
}

const Product:React.FC<Props> = ({img}) => {
return (
    <div className="h-[50vh] w-[30%] border-[1px] border-[yellow] flex flex-col">
<div className="h-1/2 w-full">
    <img src={img} className="object-cover h-full w-full" alt=""/>
</div>
<div className="flex h-1/2 w-full"></div>
    </div>
)
}

export default Product
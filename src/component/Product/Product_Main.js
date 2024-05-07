import Welcome from '../../img/Product_Main/Welcome.jpg'
export default function Product_Main(){
    return(
        <div className='flex flex-col'>
            <img src={Welcome} alt="" className='border-b-[1px]'/>
        </div>
    )
}
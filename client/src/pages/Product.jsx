import React, { useEffect, useState } from 'react'
import SummaryApi from '../common/SummaryApi'
import AxiosToastError from '../utils/AxiosToastError'
import Axios from '../utils/Axios'
import CardProduct from '../components/CardProduct'
import Loading from '../components/Loading'
import NoData from '../components/NoData'

const Product = () => {
  const [productData,setProductData] = useState([])
  const [page,setPage] = useState(1)
  const [loading,setLoading] = useState(false)
  
  const fetchProductData = async()=>{
    try {
        setLoading(true)
        const response = await Axios({
           ...SummaryApi.getProduct,
           data : {
              page : page,
           }
        })

        const { data : responseData } = response 

        console.log("product page ",responseData)
        if(responseData.success){
          
          setProductData(responseData.data)
        }

    } catch (error) {
      AxiosToastError(error)
    }finally{
      setLoading(false)
    }
  }
  
  console.log("product page")
  useEffect(()=>{
    fetchProductData()
  },[])

  return (
    <section className='bg-white'>
      <div className='container mx-auto px-4'>
        <div className='min-h-[78vh]'>
          <div className='font-semibold'>
            <h2 className='text-lg lg:text-xl font-semibold py-2'>All Products</h2>
          </div>
          {
            loading && (
              <Loading/>
            )
          }
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {
              productData.map((product,index)=>{
                return(
                  <CardProduct data={product} key={product._id+"product"+index}/>
                )
              })
            }
          </div>
          {
            !productData[0] && !loading && (
              <NoData/>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Product

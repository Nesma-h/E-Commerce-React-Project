import React, { useContext, useEffect } from 'react'
import './Compare.style.css'
import PageHeader from '../../common/PageHeader/PageHeader'
import { CompareContext } from '../../context/CompareContext'
import { AuthContext } from '../../context/AuthContext'

function Compare() {
  const { compareList, getCompareList,addToCompareList } = useContext(CompareContext)
  const { curUser } = useContext(AuthContext)

  useEffect(() => {
    getCompareList()
  }, [curUser])

  return (
    <>
      <PageHeader title={'Compare List'} />
      {curUser ? (
      <div className='xl:px-32 md:px-24 sm:px-20 px-6 py-8 compare'>
        <div className='compare-wrapper bg-white rounded-lg shadow overflow-hidden'>
          <div className='compare-head px-4 sm:px-6 py-4 border-b border-gray-200 flex items-center justify-between'>
            <h2 className='font-bold text-lg'>Compare Products</h2>
            <span className='text-sm text-gray-500'>{compareList.length} items</span>
          </div>
          {compareList.length === 0 ? (
            <div className='p-6 text-center text-gray-500'>No products in compare list.</div>
          ) : (
          <div className='compare-grid' style={{ gridTemplateColumns: `160px repeat(${compareList.length}, minmax(220px, 1fr))` }}>
            <div className='compare-attr'>
              <div className='attr'>Image</div>
              <div className='attr'>Title</div>
              <div className='attr'>Price</div>
              <div className='attr'>Rating</div>
              <div className='attr'>Brand</div>
              <div className='attr'>Availability</div>
              <div className='attr'>Description</div>
              <div className='attr'>Actions</div>
            </div>

            {compareList.map((p) => (
              <div className='compare-col' key={p.id}>
                <div className='val center p-3'>
                  <img src={p.image} alt={p.title} className='h-[140px] w-auto object-contain' />
                </div>
                <div className='val p-3 font-medium'>{p.title}</div>
                <div className='val p-3 text-[var(--main-color)] font-semibold'>${p.price.toFixed(2)}</div>
                <div className='val p-3'>
                  <div className='stars'>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < p.rating ? 'on' : 'off'}>★</span>
                    ))}
                  </div>
                </div>
                <div className='val p-3'>{p.brand || '-'}</div>
                <div className='val p-3'>
                  <span className={`badge ${p.stock === 'In Stock' ? 'ok' : 'warn'}`}>{p.stock || 'In Stock'}</span>
                </div>
                <div className='val p-3 text-sm text-gray-600'>{p.desc || '-'}</div>
                <div className='val p-3'>
                  <div className='flex gap-2'>
                    <button className='btn-main'>Add to Cart</button>
                    <button className='btn-ghost' onClick={()=>addToCompareList(p,'delete')}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </div>
      ):(
        <div className="py-5 px-5 border border-red-900 bg-red-300 text-red-900 text-center rounded">
          You must be registered to see this page !!
        </div>
      )
      }
    </>
  )
}

export default Compare



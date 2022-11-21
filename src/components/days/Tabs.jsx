import React from 'react'
import '../days/days.scss'



const Tabs = (props) => {
    const tabs = [
        {
            value: 'На неделю'
        },
        {
            value: 'На месяц'
        },
        {
            value: 'На 10 дней'
        }
    ]
    return (
        <div className='tabs' >
            <div className='tabs-wrapper' >
                {tabs.map((tab, index) => (
                    <button className='tab' >
                        {tab.value}
                    
                    </button>
                ))}
            </div>
            <button className='cancel'>Отменить</button>
        </div>
    )
}
export default Tabs
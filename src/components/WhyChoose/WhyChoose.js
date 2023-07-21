import React from 'react'
import WhyChooseHeading from './WhyChooseHeading'
import team from '../../assets/icons/team.svg'
import time from '../../assets/icons/time.svg'
import support from '../../assets/icons/support.svg'
import equipment from '../../assets/icons/equipment.svg'
import guaranty from '../../assets/icons/guaranty.svg'
import delivery from '../../assets/icons/delivery.svg'
import Choose from './Choose'

const whyChoose = [
    {
        id: 1,
        name: 'Expert Team',
        img: team,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
    },
    {
        id: 2,
        name: 'Timely Delivery',
        img: time,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
    },
    {
        id: 3,
        name: '24/7 Support',
        img: support,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
    },
    {
        id: 5,
        name: '100% Guaranty',
        img: guaranty,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,"
    },
]

const WhyChoose = () => {
    return (
        <section className='container mx-auto mb-10'>
            <WhyChooseHeading />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    whyChoose.map(choose => (
                        <Choose key={ choose.id } choose={ choose } />
                    ))
                }
            </div>
        </section>
    )
}

export default WhyChoose
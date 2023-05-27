import React from 'react'
import { Link } from 'react-router-dom';

export default function Article({ flags, name, population, region, subregion }) {
    return (
        <>
            <Link to={`/${name.common}`}>
            <article className='bg-white rounded-lg overflow-hidden outline'>
                <img src={flags.svg} alt="" className='md= h-72 w-full object-cover'></img>
                <div className='p-4'>
                    <h2 className='font-bold text-lg text-gray-1000 mb-2'>{name.common}</h2>
                    <ul className='flex flex-col item-starts justify-start gap-2'>
                        <li>Population: {population.toLocaleString()}</li>
                        <li>Region: {region}</li>
                        <li>Subregion: {subregion}</li>
                    </ul>
                </div>
            </article>
            </Link>
        </>
    );
}

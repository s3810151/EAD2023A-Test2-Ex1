import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleCountry() {
    const [country, setCountry] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        const getSingleCountry = async () => {
            try {
                const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
                const data = await res.json();
                setCountry(data);
            } catch (error) {
                console.error(error);
            }
        };
        getSingleCountry();
    }, [name]);

    useEffect(() => {
        document.title = `${name}`;
    }, [name]);

    return (
        <>
            <section className="p-8 md:py-0 max-w-3xl mx-auto">
                {country.map((item) => (
                    <div
                        key={item.population}
                        className=" gap-8 md:place-items-center md:h-screen"
                    >
                        <article>
                            <img src={item.flags.svg} alt={item.name.common} className="p-4 md:place-items-center md:h-center" />
                        </article>

                        <div className='bg-white p-5'>
                            <article>
                                <h1 className="mb-8 font-bold  lg:text-6xl">
                                    {item.name.official}
                                </h1>

                                <ul className="my-4 flex flex-col items-start justify-start gap-2">
                                    <li>Capital: {item.capital[0]}</li>
                                    <li>Population: {item.population.toLocaleString()}</li>
                                    <li>Region: {item.region}</li>
                                    <li>Subregion: {item.subregion}</li>
                                    <li>Currencies: </li>
                                </ul>

                                {item.borders && (
                                    <>
                                        <h3 className="text-gray-900 font-bold text-lg mb-2">
                                            Borders:
                                        </h3>
                                        <ul className="flex flex-wrap items-start justify-start gap-2">
                                            {item.borders.map((border, index) => (
                                                <li
                                                    key={index}
                                                    className="bg-gray-200 p-2 rounded text-xs tracking-wide"
                                                >
                                                    {border}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                <Link
                                    to="/"
                                    className="inline-block mt-5  py-2 px-6 rounded shadow transition-all duration-200 bg-gray-800 hover:bg-gray-700 text-white"
                                >
                                    &larr; Back
                                </Link>
                            </article>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}

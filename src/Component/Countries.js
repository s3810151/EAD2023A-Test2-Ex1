import { useState, useEffect } from "react"
import Article from "./Article"



export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [searchText, setSearchText] = useState("");

    const regions = [
        {
            name: "Europe"
        },
        {
            name: "Europe"
        },
        {
            name: "Asia"
        },
        {
            name: "Africa"
        },
        {
            name: "Americas"
        },
        {
            name: "Oceania"
        },
        {
            name: "Anartic"
        },
    ]

    useEffect(() => {
        document.title = 'Showing all countries'
    })

    useEffect(() => {
        const getCountries = async () => {
            try {
                const res = await fetch("https://restcountries.com/v3.1/all");
                const data = await res.json();
                setCountries(data);
            } catch (error) {
                console.error(error);
            }
        }
        getCountries();
    }, [])


    async function searchCountry() {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${searchText}`);
            const res1 = await fetch(`https://restcountries.com/v3.1/region/${searchText}`);
            const res2 = await fetch(`https://restcountries.com/v3.1/subregion/${searchText}`);
            const data = await res.json();
            const data1 = await res1.json();
            const data2 = await res2.json();
            setCountries(data);
            setCountries(data1);
            setCountries(data2);
        } catch (error) {
            console.error(error);
        }
    }

    async function filterByRegion(region) {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/region/${region}`
            );
            const data = await res.json();
            setCountries(data);
        } catch (error) {
            console.error(error);
        }
    }

    function handleSearchCountry(e) {
        e.preventDefault()
        searchCountry()
    }

    function handleFilterRegion(e) {
        e.preventDefault()
        filterByRegion()
    }

    return (
        <>{!countries ?
            <h1 className="text-gray-1000 font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-4xl">
                Please Wait While We Get The Data
            </h1> :
            <section className="container mx-auto p-8">

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between py-4">
                    <form onSubmit={handleSearchCountry} autoComplete="off" className="max-w-4xl md:flex-1">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            placeholder="Search for a country | region | subregion"
                            required
                            className="py-3 px-4 text-gray-800 placeholder-gray-800 w-full shadow rounded"
                        />
                    </form>

                    <form onSubmit={handleFilterRegion} className="md:flex flex-2">
                        <select
                            name="filter-by-region"
                            id="filter-by-region"
                            className="w-52 py-3 px-4"
                            value={regions.name}
                            onChange={(e) => filterByRegion(e.target.value)}
                        >
                            {regions.map((region, index) => (
                                <option key={index} value={region.name}>
                                    {region.name}
                                </option>
                            ))}
                        </select>
                    </form>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    {countries.map((country) => (
                        <Article key={country.name.common} {...country} />
                    ))}
                </div>
                <div>
                </div>
            </section>


        }</>
    )
}


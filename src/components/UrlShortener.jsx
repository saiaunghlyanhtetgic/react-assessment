import React, { useState, useEffect } from 'react';



const UrlShortener = () => {
    const [inputUrl, setInputUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [errorMsg, setErrorMsg] = useState(false);
    const [storedUrls, setStoredUrls] = useState([]);

    useEffect(() => {
        const storedUrlsJSON = localStorage.getItem('storedUrls');
        if (storedUrlsJSON) {
            setStoredUrls(JSON.parse(storedUrlsJSON));
        }
    }, []);

    const handleShorten = async () => {
        if (inputUrl) {
            try {
                const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(inputUrl)}`);
                const data = await response.json();

                if (data.ok) {
                    setShortUrl(data.result.short_link);
                    storeUrl(inputUrl, data.result.short_link);

                    setInputUrl('');
                } else {
                }
            } catch (error) {
                console.error('Error shortening URL:', error);
            }
        } else {
            setErrorMsg(true);
        }
    };

    const handleInputBlur = () => {
        if (!inputUrl) {
            setErrorMsg(true);
        }
    };

    const handleInputFocus = () => {
        setErrorMsg(false);
    };

    const storeUrl = (inputUrl, shortUrl) => {
        const newStoredUrls = [...storedUrls, { inputUrl, shortUrl }];
        setStoredUrls(newStoredUrls);
        localStorage.setItem('storedUrls', JSON.stringify(newStoredUrls));
    };

    const copyShortUrl = (index) => {
        const shortUrl = storedUrls[index].shortUrl;
        const tempInput = document.createElement('input');
        tempInput.value = shortUrl;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

    };

    const AddShortUrl = ({ index, urlPair }) => {
        return (
            <div key={index} className="flex flex-col md:flex-row justify-between items-center md:items-center text-slate-100 bg-[#3b3054] p-2">
                <p className="mb-2 md:mb-0 md:mr-2">Input URL: {urlPair.inputUrl}</p>
                <p className="text-wrap mb-2 md:mb-0 md:mr-2">Short URL: {urlPair.shortUrl}</p>
                <button onClick={() => copyShortUrl(index)} className="copy-btn bg-blue-400 text-black p-2 md:p-4 rounded-lg" data-index={index}>Copy</button>
                <hr className="md:hidden mt-2 w-full" />
            </div>
        )
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-2/3 flex flex-col md:flex-row gap-4 md:gap-8 md:bg-[#3b3054] md:bg-right-bottom md:bg-no-repeat md:py-8 md:px-12 md:rounded-lg md:transform md:-translate-y-1/2 md:transition" id="url-shorten-form">
                <div className="relative flex-grow">
                    <input
                        id="url-input"
                        type="text"
                        className="w-full mb-4 p-2 border bg-white border-transparent rounded-lg outline-none transition duration-200 placeholder-gray-500"
                        placeholder="Shorten a link here..."
                        value={inputUrl}
                        onChange={(e) => setInputUrl(e.target.value)}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                    {errorMsg && (
                        <div className="absolute left-0 top-full mt-1">
                            <p className="text-red-600 font-italic text-base text-white-500 transition duration-200" id="error-msg">
                                Please enter a URL.
                            </p>
                        </div>
                    )}
                </div>

                <button
                    onClick={handleShorten}
                    className="capitalize rounded-full bg-blue-500 text-center font-semibold cursor-pointer border-none outline-none transition duration-300 px-4 py-2 text-lg flex items-center justify-center space-x-2"
                >
                    Shorten It!
                </button>
            </div>

            <div className="md:mt-0 my-4">
                {storedUrls.map((urlPair, index) => (
                    <AddShortUrl key={index} index={index} urlPair={urlPair} />

                ))}
            </div>
        </div>
    );
};

export default UrlShortener;

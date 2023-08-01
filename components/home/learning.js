const Learning = () => {
    return (
        <>
            <div className="container">
                <h1 className="text-center bg-primary text-xl font-medium text-white">This is Grid practice section</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-2 text-center">
                    <div className="p-2 bg-yellow-400">block 1</div>
                    <div className="p-2 bg-blue-400">block 2</div>
                    <div className="p-2 bg-red-400">block 3</div>
                    <div className="p-2 bg-green-400">block 4</div>
                    <div className="p-2 bg-pink-400">block 5</div>
                    <div className="p-2 bg-gray-400">block 6</div>
                    <div className="p-2 bg-pink-400">block 7</div>
                    <div className="p-2 bg-violet-400">block 8</div>
                    <div className="p-2 bg-blue-400">block 9</div>
                    <div className="p-2 bg-purple-400">block 10</div>
                    <div className="p-2 bg-blue-400">block 10</div>
                    <div className="p-2 bg-red-400">block 10</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-2 text-center">
                    <div className="p-2 bg-yellow-400">block 1</div>
                    <div className="p-2 bg-blue-400">block 2</div>
                    <div className="p-2 bg-red-400">block 3</div>
                    <div className="p-2 bg-green-400">block 4</div>
                    <div className="p-2 bg-pink-400 col-span-2 ">block 5</div>
                    <div className="p-2 bg-gray-400">block 6</div>
                    <div className="p-2 bg-pink-400">block 7</div>
                    <div className="p-2 bg-violet-400 col-span-4">block 8</div>
                    <div className="p-2 bg-blue-400">block 9</div>
                    <div className="p-2 bg-purple-400">block 10</div>
                    <div className="p-2 bg-blue-400">block 10</div>
                    <div className="p-2 bg-red-400">block 10</div>
                </div>

                <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-4 gap-4 my-2 text-center bg-gray-600 mt-10">
                    <div className="p-2 bg-yellow-400">block 1</div>
                    <div className="p-2 bg-blue-400">block 2</div>
                    <div className="p-2 bg-red-400">block 3</div>
                    <div className="p-2 bg-green-400">block 4</div>
                    <div className="p-2 bg-pink-400 col-span-2 ">block 5</div>
                    <div className="p-2 bg-gray-400">block 6</div>
                    <div className="p-2 bg-pink-400">block 7</div>
                    <div className="p-2 bg-violet-400 col-span-4">block 8</div>
                    <div className="p-2 bg-blue-400">block 9</div>
                    <div className="p-2 bg-purple-400">block 10</div>
                    <div className="p-2 bg-blue-400">block 10</div>
                    <div className="p-2 bg-red-400">block 10</div>
                </div>
            </div>
        </>
    )
}

export default Learning
const Features = () => {
    return (
        <>
            <div className="container">
                <h1 className="text-center bg-primary text-xl font-medium text-white">This is flex practice section</h1>
                <div className="h-80 bg-gray-100 flex flex-col items-center justify-between">
                    <div className="p-2 bg-yellow-400">block 1</div>
                    <div className="p-2 bg-blue-400 h-20">block 2</div>
                    <div className="p-2 bg-red-400">block 3</div>
                    <div className="p-2 bg-green-400">block 4</div>
                    <div className="p-2 bg-pink-400">block 5</div>

                </div>

                <div className="mt-12 h-80 bg-gray-100 flex items-center content-start">
                    <div className="p-2 bg-yellow-400">block 1</div>
                    <div className="p-2 bg-blue-400 h-20">block 2</div>
                    <div className="p-2 bg-red-400">block 3</div>
                    <div className="p-2 bg-green-400">block 4</div>
                    <div className="p-2 bg-pink-400">block 5</div>

                </div>

                <div className="mt-12 h-80 bg-gray-100 flex flex-col ">
                    <div className="p-2 bg-yellow-400">block 1</div>
                    <div className="p-2 bg-blue-400 ">block 2</div>
                    <div className="p-2 bg-red-400">block 3</div>
                    <div className="p-2 bg-green-400">block 4</div>

                </div>

                

            </div>
        </>
    )
}

export default Features
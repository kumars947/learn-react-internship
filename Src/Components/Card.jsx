
export function Card(){

    return <div className="h-[300px] w-[500px] border border-blue-800 m-2 rounded-xl bg-gray-300">
        <div className="text-4xl text-center"> About</div>
        <div className="flex justify-between mr-2 ml-2">
            <div>
                <div className="text-2xl">Anand Kumar</div>
                <div className="text-2xl">KEC, Katihar</div>
                <div className="text-2xl">25105129023</div>
            </div>
            
            <div className="h-[100px] w-[100px] bg-yellow-500 rounded-full"></div>
        </div>
        
    </div>
}

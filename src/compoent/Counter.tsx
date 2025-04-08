import { useStore } from "../Store/Store";

const Counter = () => {

    const count = useStore((state) => state.count);
    const inc = useStore((state) => state.increment);
    const dec = useStore((state) => state.decrement);

    return (
        <div className="">

            <div className="flex space-x-4 justify-center h-40 items-center">
                <button className="cursor-pointer text-white font-bold bg-red-400 p-2 rounded" onClick={() => dec(5)}>Decrement</button>
                <h1 className="text-gray-400">{count}</h1>
                <button className="cursor-pointer text-white font-bold bg-green-400 p-2 rounded" onClick={() => inc(10)}>Increment</button>
            </div>
        </div>
    )
}

export default Counter;
import useStore from "../store/useStore";

const Counter = () => {

    const count = useStore((state) => state.count);
    const inc = useStore((state) => state.increment);
    const dec = useStore((state) => state.decrement);

    return (
        <div className="">
            <h1>{count}</h1>
            <div className="space-x-3 bg-red w-20 h-20">
                <button onClick={() => inc(10)}>Increment</button>
                <button onClick={() => dec(5)}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter;
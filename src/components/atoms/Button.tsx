export const Button = ({children}) => {
    return (
        <button className="px-2 py-4 bg-green-500 text-white font-semibold rounded-lg">
            {children}
        </button>
    );
};
export const Button = ( props ) => {
    const { onSubmit, children} = props;
    return (
        <button className="px-2 py-1 w-16 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
            onClick={()=>onSubmit()}>
            {children}
        </button>
    );
};
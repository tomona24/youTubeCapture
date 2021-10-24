export const InputForm = ( props ) => {
    const { value, handleChange } = props;
    return (
        <input value={value} 
            onChange={handleChange}
            class="shadow appearance-none border rounded py-2 px-3 mx-5 w-96 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="youtubeId" 
            type="text" 
            placeholder="https://www.youtube.com/watch?v=..." 
 />
    );
};
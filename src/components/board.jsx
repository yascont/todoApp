const Board = ({ task , index, taskList, setTaskList}) =>{

    const handleDel = () =>{
        let remove = taskList.indexOf(task);
        taskList.splice(remove, 1);
        setTaskList((currentTasks => currentTasks.filter(todo => index === remove)))
    }
    return (
        <>
            <div className="max-w-xl rounded-xl flex flex-col items-center justify-content border text-center text-ls">
                <p>{task}</p>
                <button
                    className="bg-red-500 text-white rounded-lg py-1 px-2 mt-4"
                    onClick={handleDel}    
                >
                    delet
                </button>
            </div>
        </>
    )
}


export default Board;
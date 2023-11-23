import { useSearchParams } from "react-router-dom"

export const About = () => {
    //useSearchParams() -> 쿼리 스트링을 가져오는 것
    const [queryText, setQueryText] = useSearchParams();
    const detail = queryText.get('detail'); // true false
    const mode = queryText.get('mode'); // + 1

    function onToggleDetail(){
        setQueryText({
             detail: detail === 'true' ? false:true , mode })
    }

    function plusButton(){
        const nextMode = mode === null ? 1 : parseInt(mode) + 1;
        setQueryText({detail, mode: nextMode })
    }

    return(
        <div>
            <h1>소개</h1>
            <span>현재값: {mode}</span>
            <button onClick={onToggleDetail}>toggle button</button>
            <button onClick={plusButton}>plus button</button>
        </div>
    )   
}
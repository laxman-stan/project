import Button from '@mui/material/Button';

export default function SingleStringOperation({btnText, renderData, btnClick}){


    return <div className="f ac">
        <Button onClick={btnClick} variant='contained'>{btnText}</Button>
        {
            renderData && <p>{renderData}</p>
        }
    </div>
}
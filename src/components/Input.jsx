export default function Input(props){
    return(
        <>
        <div className="inputContainer">
            <input
                type="range"
                id="passwordSize"
                min={4}
                max={20}
                value={props.passwordSize}
                onChange={(ev) => props.setPasswordSize(ev.target.value)}
            />
            </div>
        </>
    )

}
function ColorPicker(props) {
    const handleClick = (e) => {
        e.preventDefault();
        const colorPalette = document.querySelector('.color-palette');
        colorPalette.hidden = !colorPalette.hidden;
    }

    const handleColorChange = (e) => {
        const color = e.target.style.backgroundColor;
        const container = document.querySelector('.container');
        container.style.backgroundColor = color;
        const colorPalette = document.querySelector('.color-palette');
        colorPalette.hidden = !colorPalette.hidden;
    }

    return (
        <div className="pt-4">
            <header className="App-header">
                <h2>Color Picker</h2>
            </header>
            <div className="container col-lg-6 col-md-9 col-11">
                <div className="wrapper">
                    <div className="color-palette" hidden>
                        {props.colors.map((color, index) => {
                            return (
                                <div 
                                    key={index}
                                    className="color-box" 
                                    style={{backgroundColor: color}}
                                    onClick={(e) => {handleColorChange(e)}}
                                ></div>
                            )
                        })}
                    </div>
                    <button 
                        onClick={(e) => {handleClick(e)}}
                        className="btn btn-success btn-block"    
                    >Pick a color</button>
                </div>
            </div>
        </div>
    )
}

export default ColorPicker;
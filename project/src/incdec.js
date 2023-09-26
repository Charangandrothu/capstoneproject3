function Operations(){
    var i = 0;
    function inc(){
        if(i<10){
            document.getElementById('para').innerText=i;
            i++;
        }
    }
    function dec(){
        if(i>0){
            document.getElementById('para').innerText=i;
            i--;
        }
    }
    return(
        <div>
            <h2>Increment and decrement operations</h2>
            <p id="para"></p>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
        </div>
    )
}
export default Operations;
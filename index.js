var arr = [];
    var even = [];
    var odd = [];
    function add() {
        const show = document.getElementById("input").value;
        arr.push(show);
        document.getElementById("rollnumber").innerText = arr;
        document.getElementById("input").value = "";
    }
    function arrange(){
        for(i = 0; i< arr.length; i++){
            if((arr[i] % 2) === 0){
                even.push(arr[i]);
                document.getElementById("evenNumber").innerText = even;
            }
            else{
                odd.push(arr[i]);
                document.getElementById("oddNumber").innerText = odd;
            }
        }
    }

function search(ele) {
    if(event.key === 'Enter') {
    var str = ele.value;        
    var searchStr = "https://www.youtube.com/results?search_query=";
    var res = searchStr + str;
    window.location.href = res;
    }
}
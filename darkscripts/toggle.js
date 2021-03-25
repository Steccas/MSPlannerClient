var elem =  document.getElementsByClassName("my-custom-dark-style");
if(elem !== undefined && elem !== null)
{
    Array.prototype.forEach.call(elem, ele => {
        ele.parentElement.removeChild(ele);    
    });    
}
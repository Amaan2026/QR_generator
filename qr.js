const qrText = document.getElementById("qr-text");
const sizes= document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

const qrContainer = document.querySelector('.qr-body');

generateBtn.addEventListener('click',(e)=>{
e.preventDefault();
emptyInput();
});
 let size=sizes.value;
function generateQRCode(){
    qrContainer.innerHTML="";
    new QRCode(qrContainer,{
            text: qrText.value,
            width: size,
            height: size,
            colorDark : "#000000",
            colorLight : "#ffffff",
           });
        }

function emptyInput(){
    qrText.value.length>0 ? generateQRCode() :alert("Please enter the text")
}        

downloadBtn.addEventListener('click',()=>{
    let img = document.querySelector('.qr_body img')
    if(img!== null){
        let imgArr = img.getAttribute('src');
        downloadBtn.setAttribute("href",imgArr);
    }
    else{
         downloadBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`)
    }
});
sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    emptyInput();
})
const videoElement=document.getElementById('video');
const button=document.getElementById('button');

//Prompt the user to select a mediastream ,passto video element, then play
async function selectMediaStream(){
    try{
        const mediaStream=await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject=mediaStream;
        videoElement.onloadedmetadata=() =>{
            videoElement.play()
        }
    }catch(error){
        //we will catch errors here
        console.log("whoops error here:",error)
    }
}
button.addEventListener('click',async ()=>{
    button.disabled=true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset the button
    button.disabled=false;
});
//onload
selectMediaStream();
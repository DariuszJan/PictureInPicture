const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select the media stream

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }
    catch(error){
        // Error here
        console.log('error here moron', error);
    }
}

button.addEventListener('click', async () => {
// Disable button
button.disabled = true;
// Start picture in picture
await videoElement.requestPictureInPicture();
// Reset button

button.disabled = false;
});

// Onload
selectMediaStream();
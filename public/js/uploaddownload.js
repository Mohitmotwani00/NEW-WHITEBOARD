function download(){
    var link = document.createElement('a');
    link.download = 'filename.png';
    // canvas board => link
    link.href = board.toDataURL("image/png");
    // click 
    link.click();
  }

  const inputTag=document.getElementById("file-input");
   
   inputTag.addEventListener("change",function(){
      const imgFile=inputTag.files[0];
      const img = document.createElement("img");

      img.src = URL.createObjectURL(imgFile);
      
      //property set krdi yha
      img.height = 60;
      const body=document.querySelector("body");
      body.appendChild(img);
      

  })
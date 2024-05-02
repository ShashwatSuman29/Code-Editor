function run() {
  let htmlCode = document.getElementById("html-code").value;
  let cssCode = document.getElementById("css-code").value;
  let jsCode = document.getElementById("js-code").value;
  let output = document.getElementById("output");

  output.contentDocument.body.innerHTML =
    htmlCode + "<style>" + cssCode + "</style>";

    
  //contentWindow.eval will evalute the js login and display it on the code editor
  output.contentWindow.eval(jsCode);
}


// copy code in the clipboard
 function copyCode() {
      let htmlCode = document.getElementById("html-code").value;
      let cssCode = document.getElementById("css-code").value;
      let jsCode = document.getElementById("js-code").value;
      let code = htmlCode + "\n<style>\n" + cssCode + "</style>\n<script>\n" + jsCode + "</script>";

      navigator.clipboard.writeText(code)
        .then(() => {
          alert('Code copied to clipboard!');
        })
        .catch(err => {
          console.error('Could not copy code: ', err);
        });
    }





 
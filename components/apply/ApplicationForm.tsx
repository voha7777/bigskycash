import React, { useEffect } from 'react'

const ApplicationForm: React.FC = () => {
  useEffect(() => {
    // Create the first script element
    const jsonScript = document.createElement('script');
    jsonScript.src = 'https://www.rndframe.com/server/web/js/json.min.js';
    jsonScript.type = 'text/javascript';
    document.body.appendChild(jsonScript);

    // Create the second script element
    const formScript = document.createElement('script');
    formScript.type = 'text/javascript';
    formScript.innerHTML = `
      var srcURL= 'https://www.rndframe.com/server'; 
      var inputOptions = { 
        UserID: 'ZT4LlEwwo9MoHR4Sd6sYVDeevacfDDdSagmRZFWx_98.', 
        Style: 'STYLE5', 
        FormID: 'INSTALLMENT_STEP', 
        SubID: '', 
        SubID2: '', 
        SubID3: '', 
        Domain: '', 
        Height: 'AUTO', 
        StepAmountSelect: 'buttons',
        TargetDivID: 'rsForm'
      }; 
      document.write('<scr'+'ipt type="text/javascript" src="'+ 
                      srcURL +'/init.php?vn=' + encodeURIComponent(JSON.stringify(inputOptions)) + '"></scr'+'ipt>'); 
    `;
    
    // Add the script after a short delay to ensure the JSON script is loaded
    setTimeout(() => {
      document.body.appendChild(formScript);
    }, 100);

    // Create the div for the form
    const formDiv = document.createElement('div');
    formDiv.id = 'rsForm';
    document.getElementById('application-form').appendChild(formDiv);

    // Cleanup function
    return () => {
      document.body.removeChild(jsonScript);
      document.body.removeChild(formScript);
    };
  }, []);

  return null;
}

export default ApplicationForm
